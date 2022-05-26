import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'
import accounts from '@/store/modules/accounts'
// import {changemileage} from '@/store/modules/accounts'

// import { get } from 'core-js/core/dict'
// import { parseInt } from 'core-js/core/number'
// import _ from 'lodash'



export default {


  // popcorn은 전체 참가자 list
  // applicant는 실시간으로 지원자수를 보여주기 위한 state 변수
  // winner는 실시간으로 참가자를 보여주기 위한 state 변수
  state: {
    popcorn: localStorage.getItem('popcorn'),
    applicants: null,
    winner: null,
    reviewSum: null,
    commentSum: null,
    likeSum: null,
    points: localStorage.getItem('points'),
    rank: null, 
    totalRank: null,
  },

  getters: {
    popcorn:state => state.popcorn,
    applicants: state => state.applicants,
    winner: state => state.winner,
    reviewSum: state => state.reviewSum,
    commentSum: state => state.commentSum,
    likeSum: state => state.likeSum,
    points: state => state.points,
    rank: state => state.rank,
    totalRank: state => state.totalRank
  },

  mutations: {
    // SET_POPCORN (username) {
    //   localStorage.setItem('popcorn', JSON.stringify(username))
    // }
    SET_POPCORN: (state, popcorn) => state.popcorn = popcorn,
    SET_APPLICANTS: (state, applicants) => state.applicants = applicants,
    SET_WINNER: (state, winner) => state.winner = winner,
    SET_REVIEWSUM: (state, reviewSum) => state.reviewSum = reviewSum,
    SET_COMMENTSUM: (state, commentSum) => state.commentSum = commentSum,
    SET_LIKESUM: (state, likeSum) => state.likeSum = likeSum,
    SET_POINTS: (state, points) => state.points = points,
    SET_RANK: (state, rank) => state.rank = rank,
    SET_TOTALRANK: (state, totalRank) => state.totalRank = totalRank,


    // SET_CURRENTPOINTS: (state, points) => state.points = points,

  },

  actions: {
    
    // 신청자 localStorage에 저장
    savePopcorn({ getters, commit, dispatch}, ){
      // 신청자 조건 확인 
      const username = accounts.state.currentUser.username    
      axios({
        url: drf.accounts.profile(username),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          console.log(res)
          var list = JSON.parse(localStorage.getItem('popcorn'))
          console.log(list)
          var part = false
          for(let key in list){
            if (list[key] === username) {
              part = true
            }
            
          }
          if(res.data.mileage < 2000){
            alert('잔액이 부족합니다.')
          } else if(part){
            alert('이미 참여하셨습니다.')
          } else {
            // 신청자 수 저장
            // changemileage 수정
            let mileage = res.data.mileage
            mileage -= 2000
            console.log(username)
            console.log(accounts)
            dispatch('changeMileage',{username: username, mileage: mileage})
            

            list.push(username)
            localStorage.setItem('popcorn', JSON.stringify(list))
            const applicants = JSON.parse(localStorage.getItem('popcorn')).length
            commit('SET_APPLICANTS', applicants)
            commit('SET_MILEAGE', mileage)
          }
        })
    },

    // 이벤트 마감 및 당첨자 반환
    resetList({commit, getters}) {
      localStorage.setItem('popcorn', JSON.stringify([]))
      const applicants = JSON.parse(localStorage.getItem('popcorn')).length
      console.log(applicants)
      commit('SET_APPLICANTS', applicants)

      // 이벤트 화면 돌아가기
      router.push({
        name: 'popcorn',
      })
      commit('SET_WINNER', getters.winner) 
    },

    // 페이지 들어가자마자 display하기 위한 method
    displayPopcorn({commit}) {
      const applicants = JSON.parse(localStorage.getItem('popcorn')).length
      console.log(applicants)
      commit('SET_APPLICANTS', applicants)
    },


    fetchList({commit, getters}) {
      const winner = JSON.parse(localStorage.getItem('popcorn'))
      // random으로 20% 인원 무작위 선발 로직
      let lucky = parseInt(winner.length * 0.2)
      console.log('lucky is ', lucky)
      console.log(winner.length)
      commit('SET_WINNER', winner )
      let visited = []
      let result = []
      for(let i=0; i < lucky; ) {
        let num = Math.floor(Math.random() * winner.length)
        if (visited.indexOf(num) === -1){
          visited.push(num)
          result.push(winner[num]) 
          i++
        }
      }
      
      commit('SET_WINNER', result)
      console.log(getters.winner)
    },

    // Event2 정보 fetch
    fetchEventReview({getters, commit}) {
      axios({
        url: drf.event.reviewevent(),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => {
        
        // 리뷰 개수
        const review_sum = res.data.length
        commit('SET_REVIEWSUM', review_sum)

        // comment_sum & like_sum 개수
        let comment_sum = 0
        let like_sum = 0
        for (let i in res.data){
          comment_sum += res.data[i].comment_count
          like_sum += res.data[i].like_count
        }
        console.log(review_sum)
        console.log(comment_sum)
        console.log(like_sum)
        commit('SET_COMMENTSUM', comment_sum)
        commit('SET_LIKESUM', like_sum)

        // point 계산식
        const points = 1000*review_sum + 500*comment_sum + 200*like_sum
        console.log(points)
        console.log(this.getters.currentUser.username)

        // point 기준 정렬
        let beforePoints = JSON.parse(localStorage.getItem('points'))
        var newPointsList = Object.assign({}, beforePoints, {[this.getters.currentUser.username]: points});
        const sortedPointsList = Object.entries(newPointsList)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

        // rank 생성
        let rank = 1
        for(let [name, point] of Object.entries(sortedPointsList)){
          console.log(name,point)
          if(name === this.getters.currentUser.username) {
            break
          }
          rank += 1
        }
        commit('SET_RANK', rank)

        console.log(rank)
        
        // total 객체, rank와 배열 결합
        let totalRank = {}
        let id = 1
        for(let [name, point] of Object.entries(sortedPointsList)){
          totalRank[id] = {rank: id, name: name, point: point}
          id += 1
        }
        commit('SET_TOTALRANK', totalRank)

        // total 객체
        console.log(totalRank)


        // 정렬된 배열 localstorage에 적용
        localStorage.setItem('points',JSON.stringify(sortedPointsList))
        

      })
    }


  },
}

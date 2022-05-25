// import router from '@/router'
// import axios from 'axios'
// import drf from '@/api/drf'
import accounts from '@/store/modules/accounts'


export default {

  state: {
    popcorn: localStorage.getItem('popcorn'),
    applicants: null,
  },

  getters: {
    popcorn:state => state.popcorn,
    applicants: state => state.applicants,
    winner: state => state.winner
  },

  mutations: {
    // SET_POPCORN (username) {
    //   localStorage.setItem('popcorn', JSON.stringify(username))
    // }
    SET_POPCORN: (state, popcorn) => state.popcorn = popcorn,
    SET_APPLICANTS: (state, applicants) => state.applicants = applicants,
    SET_WINNER: (state, winner) => state.winner = winner
  },

  actions: {

    // 신청자 localStorage에 저장
    savePopcorn({commit}){
      const username = accounts.state.currentUser.username
      // var test = this.getters.popcorn
      var list = JSON.parse(localStorage.getItem('popcorn'))
      list.push(username)
      // console.log(list)
      localStorage.setItem('popcorn', JSON.stringify(list))
      const applicants = JSON.parse(localStorage.getItem('popcorn')).length
      console.log(applicants)
      commit('SET_APPLICANTS', applicants)
      // console.log(username)
      // console.log(localStorage.getItem('popcorn'))
    },

    // 이벤트 마감 및 당첨자 반환
    resetList({commit}) {
      localStorage.setItem('popcorn', JSON.stringify([]))
      const applicants = JSON.parse(localStorage.getItem('popcorn')).length
      console.log(applicants)
      commit('SET_APPLICANTS', applicants)
    },

    displayPopcorn({commit}) {
      const applicants = JSON.parse(localStorage.getItem('popcorn')).length
      console.log(applicants)
      commit('SET_APPLICANTS', applicants)
    },

  },
}

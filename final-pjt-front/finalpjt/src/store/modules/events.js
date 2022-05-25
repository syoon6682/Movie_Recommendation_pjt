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
  },

  mutations: {
    // SET_POPCORN (username) {
    //   localStorage.setItem('popcorn', JSON.stringify(username))
    // }
    SET_POPCORN: (state, popcorn) => state.popcorn = popcorn,
    SET_APPLICANTS: (state, applicants) => state.applicants = applicants,
  },

  actions: {
    savePopcorn(){
      const username = accounts.state.currentUser.username
      // var test = this.getters.popcorn
      var list = JSON.parse(localStorage.getItem('popcorn'))
      list.push(username)
      // console.log(list)
      localStorage.setItem('popcorn', JSON.stringify(list))
      this.displayPopcorn()
      // console.log(username)
      // console.log(localStorage.getItem('popcorn'))
    },
    resetList() {
      localStorage.setItem('popcorn', JSON.stringify([]))
      this.displayPopcorn()
    },

    displayPopcorn({commit}) {
      let applicants = JSON.parse(localStorage.getItem('popcorn')).length
      console.log(applicants)
      commit('SET_APPLICANTS', applicants)
      console.log('test1')
    }

  },
}

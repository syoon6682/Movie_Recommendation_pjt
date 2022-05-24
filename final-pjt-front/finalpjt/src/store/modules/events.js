// import router from '@/router'
// import axios from 'axios'
// import drf from '@/api/drf'
import accounts from '@/store/modules/accounts'


export default {

  state: {
    popcorn: localStorage.getItem('popcorn')
  },

  getters: {
    popcorn:state => state.popcorn,
  },

  mutations: {
    SET_POPCORN: (state, username) => state.username = username
  },

  actions: {
    savePopcorn({commit}){
      const username = accounts.state.currentUser.username
      commit("SET_POPCORN", username)
      console.log(username)
      console.log(localStorage.getItem('popcorn'))
    }
  },
}
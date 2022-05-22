// import router from '@/router'
// import axios from 'axios'
// import drf from '@/api/drf'


export default {

  state: {
    answer: [],
  },

  getters: {
    answer:state => state.answer,
  },

  mutations: {
    SET_ANSWER: (state, answer) => state.answer=answer  
  },

  actions: {
    saveAnswer({commit}, res){
      console.log(res)
      commit('SET_ANSWER')
    }
  },
}

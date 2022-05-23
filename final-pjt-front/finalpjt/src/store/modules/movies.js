// import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'


export default {

  state: {
    answer: [],
    answer1: localStorage.getItem('answer1'),
    answer2: localStorage.getItem('answer2'),
    answer3: localStorage.getItem('answer3'),
    answer4: localStorage.getItem('answer4'),
    answer5: localStorage.getItem('answer5'),
  },

  getters: {
    answer:state => state.answer,
    answer1:state => state.answer1,
    answer2:state => state.answer2,
    answer3:state => state.answer3,
    answer4:state => state.answer4,
    answer5:state => state.answer5,
  },

  mutations: {
    SET_ANSWER: (state, answer) => state.answer=answer, 
    SET_ANSWER1: (state, answer1) => state.answer1=answer1, 
    SET_ANSWER2: (state, answer2) => state.answer2=answer2,  
    SET_ANSWER3: (state, answer3) => state.answer3=answer3, 
    SET_ANSWER4: (state, answer4) => state.answer4=answer4,  
    SET_ANSWER5: (state, answer5) => state.answer5=answer5,  
  },

  actions: {
    saveAnswer({commit}, res){
      console.log(res)
      commit('SET_ANSWER')
    },

    getResults(){

      axios({
        url: drf.recommendation.recommendationresult(),
        method: 'post',
        params:{
          answer1: 1,
          answer2: 2,
          answer3: 3,
          answer4: 4,
        }        
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
        console.error(err.response.data)
        })
  },
}
}
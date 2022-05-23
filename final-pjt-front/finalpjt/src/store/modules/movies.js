// import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'
import accounts from '@/store/modules/accounts'


export default {

  state: {
    answer: [],
    answer1: localStorage.getItem('answer1'),
    answer2: localStorage.getItem('answer2'),
    answer3: localStorage.getItem('answer3'),
    answer4: localStorage.getItem('answer4'),
    answer5: localStorage.getItem('answer5'),
    movies: null
  },

  getters: {
    answer:state => state.answer,
    answer1:state => state.answer1,
    answer2:state => state.answer2,
    answer3:state => state.answer3,
    answer4:state => state.answer4,
    answer5:state => state.answer5,
    recommMovie: state => state.movies,
  },

  mutations: {
    SET_ANSWER: (state, answer) => state.answer=answer, 
    SET_ANSWER1: (state, answer1) => state.answer1=answer1, 
    SET_ANSWER2: (state, answer2) => state.answer2=answer2,  
    SET_ANSWER3: (state, answer3) => state.answer3=answer3, 
    SET_ANSWER4: (state, answer4) => state.answer4=answer4,  
    SET_ANSWER5: (state, answer5) => state.answer5=answer5,
    GETMOVIES(state, movies) {
      state.movies = movies
    },  
  },

  actions: {
    saveAnswer({commit}, res){
      console.log(res)
      commit('SET_ANSWER')
    },
    getResults({commit}){
      // console.log(accounts.getters.authHeader(accounts.state))
      axios({
        url: drf.recommendation.recommendationresult(),
        method: 'get',
        headers: accounts.getters.authHeader(accounts.state),
        // headers: {
        //   Authorization: 'Token ' + accounts.state.token
        // },
        // params:{
        //   answer1: 1,
        //   answer2: 2,
        //   answer3: 3,
        //   answer4: 4,
        // }        
      })
        .then(res => {
          commit('GETMOVIES', res.data)
        })
        .catch(err => {
          console.error(err.response.data)
        })
  },
  getMovie({commit}, movies) {
    const MOVIE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d7ce0ca6196a14ee5e3eab47f84bbba5&language=en-US&page=1"
    axios.get(MOVIE_URL)
      .then((res) =>{
          movies = res.data.results
          commit('GETMOVIES', movies)
        }
      );
  },

  fetchMovie( { getters }, {moviePk}) {
    axios({
      url: drf.movies.movie(moviePk),
      method: 'get',
      headers: {
        Authorization: 'Token ' + accounts.state.token
      },
    })
      .then(res => {
        console.log(res)
        console.log(getters.recommMovie)
        // commit('GETMOVIES', res.data)
      })
  },

  }
}
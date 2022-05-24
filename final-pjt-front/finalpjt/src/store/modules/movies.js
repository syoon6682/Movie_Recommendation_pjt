import router from '@/router'
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
    getResults({commit, getters}){
      // console.log(accounts.getters.authHeader(accounts.state))
      axios({
        url: drf.recommendation.recommendationresult(),
        method: 'get',
        headers: accounts.getters.authHeader(accounts.state),
        params:{
          answer1: getters.answer1,
          answer2: getters.answer2,
          answer3: getters.answer3,
          answer4: getters.answer4,
        }        
      })
        .then(res => {
          commit('GETMOVIES', res.data)
        })
        .catch(err => {
          console.error(err.response.data)
        })
  },

  // home 화면 영화 display
  getMovie({commit}, movies) {
    const MOVIE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d7ce0ca6196a14ee5e3eab47f84bbba5&language=en-US&page=1"
    axios.get(MOVIE_URL)
      .then((res) =>{
          movies = res.data.results
          commit('GETMOVIES', movies)
        }
      );
  },

  fetchMovie( { commit }, movieId) {
    axios({
      url: drf.movies.movie(movieId),
      method: 'get',
      headers: {
        Authorization: 'Token ' + accounts.state.token
      },
    })
      .then(res => {
        commit('GETMOVIES', res.data)
      })
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.push({ name: 'notfound404' })
        }
      })
  },

  // moveToDetail({}) {
  //   dispatch('GET_MOVIES', )
  // }
  

  // fetchArticle({ commit, getters }, articlePk) {

  //   axios({
  //     url: drf.articles.article(articlePk),
  //     method: 'get',
  //     headers: getters.authHeader,
  //   })
  //     .then(res => commit('SET_ARTICLE', res.data))
  //     .catch(err => {
  //       console.error(err.response)
  //       if (err.response.status === 404) {
  //         router.push({ name: 'NotFound404' })
  //       }
  //     })
  // },


  }
}
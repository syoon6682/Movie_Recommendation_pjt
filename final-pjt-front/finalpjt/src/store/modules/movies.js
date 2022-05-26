import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'
import accounts from '@/store/modules/accounts'
import _ from 'lodash'

export default {

  state: {
    reviews: [],
    review: { },

    comments: [],

    answer: [],
    answer1: localStorage.getItem('answer1'),
    answer2: localStorage.getItem('answer2'),
    answer3: localStorage.getItem('answer3'),
    answer4: localStorage.getItem('answer4'),
    answer5: localStorage.getItem('answer5'),

    movies: null
  },

  getters: {
    // movie detail안의 review
    reviews: state => state.reviews,
    review: state => state.review,
    isAuthor: (state, getters) => {
      return state.review.user?.username === getters.currentUser.username
    },
    isReview: state => !_.isEmpty(state.review),
 
    comments: state => state.comments,

    // recommendation 대답들
    answer:state => state.answer,
    answer1:state => state.answer1,
    answer2:state => state.answer2,
    answer3:state => state.answer3,
    answer4:state => state.answer4,
    answer5:state => state.answer5,

    // recommendation에서 나올 영화들
    recommMovie: state => state.movies,
  },

  mutations: {
    // review
    SET_REVIEWS: (state, reviews) => state.reviews = reviews,
    SET_REVIEW: (state, review) => state.review = review,

    SET_REVIEW_COMMENTS: (state, comments) => (state.comments = comments),
    
    // answer
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
  //review
  fetchReviews({ commit, getters }, movieId) {
    axios({
      url: drf.movies.review(movieId),
      method: 'get',
      headers: getters.authHeader,
    })
      .then(res => {
        console.log(res.data)
        commit('SET_REVIEWS', res.data)}
        )
      .catch(err => console.error(err.response))
  },

  fetchReview({ commit, getters }, {movieId, reviewId}) {
    axios({
      url: drf.movies.reviewdetail(movieId, reviewId),
      method: 'get',
      headers: getters.authHeader,
    })
      .then(res => commit('SET_REVIEW', res.data))
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.push({ name: 'notfound404' })
        }
      })
  },

  createReview({ getters, commit }, {newReview, moviePk}) {
    axios({
      url: drf.movies.newreview(moviePk),
      method: 'post',
      data: newReview,
      headers: getters.authHeader,
      params: {
        title: newReview.title,
        content: newReview.content,
      }
    })
      .then(res => {
        commit('SET_REVIEW', res.data)
        // console.log(getters.review),
        // console.log(getters.reviews),
        console.log(res.data)
        console.log(getters.recommMovie)
        router.push({
          name: 'reviewdetail',
          params: { reviewId: res.data.pk, movieId: getters.recommMovie.id }
        })
      })
  },

  updateReview({ commit, getters }, { moviePk, reviewPk, title, content}) {
    axios({
      url: drf.movies.updatereview(moviePk, reviewPk),
      method: 'put',
      data: { title, content },
      headers: getters.authHeader,
    })
      .then(res => {
        commit('SET_REVIEW', res.data)
        router.push({
          name: 'reviewdetail',
          params: { reviewId: reviewPk, movieId: moviePk }
        })
      })
  },

  deleteReview({ commit, getters }, { movieId, reviewId }) {
    if (confirm('정말 삭제하시겠습니까?')) {
      axios({
        url: drf.movies.deletereview(reviewId),
        method: 'delete',
        headers: getters.authHeader,
      })
        .then(() => {
          commit('SET_REVIEW', {})
          router.push(
            { name: 'moviedetail',
              params: {movieId}
            }
          )
        })
        .catch(err => console.error(err.response))
    }
  },

  likeReview({ commit, getters }, {moviePk, reviewPk}) {
    console.log('넘어와라..!')
    console.log(reviewPk)
    axios({
      url: drf.movies.likeReview(moviePk, reviewPk),
      method: 'post',
      headers: getters.authHeader,
    })
      .then(res => commit('SET_REVIEW', res.data))
      .catch(err => console.error(err.response))
  },



  // comment
  createComment({ commit, getters }, { moviePk, reviewPk, content }) {
    const comment = { content }

    axios({
      url: drf.movies.comments(moviePk, reviewPk),
      method: 'post',
      data: comment,
      headers: getters.authHeader,
    })
      .then(res => {
        commit('SET_REVIEW_COMMENTS', res.data)
      })
      .catch(err => console.error(err.response))
  },

  updateComment({ commit, getters }, { moviePk, reviewPk, commentPk, content }) {
    const comment = { content }

    axios({
      url: drf.movies.comment(moviePk, reviewPk, commentPk),
      method: 'put',
      data: comment,
      headers: getters.authHeader,
    })
      .then(res => {
        commit('SET_REVIEW_COMMENTS', res.data)
      })
      .catch(err => console.error(err.response))
  },

  deleteComment({ commit, getters }, { moviePk, reviewPk, commentPk }) {
      if (confirm('정말 삭제하시겠습니까?')) {
        axios({
          url: drf.movies.comment(moviePk, reviewPk, commentPk),
          method: 'delete',
          data: {},
          headers: getters.authHeader,
        })
          .then(res => {
            commit('SET_REVIEW_COMMENTS', res.data)
          })
          .catch(err => console.error(err.response))
      }
    },

    fetchComments({ commit, getters }, {movieId, reviewId}) {
      axios({
        url: drf.movies.comments(movieId, reviewId),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          console.log('fetchcomment data: ', res.data)
          commit('SET_REVIEW_COMMENTS', res.data)
        })
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'notfound404' })
          }
        })
    },





    // recommendations - answers
    saveAnswer({commit}, res){
      console.log(res)
      commit('SET_ANSWER')
    },

    // 이번 한정 getResult 개발만 진행
    getResults({commit, getters}){

      axios({
        url: drf.recommendation.recommendationresult(),
        method: 'get',
        headers: accounts.getters.authHeader(accounts.state),
        params:{
          answer: getters.answer,

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
  

  // fetchreview({ commit, getters }, reviewPk) {

  //   axios({
  //     url: drf.reviews.review(reviewPk),
  //     method: 'get',
  //     headers: getters.authHeader,
  //   })
  //     .then(res => commit('SET_review', res.data))
  //     .catch(err => {
  //       console.error(err.response)
  //       if (err.response.status === 404) {
  //         router.push({ name: 'NotFound404' })
  //       }
  //     })
  // },


  }
}
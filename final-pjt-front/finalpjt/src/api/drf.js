const HOST = 'http://localhost:8000/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const EVENT = 'event/'
const RECOMMENDATION = 'recommendation/'
const REVIEW = 'review/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: username => HOST + ACCOUNTS + 'profile/' + username,
    // profileupdate: username => HOST + ACCOUNTS + 'profile/' + username + 'update/',
  },
  movies: {
    // /movies/1/
    movie: moviePk => HOST +  MOVIES + `${moviePk}/`,
    review: moviePk => HOST + MOVIES + `${moviePk}/` + REVIEW,
    reviewdetail: (moviePk, reviewPk) => HOST + MOVIES + `${moviePk}/` + REVIEW + `${reviewPk}/`,
    search: (search) => HOST + MOVIES + 'search/' + `${search}`,
  },
  recommendation: {
    recommendationquestion: () => HOST + MOVIES + RECOMMENDATION + 'question/',
    recommendationresult: () => HOST + MOVIES + RECOMMENDATION + 'result/',
  },
  event : {
    event: () => HOST + MOVIES + EVENT,
    popcorn: () => HOST + MOVIES + EVENT + 'popcorn/',
    reviewevent: () => HOST + MOVIES + EVENT + 'reviewevent/',
    moviemaking: () => HOST + MOVIES + EVENT + 'moviemaking/',
  }
}

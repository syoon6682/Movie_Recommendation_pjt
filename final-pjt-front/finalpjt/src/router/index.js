import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView.vue'

// account
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfileView from '@/views/ProfileView.vue'
// import ProfileUpdate from '@/views/ProfileUpdate.vue'

// event
import EventList from '@/views/EventList.vue'
import PopcornView from '@/views/PopcornView.vue'
import PopcornResult from '@/views/PopcornResult.vue'
import ReviewEvent from '@/views/ReviewEvent.vue'
import MovieMaking from '@/views/MovieMaking.vue'
// import QuestionList from '@/views/QuestionList.vue'

// recommendation
import ResultList from '@/views/ResultList.vue'
import SearchList from '@/views/SearchList.vue'
import NotFound404 from '@/views/NotFound404.vue'
import question1 from '@/views/questions/question1.vue'
import question2 from '@/views/questions/question2.vue'
import question3 from '@/views/questions/question3.vue'
import question4 from '@/views/questions/question4.vue'
import question5 from '@/views/questions/question5.vue'

// review
import MovieDetail from '@/views/MovieDetail.vue'
import ReviewDetail from '@/views/ReviewDetail.vue'
import NewReview from '@/views/NewReview.vue'
import ReviewEdit from '@/views/ReviewEdit.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView
  },
  // {
  //   path: '/profile/:username/update',
  //   name: 'profileupdate',
  //   component: ProfileUpdate
  // },
  // 우선은 검색기능 보류...
  {
    path: '/Search/:search',
    name: 'search',
    component: SearchList
  },
  //
  {
    path: '/event',
    name: 'event',
    component: EventList
  },
  {
    path: '/event/popcorn',
    name: 'popcorn',
    component: PopcornView
  },
  {
    path: '/event/popcorn/result',
    name: 'popcornresult',
    component: PopcornResult
  },
  {
    path: '/event/review',
    name: 'reviewevent',
    component: ReviewEvent
  },
  {
    path: '/event/moviemaking',
    name: 'moviemaking',
    component: MovieMaking
  },
  // {
  //   path: '/recommendation/question',
  //   name: 'question',
  //   component: QuestionList
  // },
  {
    path: '/recommendation/question1',
    name: 'question1',
    component: question1
  },
  {
    path: '/recommendation/question2',
    name: 'question2',
    component: question2
  },
  {
    path: '/recommendation/question3',
    name: 'question3',
    component: question3 
  },
  {
    path: '/recommendation/question4',
    name: 'question4',
    component: question4
  },
  {
    path: '/recommendation/question5',
    name: 'question5',
    component: question5
  },
  {
    path: '/recommendation/result',
    name: 'result',
    component: ResultList
  },
  {
    path: '/movie/:movieId',
    name: 'moviedetail',
    component: MovieDetail
  },
  {
    path: '/movie/:movieId/review/new',
    name: 'newreview',
    component: NewReview
  },
  {
    path: '/movie/:movieId/review/:reviewId',
    name: 'reviewdetail',
    component: ReviewDetail
  },
  {
    path: '/movie/:movieId/review/:reviewId/edit',
    name: 'reviewedit',
    component: ReviewEdit
  },
  {
    path: '/404',
    name: 'notfound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  }, 
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

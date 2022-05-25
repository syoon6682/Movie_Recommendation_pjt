import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'


export default {
  
  state: {
    token: localStorage.getItem('token') || '' ,
    currentUser: {},
    profile: {},
    authError: null,
    mileage: localStorage.getItem('mileage')
  },
  
  getters: {
    isLoggedIn: state => !!state.token,
    currentUser: state => state.currentUser,
    profile: state => state.profile,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: `Token ${state.token}`}),
    mileage: state => state.mileage,
  },

  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_PROFILE: (state, profile) => state.profile = profile,
    SET_AUTH_ERROR: (state, error) => state.authError = error,
    SET_MILEAGE: (state, mileage) => state.mileage = mileage,
  },

  actions: {
    saveToken({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },

    removeToken({ commit }) {
      commit('SET_TOKEN', '')
      localStorage.setItem('token', '')
    },

    login({ commit, dispatch }, credentials) {
      axios({
        url: drf.accounts.login(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          dispatch('saveToken', token)
          dispatch('fetchCurrentUser')
          router.push({ name: 'home' })
        })
        .catch(err => {
          console.error(err.response.data)
          commit('SET_AUTH_ERROR', err.response.data)
        })
    },

    signup({ commit, dispatch }, credentials) {
      axios({
        url: drf.accounts.signup(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          dispatch('saveToken', token)
          dispatch('changeMileage', 0)
          dispatch('fetchCurrentUser')
          router.push({ name: 'home' })
        })
        .catch(err => {
          console.error(err.response.data)
          commit('SET_AUTH_ERROR', err.response.data)
        })
    },

    logout({ getters, dispatch }) {
      axios({
        url: drf.accounts.logout(),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(() => {
          dispatch('removeToken')
          router.push({ name: 'login' })
        })
        .catch(err => {
          console.log(err)
          console.error(err.response)
        })
    },

    fetchCurrentUser({ commit, getters, dispatch }) {
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.currentUserInfo(),
          method: 'get',
          headers: getters.authHeader,
        })
          .then(res => commit('SET_CURRENT_USER', res.data))
          .catch(err => {
            if (err.response.status === 401) {
              dispatch('removeToken')
              router.push({ name: 'login' })
            }
          })
      }
    },

    // object unpacking
    fetchProfile({ commit, getters }, { username }) {
      axios({
        url: drf.accounts.profile(username),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_PROFILE', res.data)
        })
    },

    updateProfile({getters}, credentials) {
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.profileupdate(credentials.data.username),
          method: 'post',
          headers: getters.authHeader,
          data: credentials
        })
        .then(res => {
          console.log(res)
        })
      }
      },

      addMileage({getters, dispatch}, {username}) {
        axios({
          url: drf.accounts.profile(username),
          method: 'get',
          headers: getters.authHeader,
        })
        .then(res => {
          console.log(res)
          let mileage = res.data.mileage
          mileage = parseInt(mileage)
          mileage += 1000
          dispatch('changeMileage', {username: username, mileage: mileage})
        })      
      },

      // Localstorage를 활용한 mileage 충전
    changeMileage ({getters}, {username, mileage}) {
      console.log(mileage)
      axios({
        url: drf.accounts.profileUpdate(username),
          method: 'put',
          headers: getters.authHeader,
          data: {
            username: username,
            mileage: mileage,
          }
      })
      .then(res => console.log(res))
    },

      // addMileage({getters, commit,}, {username}) {
      //   if (getters.isLoggedIn) {
      //     axios({
      //       url: drf.accounts.profile(username),
      //       method: 'get',
      //       headers: getters.authHeader,
      //     })
      //     .then( () => {
      //       let mileage = this.$store.state.accounts.mileage
      //       console.log(mileage)
      //       mileage += 1000
      //       commit('SET_MILEAGE', mileage)
      //       localStorage.setItem('mileage', mileage)
      //       // this.$store.state.accounts.mileage.push(mileage)
      //     })
      //   }
      // }



    // addMileage({getters, dispatch, commit}, {username}) {

    //         if (getters.isLoggedIn) {
    //           axios({
    //             url: drf.accounts.profile(username),
    //             method: 'get',
    //             headers: getters.authHeader,
    //           })
    //             .then(res => {
    //               let mileage = res.data.mileage
    //               mileage += 1000
    //               res.data.mileage = mileage
    //               console.log(res)
    //               commit('SET_PROFILE', res.data)
    //               dispatch('updateProfile', res)
    //               // dispatch('fetchCurrentUser')
    //               }
    //               )
    //               .catch(err => {
    //                 if (err.response.status === 401) {
    //                   dispatch('removeToken')
    //                   router.push({ name: 'login' })
    //                 }
    //               })

                // .axios({
                //   url: drf.accounts.profile(editUser),
                //   method: 'post',
                //   headers: getters.authHeader,
                // })
                // .then(res=>{
                //   console.log(res)
                //  })
                // .catch(err => {
                //   if (err.response.status === 401) {
                //     dispatch('removeToken')
                //     router.push({ name: 'login' })
                //   }
                // })
          //   }
          // },

  },
}
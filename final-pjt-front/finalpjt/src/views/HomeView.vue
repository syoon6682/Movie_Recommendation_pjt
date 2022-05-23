<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import movies from '@/api/drf.js'
import accounts from '@/store/modules/accounts.js'

export default {
  name: 'HomeView',
  components: {
  },
  created() {
    this.popularMovies()
  },
  methods: {
    popularMovies () {
      axios.get(movies.movies.movieList(), {
        headers: {
          Authorization: 'Token ' + accounts.state.token
        }
      })
      .then ( res => {
        console.log(res)
      })
      .catch ( err => {
        console.log(err)
        console.log(accounts.state.token)
      })
      
    }
  }
  
}
</script>
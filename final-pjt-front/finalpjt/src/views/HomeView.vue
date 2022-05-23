<template>
  <div class="home">
    <div class="row row-cols-3 row-cols-md-5 g-4">
    <movie-card v-for="movie in movies.movies" :key="movie.id" :movie="movie"></movie-card>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import movies from '@/api/drf.js'
import accounts from '@/store/modules/accounts.js'
import { mapGetters, mapActions } from 'vuex'
import MovieCard from '../components/MovieCard.vue'


export default {
  name: 'HomeView',
  components: {
    MovieCard,
  },
  created() {
    this.getMovie();
  },
  computed: {
    ...mapGetters(['getMovies']),
    movies(){
      return this.$store.state.movies
    }
  },
  methods: {
    ...mapActions(['getMovie']),
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
  },

  
}
</script>
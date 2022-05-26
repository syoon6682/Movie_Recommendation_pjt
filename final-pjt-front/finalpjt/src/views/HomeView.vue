<template>
  <div class="home">
    <div class="menucontainer">
       <br>
      <span data-content="caption" class="popcornevent">
        <router-link :to="{ name: 'popcorn' }" append><img class="popcornimage" src="@/assets/events/homepopcorn.jpg"/></router-link>
        <!-- <div class="centered">공짜 팝콘에 도전하세요!</div> -->
      </span>
      <br>
      <span class="reviewevent">
        <router-link :to=" { name: 'reviewevent' }" append><img class="revieweventimage" src="@/assets/events/homereviewevent.jpg"/></router-link>
        <!-- <div class="centered">리뷰왕을 찾아라</div> -->
      </span>
      <br>
      <span class="reviewevent">
        <router-link :to=" { name: 'question1' }" append><img class="revieweventimage" src="@/assets/events/homemovierecomm.jpg"/></router-link>
        <!-- <div class="centered">리뷰왕을 찾아라</div> -->
      </span>
    </div>

    <hr>

    <br>
    <br>

    
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
  data() {
  return {
    slide: 0,
    sliding: null
  }
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
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }, 
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

<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 50px;
    font-weight: 900;

  }

   .menucontainer {
    display: flex;
    justify-content: center;
    padding: 40px;
  }



  img {
    width: 500px;
    height: 370px;
    margin-top: 40px;
    margin: 10px;
  }

  img:hover {
    transform: scale(1.05); 
  }
</style>
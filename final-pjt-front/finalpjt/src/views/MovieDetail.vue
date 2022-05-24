<template>
  <div>
    <div :style="{ backgroundImage: url('https://image.tmdb.org/t/p/w500' + '${recommMovie.poster_path}')}">
    </div>
    <h1>MOVIE DETAIL</h1>
    <br>
    <div class="container" style="width: 800px;">
      <img :src="'https://image.tmdb.org/t/p/w500' + recommMovie.poster_path" alt="poster" class="poster">
      <br>
      <br>
      <h3>{{ recommMovie.title }}</h3>
      <br>
      {{ recommMovie.release_date }}
      <br>
      <!-- {{ recommMovie.genre_ids }} -->
      {{ recommMovie.overview }}
    </div>
    <br>
    <hr>
    <h4 class="moviereview">{{ recommMovie.title }}, 재밌게 보셨다면 리뷰를 남겨주세요</h4>
    <movie-review class="moviereview"></movie-review>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MovieReview from '@/components/MovieReview.vue'

export default {
  name: 'MovieDetail',
  components: {
    MovieReview,
  },
  data() {
    return {
      movieId: this.$route.params.movieId,
    }
  },
  computed: {
    ...mapGetters(['recommMovie'])
  },
  methods: {
    ...mapActions(['fetchMovie']),
  },
  created() {
    // console.log(this.$route.params.movieId)
    this.fetchMovie(this.movieId)
  }
}
</script>

<style scoped>

  * {
    background-color: none;
  }

  .poster {
    display: flex;
    justify-content: center;
    width: 500px;
  }

  .moviereview {
    display: flex;
    margin-left: 30px;
    padding: 10px;
  }
</style>
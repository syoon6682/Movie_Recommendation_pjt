<template>
  <div>
    <div
      class="movie-detail-image"
      :style="{ backgroundImage: `url(${image(recommMovie.poster_path)})` }"
    ></div>
    <h1>MOVIE DETAIL</h1>
    <br>
    <div class="container" style="width: 800px;">
      <img :src="'https://image.tmdb.org/t/p/w500' + recommMovie.poster_path" alt="poster" class="poster">
      <br>
      <br>
      <div class="text">
        <h3>{{ recommMovie.title }}</h3>
        <br>
        {{ recommMovie.release_date }}
        <br>
        <!-- {{ recommMovie.genre_ids }} -->
        {{ recommMovie.overview }}
      </div>
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
    image(img) {
      return `https://image.tmdb.org/t/p/w500${img}`
    },
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

  .movie-detail-image::after {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  background-color: rgb(40, 40, 40);
  opacity: 0.8;
  content: "";
  display: block;
  }
  .movie-detail-image {
    background-size: cover;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    /* filter: grayscale(px); */
  }

  .text {
    color: white;
  }
</style>
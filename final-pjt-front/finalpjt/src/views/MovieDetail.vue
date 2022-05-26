<template>
  <div>
    <div
      class="movie-detail-image"
      :style="{ backgroundImage: `url(${image(recommMovie.poster_path)})` }"
    ></div>
    
    <br>
    <div class="container">
      <img :src="'https://image.tmdb.org/t/p/w500' + recommMovie.poster_path" alt="poster" class="poster">
      <br>
      <br>
      <div class="textbox">
        <h3 class="movietitle">{{ recommMovie.title }}</h3>
        <span class="movieinfo">
          {{ recommMovie.release_date }}
        </span>
        <br>
        <br>
        <!-- {{ recommMovie.genre_ids }} -->
        <span class="movieoverview">
          {{ recommMovie.overview }}
        </span>
      </div>
    </div>
    <br>
    <!-- <hr style="color:white;height:2px"> -->

    <div class=reviewcontainer> 
        <h2>{{ recommMovie.title }}, </h2>
        <p style="font-size: 23px">재밌게 보셨다면 지금 바로 리뷰를 남겨주세요 </p>
        <p style="font-size: 18px">리뷰를 남길시 마일리지 1000포인트를 드립니다 </p>
      <br>
    </div>
    <div class="reviewlist">
      <movie-review></movie-review>
    </div>
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
    font-family: 'IBM Plex Sans KR', sans-serif;
    background-color: none;
  }

  .container {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    width: 1100px;

  }

  .textbox {
    color: white;
    margin-left: 50px;
  }

  .poster {
    display: flex;
    justify-content: center;
    width: 500px;
  }

  .moviereviewtitle {
    font-size: 40px;
    text-align: ;
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

  .movietitle {
    font-size: 65px;
    font-style: bold;
  }

  .movieinfo {
    font-size: 20px;
    
  }

  .movieoverview {
    font-size: 25px;
    font-weight: 200;
  }


  .reviewcontainer {
    color: white;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-top: 60px;
    width: 1100px;

}

.reviewlist {
  display: flex;
  align-items: left;
}

</style>
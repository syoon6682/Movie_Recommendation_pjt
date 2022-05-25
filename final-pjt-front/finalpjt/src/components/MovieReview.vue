<template>
  <div class="container">
    <h1 class="title">Review</h1>
      <router-link 
        :to="{ name: 'newreview', }">
        create
      </router-link>
      <ul>
        <li v-for="review in reviews" :key="review.id">
        <!-- <router-link 
        :to="{ name: 'reviewdetail', params: {movieId: movie.id, reviewId: review.id} }">

        </router-link> -->
        {{ review.title }}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MovieReview',
  data () {
    return {
      movieId: this.$route.params.movieId,
      reviewId: this.$route.params.reviewId,
    }
  },
  computed: {
    ...mapGetters(['reviews'])
  },
  methods: {
    ...mapActions(['fetchReviews'])
  },
  created() { 
    this.fetchReviews(this.movieId)
  },

}
</script>

<style>
  .container{
    color: white;
  }
</style>
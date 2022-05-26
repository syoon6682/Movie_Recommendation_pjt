<template>
  <div class="container">
    <h1 class="title">Review</h1>
      <router-link 
        :to="{ name: 'newreview', }">
        create
      </router-link>
      <ul>
        <li v-for="review in reviews" :key="review.pk">
          <router-link :to="{ name: 'reviewdetail', params: {movieId: recommMovie.id, reviewId: review.pk} }">
          {{ review.title }}
          </router-link>
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
    ...mapGetters(['reviews', 'recommMovie'])
  },
  methods: {
    ...mapActions(['fetchReviews'])
  },
  created() { 
    this.fetchReviews(this.movieId)
  },

}
</script>

<style scoped>
  .container{
    color: white;
  }
</style>
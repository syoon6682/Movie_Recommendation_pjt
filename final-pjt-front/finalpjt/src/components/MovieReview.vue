<template>
  <b-container fluid>
    <h2 class="title">Review 목록</h2>
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
  </b-container>
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
    display: flex;
    flex-direction: column;
    color: white;
    
  }

  button {
    width: 100px;
    border-radius: 20px;
  }
</style>
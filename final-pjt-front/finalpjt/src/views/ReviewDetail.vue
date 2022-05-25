<template>
  <div>
    <h1>REVIEW DETAIL</h1>
    <h3>{{ review.title }}</h3>
    <p>{{ review.content }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ReviewDetail',
  data () {
    return {
      movieId: this.$route.params.movieId,
      reviewId: this.$route.params.reviewId,
    }
  },
  computed: {
    ...mapGetters(['review', 'recommMovie'])
  },
  methods: {
    ...mapActions(['fetchReview'])
  },
  created() { 
    this.fetchReview({movieId: this.movieId, reviewId: this.reviewId})
  },

}
</script>

<style>

</style>
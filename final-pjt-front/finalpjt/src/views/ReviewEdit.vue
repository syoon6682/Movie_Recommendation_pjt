<template>
  <div>
    <h1>Edit review</h1>
    <review-form v-if="isReview" :review="review" action="update">

    </review-form>
  </div>

</template>

<script>
import ReviewForm from '@/components/ReviewForm.vue'

import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'ReviewEdit',
    components: { ReviewForm },
    computed: {
      ...mapGetters(['review', 'isReview',])
    },
    methods: {
      ...mapActions(['fetchReview'])
    },
    created() {
      this.fetchReview({movieId: this.$route.params.movieId, reviewId: this.$route.params.reviewId})
    },
  }
</script>

<style></style>

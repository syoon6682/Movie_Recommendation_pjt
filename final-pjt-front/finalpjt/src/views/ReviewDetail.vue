<template>
  <div>
    <h1>REVIEW DETAIL</h1>
    <h3>{{ review.title }}</h3>
    <p>{{ review.content }}</p>
    <hr>
    <h2>COMMENTS</h2>
    <comment-list></comment-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CommentList from '@/components/CommentList'

export default {
  name: 'ReviewDetail',
  components: {
    CommentList,
  },
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
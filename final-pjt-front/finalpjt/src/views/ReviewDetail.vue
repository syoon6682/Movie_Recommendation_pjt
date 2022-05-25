<template>
  <div>
    <h1>REVIEW DETAIL</h1>
    <h3>{{ review.title }}</h3>
    <p>{{ review.content }}</p>
    <hr>

    <div>
      {{ likeCount }} 명이 이 리뷰를 좋아합니다
      <button
        @click="likeReview(this.reviewId)"
      >LIKE</button>
    </div>
    

    <h2>COMMENTS</h2>
    <comment-list :comments="comments"></comment-list>
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
    ...mapGetters(['review', 'recommMovie', 'comments']),
    likeCount() {
      return this.review.like_users?.length
    }
  },
  methods: {
    ...mapActions([
      'fetchReview', 
      'fetchComments',
      'likeReview',
      'deleteReview'])
  },
  created() { 
    this.fetchReview({movieId: this.movieId, reviewId: this.reviewId})
    this.fetchComments({movieId: this.movieId, reviewId: this.reviewId})
  },
}
</script>

<style>

</style>
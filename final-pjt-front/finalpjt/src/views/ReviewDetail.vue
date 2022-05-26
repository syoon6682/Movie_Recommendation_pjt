<template>
  <div class="container">
    <div class="textbox">
      <h1>{{ review.title }}</h1>
      <p class="userinfo">{{ review.user.username }} | {{ review.created_at }} 작성</p>
        <div v-if="isAuthor">
          <router-link :to="{ name: 'reviewedit', params: { reviewId } }">
            <button class="btn btn-dark">Edit</button>
          </router-link>
          <button class="btn btn-dark" @click="deleteReview({ movieId, reviewId })">Delete</button>
        </div>
      <hr>
      <p>{{ review.content }}</p>
    

      <div>
        {{ likeCount }} 명이 이 리뷰를 좋아합니다
        
        <button class="btn likeBtn" style="font-family: sans-serif"
            @click="likeReview(this.reviewId)">❤</button>
          <!-- <button  v-if="likeCount===0" class="btn btn-light"
            @click="likeReview(this.reviewId)"
          >♡</button>
          <button v-else-if="likeCount>0" class="btn btn-light"
            @click="likeReview(this.reviewId)"
          >❤</button> -->
      <hr>
      <h5>COMMENTS</h5>
      <comment-list :comments="comments"></comment-list>
      </div>
    </div>

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
    ...mapGetters(['review', 'recommMovie', 'comments', 'isAuthor']),
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Poppins&family=IBM+Plex+Sans+KR:wght@300;500&display=swap');

  /* * { */
    /* font-family: 'IBM Plex Sans KR', sans-serif; */

  /* } */

  .container{
    display: flex;
    justify-content: center;
    
    flex-direction: column;
    color: black;

    margin-top: 100px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    padding: 50px;
    
  }

  .likeBtn {
    border-radius: 100px;
    border: none;
    background-color: none;
  }

  .textbox {
    border: 0.5px solid;
    border-color: rgb(165, 165, 165);
    border-radius: 10px;
    padding: 30px;

  }

  .userinfo {
    font-size: 15px;
  }



</style>
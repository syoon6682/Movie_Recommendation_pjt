<template>
  <div>
    <!-- <div>{{ reviewId }}</div> -->
  <div class="container">
    
    <button class="btn btn-dark backbutton">
      <router-link :to="{ name: 'moviedetail', params: { movieId } }">
        <a class="back">Back</a>
      </router-link>
    </button>

    <div class="textbox">
      <h1>{{ review.title }}</h1>
      <div class=authorinfo>
        <p class="userinfo">{{ review.user.username }} | {{ review.created_at }} 작성</p>
        <div v-if="isAuthor">
          <router-link :to="{ name: 'reviewedit', params: { reviewId } }">
            <a class="edit">edit<i class="fa-solid fa-pen-to-square"></i></a>
          </router-link>
          <a class="delete" @click="deleteReview({ movieId, reviewId })">delete<i class="fa-solid fa-trash-can"></i></a>
        </div>
      </div>
      <hr>
      <p>{{ review.content }}</p>
    

      <div>
        <i class="fa-regular fa-message"></i>
        {{ commentCount }}
        <button class="btn likeBtn" style="font-family: sans-serif"
            @click="likeReview({reviewPk: reviewId, moviePk: movieId})">❤</button>
          <!-- <button  v-if="likeCount===0" class="btn btn-light"
            @click="likeReview(this.reviewId)"
          >♡</button>
          <button v-else-if="likeCount>0" class="btn btn-light"
            @click="likeReview(this.reviewId)"
          >❤</button> -->
        {{ likeCount }}   


      <hr>
      <h5>COMMENTS</h5>
      <comment-list :comments="comments"></comment-list>
      </div>
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
    },
    commentCount() {
      return this.review.comments?.length
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
    box-shadow: 2px 0 9px rgba(0.1, 0, 0.2, 0.5);
    border-radius: 10px;
    padding: 50px;
    
  }

  .likeBtn {
    border-radius: 100px;
    border: none;
    background-color: none;
    color: red;
  }

  .textbox {
    /* border: 0.5px solid; */
    /* border-color: rgb(165, 165, 165); */
    /* border-radius: 10px; */
    padding: 20px;

  }

  .userinfo {
    font-size: 15px;
  }

  .edit {
    text-decoration: none;
    margin-left: 10px;
  }

  .delete {
    margin-left: 4px;
    cursor: pointer;
  }

  .authorinfo {
    display: flex;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }

  .backbutton {
    width: 60px;
    height: 35px;
    /* border: solid 0.2px; */
    /* box-shadow: 2px 0 9px rgba(0.1, 0, 0.2, 0.4); */
    border-radius: 10px;
  }

  .backbutton:hover {
    background-color: rgb(255, 129, 129);
  }
</style>
<template>
  <div>
    <form @submit.prevent="onSubmit" class="comment-list-form">
      <b-container>
        <b-row class="my-1">
          <b-col sm="2">
            <label for="comment" class="userinfo">{{ review.user.username }}: </label>
          </b-col>
          <b-col class="commentbox" sm="10">
            <b-form-input type="text" id="comment" v-model="content" required></b-form-input>
            <button class="btn btn-dark">comment</button>
          </b-col>
        </b-row>
      </b-container>
    </form>
    
   
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentForm',
  data() {
    return {
      content: ''
    }
  },
  props: {
    moviePk: Number,
  },
  computed: {
    ...mapGetters(['review', 'recommMovie']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ reviewPk: this.review.pk, moviePk: this.moviePk, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Poppins&family=IBM+Plex+Sans+KR:wght@300;500&display=swap');

  * { 
      font-family: 'IBM Plex Sans KR', sans-serif;
    } 

.comment-list-form {
  display: flex;
}

.container {
  display: flex;
  padding: 0;
}
.commentbox {
  display: flex;
  width: 500px;
  margin-left: 3px;
}

button {
  border-radius: 20px;
  margin-left: 12px;
}

button:hover {
  background-color: rgb(255, 129, 129)
}

.userinfo {
  font-style: bold;
  margin-left: 3px;
  margin-bottom: 8px;
  font-size: 18px;

}
</style>
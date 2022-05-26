<template>
  <form @submit.prevent="onSubmit">
    <p>{{ review.moviePk }}</p>
    <br>
    <div class="container">
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-large">title: </label>
        </b-col>
        <b-col sm="10">
          <b-form-input v-model="newReview.title" type="text" id="title" size="lg" placeholder="제목을 입력하세요"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-2">
        <b-col sm="2">
          <label for="input-large">content: </label>
        </b-col>
        <b-col sm="10">
          <textarea class="form-control" v-model="newReview.content"></textarea> 
        </b-col>
      </b-row>
      <br>
      <button class="btn btn-dark">{{ action }}</button>
      <!-- <button href="12"class="btn btn-dark">back to list</button> -->
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ReviewForm',
    props: {
      review: Object,
      action: String,
    },
    data() {
      return {
        reviewId: this.review.pk, 
        newReview: {
          reviewPk: this.review.pk,
          title: this.review.title,
          content: this.review.content,
        }
      }
    },

    methods: {
      ...mapActions(['createReview', 'updateReview']),
      onSubmit() {
        if (this.action === 'create') {
          const payload = {newReview: this.newReview, moviePk: this.$store.getters.recommMovie.id, }
          this.createReview(payload)
        } else if (this.action === 'update') {
          const payload = {
            moviePk: this.$store.getters.recommMovie.id,
            ...this.newReview,
          }
          this.updateReview(payload)
        }
      },
    },
  }
</script>

<style scoped>

::placeholder {

  font-family: 'Poppins', 'IBM Plex Sans KR', sans-serif;
  font-size: 15px;
  font-style: italic;
  
}
textarea{
  padding: 10px;
}




</style>

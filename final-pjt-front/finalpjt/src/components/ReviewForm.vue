<template>
  <form @submit.prevent="onSubmit">
    <p>{{ review.moviePk }}</p>
    <div>
      <label for="title">title: </label>
      <input v-model="newReview.title" type="text" id="title" />
    </div>
    <div>
      <label for="content">content: </label>
      <textarea v-model="newReview.content" type="text" id="content"></textarea>
    </div>
    <div>
      <button @click="onSubmit">{{ action }}</button>
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
        newReview: {
          title: this.review.title,
          content: this.review.content,
        }
      }
    },

    methods: {
      ...mapActions(['createReview', 'updateReview']),
      onSubmit() {
        // if (this.action === 'create') {
          console.log(this.newReview)
          const payload = {newReview: this.newReview, moviePk: this.$store.getters.recommMovie.id,}
          this.createReview(payload)
        // } else if (this.action === 'update') {
        //   const payload = {
        //     pk: this.review.pk,
        //     ...this.newReview,
        //   }
          // this.updateReview(payload)
        // }
      },
    },
  }
</script>

<style></style>

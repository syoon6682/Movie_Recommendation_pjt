<template>
  <div>
    <form @submit.prevent="onSubmit" class="comment-list-form">
      <label for="comment">comment:  </label>
      <input type="text" id="comment" v-model="content" required>
      <button>Comment</button>
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
      console.log(this)
      this.createComment({ reviewPk: this.review.pk, moviePk: this.moviePk, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style>

</style>
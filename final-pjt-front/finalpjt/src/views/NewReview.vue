<template>
  <div class="container">
    <h1>New Review</h1>
    <review-form :review="review" action="create"></review-form>
  </div>
</template>

<script>
  import ReviewForm from '@/components/ReviewForm.vue'
  export default {
    name: 'NewReview',
    components: { 
      ReviewForm 
      },
    data() {
      return {
        review: {
          pk: null,
          movie: { pk: this.$store.getters.recommMovie.id },
          title: '',
          content: '',
          rank: 1,
        }
      }
    },
  }
</script>

<style scoped>
  * {
    font-family: 'Poppins';
  }

  .container {
    margin-top: 100px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    padding: 50px;
  }

</style>

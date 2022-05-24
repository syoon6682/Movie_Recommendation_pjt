<template>
  <div>
    <h1>Detail page</h1>
    <p>{{recommMovie.id}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MovieDetail',
  data() {
  return {
      movieId: this.$route.params.movieId,
    }
  },
  computed: {
    ...mapGetters(['recommMovie'])
  },
  methods: {
    ...mapActions(['fetchMovie']),
  },
  created() {
    this.fetchMovie(this.movieId)
  }
}
</script>

<style>

</style>
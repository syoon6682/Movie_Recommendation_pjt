<template>
  <div>
    <h1></h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MovieDetail',
  methods: {
    ...mapActions(['fetchMovie']),
  },
  created() {
    let payload = { moviePk: 335787 }
    this.fetchMovie(payload)
  }
}
</script>

<style>

</style>
<template>
  <div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import axios from 'axios'
// import drf from '@/api/drf'

export default {
  name: 'ResultList',
  data() {
    return {
      needs: {'answer1': 1, 'answer2': 2, 'answer3': 3, 'answer4': 4,}
    }
  },

  methods: {
    ...mapActions(['getResults']),
  },
  created() {
    // const needs = {'answer1': 1, 'answer2': 2, 'answer3': 3, 'answer4': 4,}
    this.getResults(this.needs)
    console.log('test')
  },
  }

</script>

<style>

</style>
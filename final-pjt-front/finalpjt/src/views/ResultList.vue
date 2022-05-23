<template>
  <div>
    {{ recommMovie }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

// import axios from 'axios'
// import drf from '@/api/drf'

export default {
  name: 'ResultList',
  data() {
    return {
      needs: {'answer1': 1, 'answer2': 2, 'answer3': 3, 'answer4': 4,}
    }
  },
  computed: {
    ...mapGetters(['recommMovie'])
  },
  methods: {
    ...mapActions(['getResults']),
  },
  created() {
    // const needs = {'answer1': 1, 'answer2': 2, 'answer3': 3, 'answer4': 4,}
    this.getResults(this.needs)
  },
  }

</script>

<style>

</style>

<template>

<!-- <ul>
      <li v-for="article in articles" :key="article.pk">

        {{ article.user.username }} : 


        <router-link 
          :to="{ name: 'article', params: {articlePk: article.pk} }">
          {{ article.title }}
        </router-link>
        ({{ article.comment_count }}) | +{{ article.like_count }}

      </li>
    </ul> -->


  <div>
    <div class="home">
    <div class="row row-cols-3 row-cols-md-5 g-4">
 <div class="row row-cols-3 row-cols-md-5 g-4">
    <movie-card v-for="movie in recommMovie" :key="movie.id" :movie="movie"></movie-card>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'

// import axios from 'axios'
// import drf from '@/api/drf'

export default {
  name: 'ResultList',
  components : {
    MovieCard,
  },
  data() {
    return {
      needs: {'answer1': 1, 'answer2': 2, 'answer3': 3, 'answer4': 4,}
    }
  },
  computed: {
    ...mapGetters(['recommMovie']),
  },
  methods: {
    ...mapActions(['getResults']),
    moveToDetail() {
    },
  },
  created() {
    // const needs = {'answer1': 1, 'answer2': 2, 'answer3': 3, 'answer4': 4,}
    this.getResults(this.needs)
  },
  }

</script>

<style>

</style>
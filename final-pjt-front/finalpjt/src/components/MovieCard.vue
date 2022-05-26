<template>
<div class="col mb-4">
  <div class="card" style="width: 18rem;" props="movie">
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="poster" class="card-img-top">
    <div class="card-body">
      <!-- <h3> {{movie.title}}</h3> -->
      <router-link  :to="{ name: 'moviedetail', params: { movieId: movie.id }}">MOVIE DETAIL</router-link>
    </div>
  </div>
</div>
    
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  methods: {
    
  }
}
</script>

<style scoped>
  img:hover {
    transform: scale(1.05); 
  }

  a {
    /* text-decoration: none; */
    font-size: 20px;
    color: rgb(255, 66, 66);
  }


</style>
<template>
<div class="col mb-4">
  <div class="card" style="width: 18rem;" props="movie">
    <div class="card-body">
      <!-- <h3> {{movie.title}}</h3> -->
      <router-link  :to="{ name: 'moviedetail', params: { movieId: movie.id }}"> <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="poster" class="card-img-top"></router-link>
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
  * {
    background-color: black;
    border: none;
    padding: 0px;
  }

  img:hover {
    transform: scale(1.05);
    border: black; 
  }

  a {
    /* text-decoration: none; */
    font-size: 20px;
    color: rgb(255, 66, 66);
  }

  .card {
    border: none;
  }

  .card-body {
    border: black;
    padding: 0px;
  }


</style>
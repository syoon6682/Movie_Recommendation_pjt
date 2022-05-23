<template>
<div class="col mb-4">
  <div class="card" style="width: 18rem;" props="movie">
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="poster" class="card-img-top">
    <div class="card-body">
      <h3> {{movie.title}}</h3>
      <p class="card-text">{{movie.overview}}</p>
      <router-link :to="{ name: 'moviedetail', params: {moviePk: movie.id}}">자세히 보기</router-link>
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
  datas: {

  }, 
}
</script>

<style>

</style>
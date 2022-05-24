<template>
  <div>
    <div class="container">
      <span data-content="caption" class="popcornevent">
        <router-link :to="{name: 'popcorn' }" append><img src="@/assets/popcorn.jpg"/></router-link>
      </span>
      <br>
      <span class="reviewevent">
        <router-link :to="{name: 'reviewevent' }" append><img src="@/assets/reviewevent.jpg"/></router-link>
      </span>
      <br>
      <span class="moviemakingevent">
        <router-link  :to="{name: 'moviemaking' }" append><img src="@/assets/moviemaking.jpg"/></router-link>
      </span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'EventList',
  components: {

  }
}
</script>

<style>

</style>
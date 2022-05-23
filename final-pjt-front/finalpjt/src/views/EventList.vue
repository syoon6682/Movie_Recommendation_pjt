<template>
  <div>
    <router-link :to="{name: 'popcorn' }" append> POPCORN</router-link>
    <br>
    <router-link :to="{name: 'reviewevent' }" append> REVIEWEVENT</router-link>
    <br>
    <router-link :to="{name: 'moviemaking' }" append> MOVIEMAKING</router-link>
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
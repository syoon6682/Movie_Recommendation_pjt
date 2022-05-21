<template>
<div>
  <h1>{{profile.username}}</h1>
  
  <div>
    <p>{{profile.mileage}}</p>
    <button @click="addMileage">Charge</button>
  </div>
  
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile', 'addMileage']),
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style>

</style>
<template>
<div>
  <h1>{{profile.username}}님 안녕하세요!</h1>
  <div>
    <p>내 마일리지: {{ profile.mileage }}</p>
    <button @click="addMileage(profile)" class="btn btn-danger">Charge</button>
    
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
    ...mapActions(['fetchProfile', 'addMileage', 'updateProfile']),
  },
  
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style>

</style>
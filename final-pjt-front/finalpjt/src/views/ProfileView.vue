<template>
<div>
  <h1>{{profile.username}}님 안녕하세요!</h1>
  <div>
    <p>내 마일리지: {{ mileage }}</p>
    <button @click="addMileage(profile)" class="btn btn-danger">Charge</button>

    <div>
      <h2>Event1: Popcorn</h2>
      <p>이벤트 참여 여부: {{eventPart}}</p>
    </div>

    <div>
      <h2>Event2: Review</h2>
      <p>현재 포인트: {{current}}</p>
    </div>

    
  </div>
  
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import accounts from '@/store/modules/accounts'

export default {
  name: 'ProfileView',
  data (){
    return {
      current: JSON.parse(this.$store.getters.points)[this.$store.getters.currentUser.username]
    }
  },
  computed: {
    ...mapGetters(['profile', 'mileage',]),
    eventPart(){
      const username = accounts.state.currentUser.username    
      var list = JSON.parse(localStorage.getItem('popcorn'))
      var part = false
      for(let key in list){
        if (list[key] === username) {
          part = true
        }
      }
      return part
  },
  },
  methods: {
    ...mapActions(['fetchProfile', 'addMileage', 'updateProfile',]),

  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
    this.fetchEventReview()
  },
}

</script>

<style>

</style>

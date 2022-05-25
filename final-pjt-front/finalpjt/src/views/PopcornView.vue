<template>
  <div>
    <h1>POPCORN</h1>
    <p> 이벤트 설명 </p>
    <br>
    <br>
    <a href="#">
      <img src="@/assets/gift.jpg" width="200">
    </a>
    <br>
    <button @click="savePopcorn">응모하기</button>
    <button @click="goToResult">당첨자 확인!</button>
    <br>
    <br>
    <p>현재 응모자 수: {{applicants}}</p>
    <p>{{currentUser.username}}의 현재 마일리지: {{ profile.mileage }}</p>

    <br><br><br>
    <h3>당첨을 축하드립니다</h3>
    <p>이번 당첨자:</p>

  </div>
</template>

<script>
import router from '@/router'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PopcornView',
  methods: {
    ...mapActions(['savePopcorn', 'resetList', 'displayPopcorn', 'fetchProfile']),
    goToResult(){
      router.push({
          name: 'popcornresult',
        })
    },
  },
  computed: {
    ...mapGetters(['popcorn', 'applicants', 'currentUser', 'profile',])
  },
  created() {
    const payload = { username: this.$store.getters.currentUser.username}
    this.displayPopcorn()
    this.fetchProfile(payload)
  },
}
</script>

<style>

</style>

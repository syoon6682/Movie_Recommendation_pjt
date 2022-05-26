<template>
  <div>
    <div class="container">
      <h1 class="title">POPCORN</h1>
      <div class="expbox">
        <h3> CINEPOP에서의 공짜 팝콘 이벤트! </h3>
        <p> 1. 게시물, 덧글, 좋아요 등을 통해 마일리지를 얻는다</p>
        <p> 2. 200 마일리지를 이용해서 럭키박스 개봉! </p>
      </div>
      <br>
      <br>
      <a href="#">
        <img src="@/assets/gift.jpg" width="200">
      </a>
      <br>
      <button class="btn btn-dark" @click="savePopcorn()">응모하기</button>
      <button class="btn btn-dark" @click="goToResult">당첨자 확인</button>
      <br>
      <br>
      <p style="font-size: 25px">현재 응모자 수: {{applicants}}</p>
      <p style="font-size: 25px">{{currentUser.username}}의 현재 마일리지: {{ profile.mileage }}</p>

      <br><br><br>
      <h2>당첨을 축하드립니다</h2>
      <h5>이번 당첨자:</h5>
      <p>{{winner}}</p>
    </div>
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
    ...mapGetters(['popcorn', 'applicants', 'currentUser', 'profile', 'winner'])
  },
  created() {
    const payload = { username: this.$store.getters.currentUser.username}
    this.displayPopcorn()
    this.fetchProfile(payload)
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Poppins&family=IBM+Plex+Sans+KR:wght@300;500&display=swap');

  * { 
      font-family: 'IBM Plex Sans KR', sans-serif;
      /* font-size: 25px; */
    } 

  .title {
    font-size: 50px;
    font-weight: 800;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    margin-top: 100px;
    box-shadow: 2px 0 9px rgba(0.1, 0, 0.2, 0.5);
    border-radius: 10px;
    padding: 50px;
    
  }

  .expbox{
    display: relative;
    font-size: 18px;
    background-color: rgb(255, 211, 211);
    padding: 30px;
    width: 90%;
    border-radius: 20px;
    margin-top: 20px;
    line-height: 10px;
    
  }

  .btn {
    font-size: 25px;
    width: 500px;
    margin: 5px;
    border-radius: 40px;
    border: none;
  }
  
  .btn:hover {
    background-color: rgb(255, 63, 63);
  }
</style>

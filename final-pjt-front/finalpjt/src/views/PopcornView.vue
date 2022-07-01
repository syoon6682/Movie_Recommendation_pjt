<template>
  <div>
    <div class="container">
      <h1 class="title">POPCORN</h1>
      <div class="expbox">
        <h3> CINEPOP에서의 팝콘 이벤트! </h3>
        <p> 2000 마일리지로 10,000원 상당의 팝콘을 얻을 수 있는 기회! </p>
        <div class="explist">
          <div>
            <button class="method">응모방법</button><br><br><br><br><br>
            <button class="method">응모자수</button><br><br><br>
            <button class="method">마일리지</button><br>
          </div>
          <div>
            <p> 1. 프로필 페이지에서 마일리지를 충전한다 </p>
            <p> 2. 2000 마일리지를 이용해서 이벤트 응모 가능!</p>
            <p> 3. 이벤트 당첨되어 팝콘 받고 영화보자!</p><br>
            <p>{{applicants}}명</p><br><br><br>
            <p>{{ profile.mileage }}pts</p>
          </div>
        </div>

      </div>
      <div class="participation">
        <button class="btn btn-dark" @click="savePopcorn()">응모하기</button>
        <button class="btn btn-dark" @click="goToResult">당첨자 확인</button>
      </div>
        <br><br>
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
    ...mapGetters(['popcorn', 'applicants', 'currentUser', 'profile', 'winner', 'mileage'])
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
      color: white;
      background-color: rgb(200, 0, 0);
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
    padding: 50px;
    
  }

  .expbox{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    background-color: rgb(200, 0, 0);
    padding: 30px;
    width: 90%;
    border-radius: 20px;
    margin-top: 40px;
    line-height: 20px;
    border: solid white 3px;
  }

  .explist{
    display: flex;
    line-height: 15px;
    margin-top: 20px;
  }

  h3{
    margin-bottom: 15px;
  }

  .btn {
    font-size: 25px;
    width: 500px;
    margin: 5px;
    border-radius: 40px;
    border: none;
  }
  
  .btn:hover {
    background-color: rgb(0, 0, 0);
  }

  .participation{
    display: flex;
    margin-top: 30px;
  }

  .method {
    width: 80px;
    height: 40px;
    background-color: white;
    border: none;
    box-shadow: -3px -3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    color: rgb(200, 0, 0);
    line-height: -1000px;
  }

  .explist div {
    margin-right: 20px;
  }
</style>

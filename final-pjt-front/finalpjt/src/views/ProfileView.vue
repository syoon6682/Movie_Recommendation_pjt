<template>
<div class="container">
  <h1>{{profile.username}}님 안녕하세요!</h1>
  <div>
    <div class="mileage">
      <h3>내 마일리지 | {{ mileage }} 마일리지</h3>
      <br>
    </div>

    <span class="chargebutton">
      <button @click="addMileage(profile)" class="btn btn-danger"> 충전하기 </button>
    </span>

    <hr>
    <div class="events">
      
      <div class="popcorn">
        <!-- <p><i class="fa-solid fa-popcorn"></i></p> -->
        <h2>Event1: Popcorn</h2>
        <h5>이벤트 참여 여부: {{eventPart}}</h5>
      </div>

      <div class="reviewevent">
        <!-- <i class="fa-solid fa-coins"></i> -->
        <h2>Event2: Review</h2>
        <h5>현재 포인트: {{current}}</h5>
      </div>
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

  .mileage {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .btn {
    margin-top: 10px;
    width: 500px;
    height: 50px;
    border-radius: 30px;
  }
  
  .events {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  .popcorn {
    background-color: rgb(254, 210, 210);
    color: white;
    border-radius: 10px;
    margin: 10px;
    padding: 30px;
    font-size: 20px;
  }

  .reviewevent {
    background-color: rgb(254, 210, 210);
    color: white;
    border-radius: 10px;
    margin: 10px;
    padding: 30px;
    font-size: 20px;
  }

  .chargebutton {
    display: flex;
    justify-content: center;
  }

</style>

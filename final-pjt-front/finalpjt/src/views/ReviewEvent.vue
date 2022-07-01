<template>
<div>
  <div class="container">
    <h1 class="title"> 오늘의 리뷰왕 </h1>
    <h2>" {{ totalRank[1].name }} "</h2>
    <!-- <p v-for="content in totalRank" :key="content.rank">
      {{ content}}
    </p> -->
    <div class="bigbox">
      <div class="expbox">
        <h5>오늘의 리뷰왕은 다음과 같이 선출됩니다.</h5>
        <br>
        <p>Review 글 한 개당 1000 point</p>
        <p>해당 Review 글에 달린 comment 한 개당 500 pointt,</p>
        <p>해당 Review 글에 달린 Like 한 개당 200 point가 적립되며, </p>
        <p>가장 많은 포인트를 가진 회원이 오늘의 리뷰왕이 됩니다! </p>
        <br>
        <br>
        <h5>리뷰왕이 되신 분께는 현재 상영중인 영화 티켓 한 장을 상품으로 드립니다!</h5>
      </div>


      <hr>
      <br>
      <h2>{{profile.username}} 님의 개인 기록</h2>
      <br>
      <div class="box">
        <h4>총 {{reviewSum}} 개의 리뷰를 달았어요!</h4>
        <br>
        <p>내 review에 달린 전체 comment 수 : {{commentSum}}</p>
        <p>내 review에 달린 전체 좋아요 수 : {{likeSum}}</p>
      </div>
      
      <br>
      <br>
      <h2> RANKING </h2>
      <br>

      <div class="ranking">
        <div class="myrank">
          <h4>나의 순위</h4>
          <br>
          <p>현재 순위: {{rank}}</p>
          <p>현재 points: {{current}} pts</p>
        </div>

        <div class="totalrank">
          <h4>전체 순위</h4>
          <br>
          <ul>
            <li v-for="content in totalRank" :key="content.rank">
              <p>{{content.rank}}위: {{content.name}}, 포인트: {{content.point}} PT</p>
            </li>
          </ul>
        </div>
      </div>
    </div>  
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'ReviewEvent',
  data (){
    return {
      current: JSON.parse(this.$store.getters.points)[this.$store.getters.currentUser.username]
    }
  },
  created() {
    console.log(this)
    const payload = { username: this.$store.getters.currentUser.username }
    this.fetchProfile(payload)
    this.fetchEventReview()
    console.log('points log: ', JSON.parse(this.$store.getters.points)[this.$store.getters.currentUser.username])
    // const userPoints = JSON.parse(this.$store.getters.points)[this.$store.getters.currentUser.username]
  },
  computed: {
    ...mapGetters(['profile', 'reviewSum', 'commentSum', 'likeSum', 'points', 'rank', 'totalRank']),
  },
  methods: {
    ...mapActions(['fetchProfile', 'fetchEventReview', 'updateProfile']),
  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Poppins&family=IBM+Plex+Sans+KR:wght@300;500&display=swap');
  * { 
      font-family: 'IBM Plex Sans KR', sans-serif;
      background-color: rgb(200 0 0);
      /* font-size: 25px; */
      color: white;
    } 

  .title {
    font-size: 50px;
    font-weight: 800;
  }


  .container {
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

    .bigbox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px;
      width: 100%;
      border-radius: 20px;
      margin-top: 40px;
      line-height: 20px;
      border: solid white 3px;
    }

  .box {
    display: relative;
    width: 100%;
    border-radius: 15px;
    font-size: 20px;
    padding: 30px;
    margin-bottom: 10px;
  }

  .ranking {
    width: 100%;
    display: flex;
    justify-content: center;
    color: black;
  }

  .myrank {
    display: absolute;
    width: 500px;
    height: 400px;
    border-radius: 10px;
    padding: 30px;
    margin-right: 7px;
    border: dotted 2px white;
  }

  .totalrank {
    display: absolute;
    width: 500px;
    height: 400px;
    border-radius: 10px;
    padding: 30px;
    margin-left: 7px;
    border: dotted 2px white;
  }

  p {
    font-size: 20px;

  }


  .expbox {
    padding: 20px;
    display: relative;
    width: 100%;
    height: 205px;
    border-radius: 20px;
    line-height: 6px;
  }


</style>
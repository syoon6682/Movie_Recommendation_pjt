<template>
  <div>
    <h1>{{profile.username}} 님의 개인 기록</h1>
    <p>전체 review 수: {{reviewSum}}</p>
    <p>review에 달린 전체 comment 수 : {{commentSum}}</p>
    <p>review에 달린 전체 좋아요 수 : {{likeSum}}</p>
    <p>현재 순위: {{rank}}</p>
    <p>현재 points: {{current}} pts</p>
    <br><br>
    <h1>전체 순위</h1>
    <ul>
      <li v-for="content in totalRank" :key="content.rank">
        <p>순위: {{content.rank}}, 이름: {{content.name}}, 점수: {{content.point}}</p>
      </li>
    </ul>

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

<style>

</style>
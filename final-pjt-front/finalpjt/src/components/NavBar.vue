<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand class="homelogo" href="/">
      <!-- <em><i class="fa-solid fa-clapperboard-play"></i></em> -->
      <span class="homelogo">
       <i class='bx bxs-camera-movie'></i> CINE
       <!-- <i class="fa-regular fa-file-video"></i> CINE -->
      </span>
      <span class="p homelogo">POP</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="navitem" href="/event">이벤트</b-nav-item>
        <b-nav-item class="navitem" href="/recommendation/question1">영화추천</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav right class="userinfo ml-3">
        <b-nav-item v-if="!isLoggedIn" href="/login">Log In</b-nav-item>
        <b-nav-item v-if="!isLoggedIn" href="/signup">Sign Up</b-nav-item>
        <b-nav-item-dropdown right v-if="isLoggedIn">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em> 
              <i class="fa-solid fa-circle-user"></i>
              {{ currentUser.username }}
            </em>
          </template>
          <b-dropdown-item class="ml-3">
            <b-link class="blink" :to="{ name: 'profile', params: { username } }" append>
              {{ currentUser.username }}'s PAGE
            </b-link>            
          </b-dropdown-item>
          <b-dropdown-item>
            <b-link class="blink" @click.native="logout()" :to="{ name: 'home'}" append>
              Log Out
            </b-link> 
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  

  export default {
    name: 'NavBar',
    methods: {
      ...mapActions(['logout'])

    },
    computed: {
      ...mapGetters(['isLoggedIn', 'currentUser']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=IBM+Plex+Sans+KR:wght@300;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Poppins&family=IBM+Plex+Sans+KR:wght@300;500&display=swap');
  
  .navitem {
    font-family: 'IBM Plex Sans KR, sans-serif';
    font-weight: 300;
    font-size: 25px;
    margin-left: 15px;
  }

  .homelogo {
    font-family: 'Bangers', sans-serif;
    
    /* 자간 설정 -> 자간을 줄이면 덜 font스러워서 로고 느낌이 난다!*/
    letter-spacing: 1px;
    font-size: 50px;
    margin-left: 20px;
    /* padding: 0px; */

  }

  .userinfo {
    display: flex;
    margin-left: auto;
    margin-right: 40px;
    font-size: 25px;
  }

  .p {
    color: rgb(200, 0, 0);
    margin-left: -10px;
    
  }

  i {
    margin-left: 5px;
    margin-right: 0px;
  }

  em {
    font-size: 25px;
  }

  .blink{
    font-size: 15px;
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-weight: 300;
  }
  

</style>

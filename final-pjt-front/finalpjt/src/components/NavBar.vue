<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand class="homelogo p-3" style="font-size:65px" href="/">
      <!-- <em><i class="fa-solid fa-clapperboard-play"></i></em> -->
      <span class="homelogo">
        CINE
      </span>
      <span class="p homelogo">POP</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="navitem" href="/event" style="font-size:30px">이벤트</b-nav-item>
        <b-nav-item class="navitem" href="/recommendation/question1" style="font-size:30px">영화추천</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav right class="userinfo ml-3">
        <b-nav-item v-if="!isLoggedIn" href="/login" style="font-size:30px">Log In</b-nav-item>
        <b-nav-item v-if="!isLoggedIn" href="/signup" style="font-size:30px">Sign Up</b-nav-item>
        <b-nav-item-dropdown right v-if="isLoggedIn" style="font-size:30px">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em > 
              <i class="fa-solid fa-circle-user"></i>
              {{ currentUser.username }}
            </em>
          </template>
          <b-dropdown-item class=" ml-3">
            <b-link :to="{ name: 'profile', params: { username } }" append>
              {{ currentUser.username }}'s PAGE
            </b-link>            
          </b-dropdown-item>
          <b-dropdown-item>
            <span class="logout">
              <router-link @click.native="logout" :to="{ name: 'home' }">Log Out</router-link>
            </span>
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
  
  .navitem {
    font-family: 'IBM+Plex+Sans+KR';
  }

  .homelogo {
    font-family: 'Bangers', sans-serif;
    letter-spacing: 1px;

  }

  .userinfo {
    display: flex;
    margin-left: auto;
    margin-right: 20px;
  }

  .p {
    color: rgb(200, 0, 0);
    
  }
</style>

<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'question' }">추천영화</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'event' }">event</router-link>
      </li>


      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="!isLoggedIn">
        <router-link :to="{ name: 'signup' }">Signup</router-link>
      </li>
      <li v-if="isLoggedIn">
        <router-link :to="{ name: 'profile', params: { username } }">
          {{ currentUser.username }}'s page
        </router-link>
      </li>
      <li v-if="isLoggedIn">
        <router-link @click.native="logout" :to="{ name: 'home' }">Logout</router-link>
      </li>

    </ul>
  </nav>
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

<style></style>

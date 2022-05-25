<template>
  <div>
    <section>
      <div class="title">
        <h1 class="title">Login</h1>
      </div>
      <div>
        <account-error-list v-if="authError"></account-error-list>

        <form @submit.prevent="login(credentials)">
          <div>
            <label for="username">username: </label>
            <input v-model="credentials.username" type="text" id="username" required />
          </div>

          <div>
            <label for="password">password: </label>
            <input v-model="credentials.password" type="password" id="password" required />
          </div>

          <button>Login</button>
          <router-link :to="{ name: 'signup' }">Don`t have an account?</router-link>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'LoginView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password: '',
        }
      }
    },
  computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['login'])
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #154b6211;
    transition: 0.5s;
  }

  .title {
    margin-right: 8px;
  }

  /* form {
    
  } */

</style>

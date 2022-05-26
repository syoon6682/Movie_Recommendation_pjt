<template>
  <div>
    <section>
      <div class="title">
        <h1 class="title">Login</h1>
        
      </div>
      <div>
        <account-error-list v-if="authError"></account-error-list>

        <form class="LoginForm" @submit.prevent="login(credentials)">
          <div>
            <label for="username" placeholder="Username">username: </label>
            <input v-model="credentials.username" type="text" id="username" placeholder="아이디를 입력하세요" required />
          </div>

          <div>
            <label for="password" placeholder="Password">password: </label>
            <input v-model="credentials.password" type="password" id="password" placeholder="비밀번호를 입력하세요" required />
          </div>

          <button class="LoginBtn btn-dark">Login</button>
          <br>
          <span class="signuplink">
            <router-link :to="{ name: 'signup' }">Don't have an account?</router-link>
          </span>
          <!-- <div class="hide">CINEPOP 계정 만들기</div> -->
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

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 5px;
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


  #username {
    border-radius: 20px;
    width: 237px;
    border: none;
    padding-left: 15px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }

  #password {
    border-radius: 20px;
    width: 240px;
    border: none;
    padding-left: 15px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }

  ::placeholder {
    font-size: 12px;
    font-style: italic;
  }

  .LoginBtn {
    width: 338px;
    border-radius: 20px;
    margin-top: 5px;
    margin-bottom: 7px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }

  /* .hide {
    display: none;
  }

  .signuplink:hover + .hide {
    display: block;
    color: rgb(68, 138, 219);
    font-size: 12px;
  } */


</style>

<template>
  <div>
    <section>
      <div class="title">
        <h1 class="title">Signup</h1>
      </div>
      <div>
        <account-error-list v-if="authError"></account-error-list>

        <form @submit.prevent="signup(credentials)">
          <div>
            <label for="username" placeholder="Username">Username: </label>
            <input v-model="credentials.username" type="text" id="username" placeholder="아이디를 입력하세요" required />
          </div>

          <div>
            <label for="password1">Password: </label>
            <input v-model="credentials.password1" type="password" id="password1" placeholder="비밀번호를 입력하세요" required />
          </div>

          <div>
            <label for="password2">Confirmation:</label>
            <input v-model="credentials.password2" type="password" id="password2" placeholder="비밀번호를 확인해주세요" required />
          </div>

          <button class="SignupBtn btn-dark">Signup</button>
          <br>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['signup'])
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
    width: 239px;
    border: none;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    padding-left: 15px;
  }
  
  #password1 {
    border-radius: 20px;
    width: 246px;
    border: none;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    padding-left: 15px;
  }

  #password2 {
    border-radius: 20px;
    width: 216px;
    border: none;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    padding-left: 15px;
  }

  ::placeholder {
    font-size: 12px;
    font-style: italic;
    /* padding-left: 8px; */
  }

  .SignupBtn {
    width: 338px;
    border-radius: 20px;
    margin-top: 5px;
    margin-bottom: 7px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }

  </style>

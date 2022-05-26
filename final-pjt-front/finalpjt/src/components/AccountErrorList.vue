<template>
  <div>아이디 혹은 비밀번호가 옳지 않습니다. </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'AccountErrorList',
    computed: {
      ...mapGetters(['authError'])
    },
  }
</script>

<style scoped>
  div {
    color: red;
  }
</style>
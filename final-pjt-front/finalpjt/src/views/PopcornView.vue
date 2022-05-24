<template>
  <div>
    <h1>POPCORN</h1>
    <p> 이벤트 설명 </p>
    <br>
    <br>
    <a href="#">
      <img src="@/assets/gift.jpg" width="200">
    </a>
    <br>
    <button @click="savePopcorn">응모하기</button>
    <br>
    <br>
    <p>현재 응모자 수: </p>
    <br><br><br>
    <h3>당첨을 축하드립니다</h3>
    <p>당첨자:</p>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PopcornView',
  methods: {
    ...mapActions(['savePopcorn'])
  },
}
</script>

<style>

</style>
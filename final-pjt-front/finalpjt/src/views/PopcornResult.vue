<template>
 <div class="container">
   <h1>당첨을 축하합니다!</h1>
   <p>{{ winner }}</p>
   <button class="btn btn-dark" @click="resetList">BACK</button>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PopcornResult',
  computed: {
    ...mapGetters(['winner',])
  },
  methods: {
    ...mapActions(['fetchList','resetList', 'randomInRange']),
  },
  created() {
    console.log(this)
    this.fetchList()
    

    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    var confetti = null
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);


  },
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    margin-top: 100px;
    box-shadow: 2px 0 9px rgba(0.1, 0, 0.2, 0.5);
    border-radius: 10px;
    padding: 50px;
  }

</style>
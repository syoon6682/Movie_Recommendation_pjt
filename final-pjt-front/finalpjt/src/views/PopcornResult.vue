<template>
 <div class="container">
   <h1>당첨을 축하합니다!</h1>
   <p>{{winner}}</p>
   <button @click="resetList">BACK</button>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PopcornResult',
  data ()  {
    // return confetti
  },
  computed: {
    ...mapGetters(['winner',])
  },
  methods: {
    ...mapActions(['fetchList','resetList', ]),
  //   makeItRain() {
  //   setTimeout(function(){
  //     var end = Date.now() + (3 * 1000);
  //   var colors = ['#FF0000', '#ffffff'];
  //   (function frame() {
  //     confetti({
  //       particleCount: 2,
  //       angle: 60,
  //       spread: 55,
  //       origin: { x: 0 },
  //       colors: colors
  //     });
  //     confetti({
  //       particleCount: 2,
  //       angle: 120,
  //       spread: 55,
  //       origin: { x: 1 },
  //       colors: colors
  //     });

  //     if (Date.now() < end) {
  //       requestAnimationFrame(frame);
  //     }
  //   }());
  //   }, 3000)
  // }
  },
  created() {
    console.log(this)
    this.fetchList()
    // this.makeItRain()

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
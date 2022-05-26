<template>
 <div>
   <h1>당첨자</h1>
   <p>{{winner}}</p>
   <button @click="resetList">BACK</button>
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
    ...mapActions(['fetchList','resetList', ]),
  },
  created() {
    console.log(this)
    this.fetchList()
  },
}
</script>

<style>

</style>
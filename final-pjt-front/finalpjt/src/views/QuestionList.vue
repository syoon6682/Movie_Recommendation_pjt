<template>
  <div>
    <question1 v-if="answer === 0"></question1>
    <question2 v-if="answer === 1"></question2>
    <question3 v-if="answer === 2"></question3>
    <question4 v-if="answer === 3"></question4>
    <question5 v-if="answer === 4"></question5>
  </div>
</template>

<script>
import question1 from '@/components/questions/question1.vue'
import question2 from '@/components/questions/question2.vue'
import question3 from '@/components/questions/question3.vue'
import question4 from '@/components/questions/question4.vue'
import question5 from '@/components/questions/question5.vue'

// import { mapGetters } from 'vuex'

export default {
  name: 'QuestionList',
  components: {
    question1,
    question2,
    question3,
    question4,
    question5,
  },
  data() {
    return {
        answer: this.$store.getters.answer.length
    }
        
  },
  computed: {
    // ...mapGetters(['answer']),
    }
  }


</script>

<style scoped>
  h1 {
    padding: 40px;
  }

.surveyform {
    font-size: 30px;
  }

  .survey {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 10px;
  }

  .radiobutton {
    margin-right: 16px;
  }

  .savebutton {
    display: flex;
    justify-content: center;
    margin: 20px 20px;
    width: 200px
  }

  .btn {
    background-color: rgb(223, 93, 93);
    color: white;
  }

  .buttoncontainer {
    display:flex;
    justify-content: center;
  }

</style>
<template>
  <div>
    <div class="container">
      <div class="title">
        <h1 class="d-flex justify-content-center"> 기분이 어떤가요? </h1>
      </div>
      <div class="survey">
        <div class="surveyform">
          <input v-model="picked" class="radiobutton" type="radio" id="parents" value="행복" >
          <label for="happy">아주 행복</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="friends" value="화남" >
          <label for="mad">화남</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="lover" value="우울" >
          <label for="blue">우울</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="kids" value="심심">
          <label for="bored">심심</label>
          <br>
          <br>
          <span> {{ picked }} 할 때 보는 영화 </span>
          <br>
        </div>
      </div>
      <div class="buttoncontainer">
        <button class="savebutton btn" @click="saveAnswer4">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import router from '@/router'

export default {
  name: 'QuestionFour',
  data:() => {
    return {
      picked: ''
    }
    
  },
  methods: {
    saveAnswer4(){
      const pick = this.picked
      localStorage.setItem('answer4', pick)
      console.log(localStorage.getItem('answer4'))
      this.$store.getters.answer.push(pick)
      router.push({name: 'result'})
  } 
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
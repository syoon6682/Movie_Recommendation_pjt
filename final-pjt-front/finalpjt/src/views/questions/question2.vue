<template>
  <div>
    <div class="container">
      <div class="title">
        <h1 class="d-flex justify-content-center"> 어디서 영화를 보나요? </h1>
      </div>
      <div class="survey">
        <div class="surveyform">
          <input v-model="picked" class="radiobutton" type="radio" id="parents" value="집" >
          <label for="parents">집</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="friends" value="캠핑장" >
          <label for="friends">캠핑장</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="lover" value="영화관" >
          <label for="lover">영화관</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="hotel" value="호텔">
          <label for="hotel">호텔</label>
          <br>
          <br>
          <span> {{ picked }} 에서 보는 영화 </span>
          <br>
        </div>
      </div>
      <div class="buttoncontainer">
        <button class="savebutton btn" @click="saveAnswer2">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'QuestionTwo',
  data:() => {
    return {
      picked: ''
    }
    
  },
  methods: {
    saveAnswer2(){
      const pick = this.picked
      localStorage.setItem('answer2', pick)
      console.log(localStorage.getItem('answer2'))
      this.$store.getters.answer.push(pick)
      router.push({name: 'question3'})
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
    margin-top: 50px;
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

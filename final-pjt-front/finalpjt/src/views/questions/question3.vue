<template>
  <div>
    <div class="container">
      <div class="title">
        <h1 class="d-flex justify-content-center"> 몇 살인가요? </h1>
      </div>
      <div class="survey">
        <div class="surveyform">
          <input v-model="picked" class="radiobutton" type="radio" id="parents" value="10대 미만" >
          <label for="less10">10대 미만</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="friends" value="10대" >
          <label for="10">10대</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="lover" value="20대~40대" >
          <label for="2040">20대~40대</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="kids" value="50대~60대">
          <label for="5060">50대~60대</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="kids" value="70대 이상">
          <label for="over70">70대 이상</label>
          <br>
          <br>
          <span> {{ picked }} 과 함께 보는 영화 </span>
          <br>
        </div>
      </div>
      <div class="buttoncontainer">
        <button class="savebutton btn" @click="saveAnswer3">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import router from '@/router'

export default {
  name: 'QuestionThree',
  data:() => {
    return {
      picked: ''
    }
    
  },
  methods: {
    saveAnswer3(){
      const pick = this.picked
      localStorage.setItem('answer3', pick)
      console.log(localStorage.getItem('answer3'))
      this.$store.getters.answer.push(pick)
      router.push({name: 'question4'})
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
<template>
  <div>
    <div class="container">
      <div class="title">
        <h1 class="d-flex justify-content-center"> 누구와 영화를 보나요? </h1>
      </div>
      <div class="survey">
        <div class="surveyform">
          <input v-model="picked" class="radiobutton" type="radio" id="parents" value="집" >
          <label for="parents">부모님</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="friends" value="캠핑장" >
          <label for="friends">친구</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="lover" value="영화관" >
          <label for="lover">연인</label>
          <br>
          <input v-model="picked" class="radiobutton" type="radio" id="kids" value="바닷가">
          <label for="kids">아이들</label>
          <br>
          <br>
          <span> {{ picked }} 과 함께 보는 영화 </span>
          <br>
        </div>
      </div>
      <div class="buttoncontainer">
        <button class="savebutton btn">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionOne',
  data:() => {
    return {
      picked: ''
    }
    
  },
  methods: {

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
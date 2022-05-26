<template>
<div class="container">
  <br>
  <h1> 404 NOT FOUND </h1>
  <p> 정확한 url로 들어와주세요 </p>
  <img src="@/assets/404/gonegirl.jpg" alt="poster">
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

img {
  height: 1500px;
}

p {
  font-size: 20px;
  margin-left: 5px;
}

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
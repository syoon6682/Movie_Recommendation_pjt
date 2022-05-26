<template>
  <div>
    <div class="container">
      <br>
      <span data-content="caption" class="popcornevent">
        <router-link :to="{ name: 'popcorn' }" append><img class="popcornimage" src="@/assets/events/popcorn.jpg"/></router-link>
        <!-- <div class="centered">공짜 팝콘에 도전하세요!</div> -->
      </span>
      <br>
      
      <span class="reviewevent">
        <router-link :to=" { name: 'reviewevent' }" append><img class="revieweventimage" src="@/assets/events/reviewevent.jpg"/></router-link>
        <!-- <div class="centered">리뷰왕을 찾아라</div> -->
      </span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'EventList',
  components: {

  }
}
</script>

<style scoped>
  .container {
    display: relative;
    padding: 40px;
  }

  img {
    width: 900px;
    height: 370px;
    margin-top: 40px;
  }

  img:hover {
    transform: scale(1.05); 
  }

  /* .caption {
    position: relative;
    text-align: center;
    color: white;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

   */
</style>
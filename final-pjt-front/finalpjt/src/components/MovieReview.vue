<template>
  <div class="big-container">
  
    <router-link 
      :to="{ name: 'newreview', }" tag="button">
      CREATE
    </router-link>
    <br>
    <br>
    <div class="container">
      <b-container fluid>
          <div class="list">
            <ul>
              <li v-for="review in reviews" :key="review.pk">
                <router-link :to="{ name: 'reviewdetail', params: {movieId: recommMovie.id, reviewId: review.pk} }">
                <h5><i class="fa-solid fa-circle-user"></i> {{ review.title }}</h5>
                {{ review.content }}
                <hr>
                </router-link>
              </li>
            </ul>
          </div>


      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MovieReview',
  data () {
    return {
      movieId: this.$route.params.movieId,
      reviewId: this.$route.params.reviewId,
    }
  },
  computed: { 
    ...mapGetters(['reviews', 'recommMovie'])
  },
  methods: {
    ...mapActions(['fetchReviews'])
  },
  created() { 
    this.fetchReviews(this.movieId)
  },

}
</script>

<style scoped>
  * {
    color: white;
  }

  .big-container{
    display: flex;
    flex-direction: column;
    color: white;
    padding: 20px;
    
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    padding-left: 15px;
  }

  button {
    width: 150px;
    height: 40px;
    border-radius: 20px;
    margin-left: 80px;
    background-color: white;
    color: black;
    font-weight: 500;
  }

  button:hover {
    background-color: rgb(255, 129, 129);
  }

  li {
       list-style-type: none;
    }
  
  .list {
    font-size: 20px;
 
  }

  a {
    text-decoration: none;
  }



</style>
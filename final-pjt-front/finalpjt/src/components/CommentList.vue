<template>
  <div class="comment-list">
    
    <ul>
      <li>
      <comment-item 
        v-for="comment in comments" 
        :comment="comment" :key="comment.pk">
      </comment-item>        
      </li>
    </ul>

    <comment-form :moviePk="this.moviePk"></comment-form>
  </div>
</template>

<script>
import CommentItem from '@/components/CommentItem.vue'
import CommentForm from '@/components/CommentForm.vue'
// import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'CommentList',
  components: { 
    CommentForm, 
    CommentItem 
    },
  data() {
    return {
      moviePk: this.$store.getters.recommMovie.id
    }
  },
  props: { 
    comments: Array 
    },
}
</script>

<style>

</style>
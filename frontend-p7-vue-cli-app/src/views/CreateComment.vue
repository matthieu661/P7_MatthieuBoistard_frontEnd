<template>
  <div class="about">
    <h1>Nouveau message</h1>
    <CreateComment/>
  </div>
</template>



<script>
import CreateComment from '@/components/CreateCommentComponent.vue'
export default ({
    name: 'CommentCreateComment',
    components: {
        CreateComment
    }
    
})
</script>


<style lang="scss" scoped>

</style>
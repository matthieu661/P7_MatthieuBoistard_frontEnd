<template>
  <div class="about">
    <h1>Nouveau message</h1>
    <CreatePost/>
  </div>
</template>



<script>
import CreatePost from '@/components/createPostComponent.vue'
export default ({
    name: 'PostCreatePost',
    components: {
        CreatePost
    }
    
})
</script>


<style lang="scss" scoped>

</style>

<template>
  <div class="Post">
    <h1>This is Post page</h1>
    <router-link to="/newPost">Nouveau message</router-link>
    
    <PostsPage/>
  </div>
</template>

<script>
import PostsPage from '@/components/PostsPage.vue'

export default {
    name :'Thetest3',
    components : {
      PostsPage
    }
}
</script>
<style scoped lang="scss">
</style>
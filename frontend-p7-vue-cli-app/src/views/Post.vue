<template>
  <div class="Post">
    <h1>This is Post page</h1>
    <OnePost/>
    <GetAllComment/>
    
  </div>
</template>

<script>
import OnePost from '@/components/PostComponent.vue'
import GetAllComment from '@/components/CommentComponent.vue'

export default {
    name :'Post',
    components : {
      OnePost, GetAllComment,
    }
}
</script>
<style scoped lang="scss">
</style>
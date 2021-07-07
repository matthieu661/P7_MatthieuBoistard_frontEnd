<template>
  <div class="Post">
    <h1>This is Post page</h1>
    <OnePost/>
     
    <GetAllComment/>
    
  </div>
</template>

<script>
import OnePost from '@/components/Post-OnePerPage_Component.vue'
import GetAllComment from '@/components/Comment-GetAll_Component.vue'

export default {
    name :'Post',
    components : {
      OnePost, GetAllComment,
    }
}
</script>
<style scoped lang="scss">
</style>
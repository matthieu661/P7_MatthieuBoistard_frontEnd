<template>
  <div class="Post">
    <h1>This is Post page</h1>
    <OnePost/>
    
  </div>
</template>

<script>
import OnePost from '@/components/PostComponent.vue'

export default {
    name :'Post',
    components : {
      OnePost
    }
}
</script>
<style scoped lang="scss">
</style>
<template>
  <div class="Post">
    <h1>This is Post page</h1>
    <router-link to="/newPost">Nouveau message</router-link>
    
    <WallPage/>
  </div>
</template>

<script>
import WallPage from '@/components/Posts-Wall_Component.vue'

export default {
    name :'GetWallPage',
    components : {
      WallPage
    }
}
</script>
<style scoped lang="scss">
</style>
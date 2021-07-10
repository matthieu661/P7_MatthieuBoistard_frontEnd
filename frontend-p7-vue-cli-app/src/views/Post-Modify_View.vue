<template>
  <div class="modifier">
    <h1>vous pouvez modifier votre Post</h1>
    <modifyPostComponent/>
  </div>
</template>
<script>
// @ is an alias to /src
import modifyPostComponent from '@/components/Post-Modify_Component.vue'

export default {
  name: 'ModifyPostView',
  components: {
    modifyPostComponent
  }
}
</script>
<style lang="scss">
.hello2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#modifyBox {
  display: flex;
  flex-direction: column;
  width: 90%;
  min-width: 300px;
}
</style>
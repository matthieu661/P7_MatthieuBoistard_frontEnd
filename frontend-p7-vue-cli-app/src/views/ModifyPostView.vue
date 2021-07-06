<template>
  <div class="about">
    <h1>vous pouvez modifier votre Post</h1>
    <modifyPostComponent/>
  </div>
</template>
<script>
// @ is an alias to /src
import modifyPostComponent from '@/components/modifyPostComponent.vue'

export default {
  name: 'ModifyPostView',
  components: {
    modifyPostComponent
  }
}
</script>
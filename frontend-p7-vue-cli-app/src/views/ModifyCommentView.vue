<template>
  <div class="about">
    <h1>vous pouvez modifier votre Post</h1>
    <modifyCommentComponent/>
  </div>
</template>
<script>
// @ is an alias to /src
import modifyCommentComponent from '@/components/modifyCommentComponent.vue'

export default {
  name: 'ModifyCommentView',
  components: {
    modifyCommentComponent
  }
}
</script>
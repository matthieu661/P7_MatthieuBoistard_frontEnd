<template>
  <div class="about">
    <h1>vous pouvez modifier votre profile</h1>
    <modifyUserComponent/>
  </div>
</template>
<script>
// @ is an alias to /src
import modifyUserComponent from '@/components/modifyUserComponent.vue'

export default {
  name: 'ModifyUserView',
  components: {
    modifyUserComponent
  }
}
</script>
<template>
  <div class="about">
    <h1>vous pouvez modifier votre profile</h1>
    <ModifyUser/>
  </div>
</template>
<script>
// @ is an alias to /src
import ModifyUser from '@/components/User-Modify_Component.vue'

export default {
  name: 'ModifyUserAccount',
  components: {
    ModifyUser
  }
}
</script>
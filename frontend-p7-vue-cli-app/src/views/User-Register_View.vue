<template>
  <div class="home">
    
    <Register msg="Register "/>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/User-Register_Component.vue'

export default {
  name: 'Register',
  components: {
    Register
  }
}
</script>
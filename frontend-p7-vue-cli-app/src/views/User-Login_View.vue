<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-left-font-monochrome-black.png">
    <Login msg="Login "/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/User-Login_Component.vue'

export default {
  name: 'Login',
  components: {
    Login
  }
}
</script>
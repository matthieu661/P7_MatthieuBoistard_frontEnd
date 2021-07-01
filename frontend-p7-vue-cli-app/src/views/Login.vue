<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-left-font-monochrome-black.png">
    <Thetest msg="Login "/>
  </div>
</template>

<script>
// @ is an alias to /src
import Thetest from '@/components/Login.vue'

export default {
  name: 'Login',
  components: {
    Thetest
  }
}
</script>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-left-font-monochrome-black.png">
    <Thetest2 msg="Register "/>
  </div>
</template>

<script>
// @ is an alias to /src
import Thetest2 from '@/components/Register.vue'

export default {
  name: 'Register',
  components: {
    Thetest2
  }
}
</script>
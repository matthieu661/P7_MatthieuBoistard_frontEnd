<template>
  <div class="home">
    <RegisterLogin msg="Connecte toi ! esclave "/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterLogin from '@/components/Register-Login.vue'

export default {
  name: 'connexion',
  components: {
    RegisterLogin
  }
}
</script>

<template>
  <div class="home">
    <RegisterLogin msg="Connecte toi ! esclave "/>
    <Login/>  
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterLogin from '@/components/Register-Login.vue'
//import Login from '@/components/Login.vue'

export default {
  name: 'connexion',
  components: {
    RegisterLogin
  }
}

</script>

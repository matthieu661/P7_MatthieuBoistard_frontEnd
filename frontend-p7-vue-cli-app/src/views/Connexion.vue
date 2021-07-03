<template>
  <div class="home">
    <Thetest/> 
    <RegisterLogin msg="Connecte toi ! esclave "/>
     
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterLogin from '@/components/Register-Login.vue'
import Thetest from '@/components/Login.vue'


export default {
  name: 'connexion', 
  components: {
    RegisterLogin, Thetest,
    
  }
}

</script>

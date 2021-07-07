<template>
  <div class="home">
    <h2> Acces rapide</h2>
    <Thetest/> 
    <p>Si vous n'etes pas enregistré</p>
    <RegisterLogin msg=" Créer un compte :"/>
     
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterLogin from '@/components/User-Register_Component.vue'
import Thetest from '@/components/User-Login_Component.vue'


export default {
  name: 'connexion', 
  components: {
    RegisterLogin, Thetest,
    
  }
}

</script>

<template>
  <div class="home">
    <h2> Acces rapide</h2>
    <Thetest/> 
    <RegisterLogin msg=" Créer un compte :"/>
     
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

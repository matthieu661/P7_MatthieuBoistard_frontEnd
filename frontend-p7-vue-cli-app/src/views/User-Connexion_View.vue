<template>
  <div class="homeConnexion">
    <h1>Se connecter :</h1>
    <div class="FlexConnexion">
    <Login/> 
  </div>
  <p>Si vous n'etes pas encore enregistré,</p>
  <h2>Si vous n'etes pas encore enregistré, Créer un compte </h2>
   <div class="FlexConnexion">
    
    <Register msg=" Créer un compte :"/>
   </div>
     
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/User-Register_Component.vue'
import Login from '@/components/User-Login_Component.vue'


export default {
  name: 'connexion', 
  components: {
    Register, Login,
    
  }
}

</script>
<style lang="scss">
.homeConnexion {
  display: flex;
  flex-direction: column;
  background-color: #beefd9 ;
  
}
.FlexConnexion {
  display: flex;
  background-color: #42b983;
  border: 2px solid black;
  margin: 10px;
}
#FlexForm {
  display: flex;
  flex-direction: column;
  width: 335px;
}
.avertissement {
 font-style: italic;
 font-size: 0.9em;

 margin: 0PX;

 color : white;
}
.margetop {
  margin-top: 10px;
}
.margebot {
  margin-bottom: 10px;
}
.visuel {
  font-weight: 700;
  margin-bottom: 3px;
  font-size: 1.1em;
  color: black;
}
</style>

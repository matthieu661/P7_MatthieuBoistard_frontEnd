<template>
  <div class="homeConnexion">
    <h1>Se connecter :</h1>
    <div class="FlexConnexion">
      <Login />
    </div>
    <h2>Si vous n'etes pas encore enregistré, Créer un compte</h2>
    <div class="FlexConnexion">
      <Register msg=" Créer un compte :" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/User-Register_Component.vue";
import Login from "@/components/User-Login_Component.vue";

export default {
  name: "connexion",
  components: {
    Register,
    Login,
  },
};
</script>
<style lang="scss" scoped>
</style>
<style lang="scss">
.homeConnexion {
  display: flex;
  flex-direction: column;
  
  border-radius: 15px;
  align-items: center;
}
.avertissement2 {
  font-style: italic;
}
.FlexConnexion {
  display: flex;
  width: 90%;
  background-color: rgba(24, 107, 99, 0.849);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgb(24, 107, 99) 0px 1px 2px;
  //border: 2px solid black;
  border-radius: 15px;
  margin: 10px;
}


#Email {
  border-radius: 10px;
  &:focus {
    box-shadow: 0 0 7px #133626fb;
  }
}
#Email2 {
  border-radius: 10px;
  &:focus {
    box-shadow: 0 0 7px #133626fb;
  }
}
#Mdp {
  border-radius: 10px;
  &:focus {
    box-shadow: 0 0 7px #133626fb;
  }
}
#Mdp2 {
  margin-top : 25px;
  border-radius: 10px;
  &:focus {
    box-shadow: 0 0 7px #133626fb;
  }
}
#Username2 {
  margin-top : 15px;
  border-radius: 10px;
  &:focus {
    box-shadow: 0 0 7px #133626fb;
  }
}


#FlexForm {
  display: flex;
  flex-direction: column;
  width: 335px;
}
#FlexForm2 {
  display: flex;
  flex-direction: column;
  width: 335px;
}
#Login {
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
}
#Register {
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
}
.avertissement {
  font-style: italic;
  font-size: 0.9em;
  margin: 0px;
  color: white;
}
.margetop {
  margin-top: 10px;
}
.margebot {
  margin-bottom: -15px;
}
.visuel {
  margin-top : 0px;
  font-weight: 700;
  margin-bottom: 3px;
  font-size: 1.1em;
  color: white;
}
</style>

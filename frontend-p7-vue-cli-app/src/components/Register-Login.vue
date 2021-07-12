<template>
  <div class="DivParent">
    
    <div class="Connexion-User">
      <h1>{{ msg }}</h1>
      <div id=nav-user>
        
        <router-link to="/register"><p>Register</p></router-link>
    </div>
      <div class=Connexion-User-active>

      </div>
      <img alt="Vue logo" src="../assets/icon-left-font-monochrome-black.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterLogin",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.DivParent {
  display: flex;
  justify-content: center;
  border : solid black 2px;
  
}
#nav-user{
  margin : 20px;
  font-size: 1.5em;
  p {
    color : red;
  }
}

.Connexion-User {
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
  border: solid black 2px;
  justify-content: center;
  align-items: center;
  img {
      height: 150px;
      width: 50%;
      border: black solid 2px;
  }
}
</style>
<template>
  <div id="app">
    <div id="nav">
      <div class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/connexion" v-show="this.SwitchConnexion">Connexion</router-link> |
      
      <router-link to="/wall" v-show="this.Switch">The Wall</router-link> |
      <router-link to="/account/id" v-show="this.Switch">Account</router-link> 
      </div>
      <div classe="user">
       <button id="deconexion" v-show="this.Switch" type="button"> deconnexion </button> |
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  
  data() {
    return {
    Switch : false,
    SwitchConnexion : true,
    };
  },
mounted() {
  
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log(user)
  if(user === null){
    this.Switch = false
  }else{
    this.Switch = true
    let deconnexion = document.getElementById("deconexion");
    deconnexion.addEventListener("click", () => {
      localStorage.clear();
      this.$router.push({ name : "Home" });
      window.location.reload();
    })
    this.SwitchConnexion = false
  }

}
}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  text-align: left;
  margin-left: 15px;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  
}
button {
  background-color: greenyellow;
}
</style>

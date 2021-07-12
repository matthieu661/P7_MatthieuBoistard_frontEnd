<template>
  <div id="app">
    <div id="nav">
      <div class="navigation">
        <router-link to="/" class="Navi" id="reloadNav">Home</router-link>
        <router-link to="/about" class="Navi">About</router-link>
        <router-link
          to="/connexion"
          v-show="this.SwitchConnexion"
          class="Navi"
          id="ConnexionBtn"
          >Connexion</router-link
        >

        <router-link to="/wall" v-show="this.Switch" class="Navi" id="Wall"
          >The Wall</router-link
        >
        <div id="Account">
          <router-link
            to="/account/id"
            v-show="this.Switch"
            class="Navi"
            id="AccountBtn"
            title="Account"
            ><i class="fas fa-user-alt"></i
          ></router-link>
        </div>
      </div>
      <div class="Deco">
        <button
          id="deconexion"
          v-show="this.Switch"
          type="button"
          title="Deconnexion"
        >
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      Switch: false,
      SwitchConnexion: true,
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user === null) {
      this.Switch = false;
    } else {
      this.Switch = true;
      let deconnexion = document.getElementById("deconexion");
      deconnexion.addEventListener("click", () => {
        localStorage.clear();
        this.$router.push({ name: "Home" });
        window.location.reload();
      });
      this.SwitchConnexion = false;
    }
    let reloadNav = document.getElementById("reloadNav");
      reloadNav.addEventListener("click", () => {
        window.location.reload();
      });
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btnTEST {
  background-color: red !important;
}

#nav {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.3em;
  .fa-user-alt {
    margin-right: 3px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: rgb(24, 107, 99);
      font-size: 1.1em;
    }
  }
}
#Wall {
  display: flex;
  flex-grow: 1;
  margin-left: 20px;
  text-align: center;
}

.Navi {
  width: 60px;
  margin-left: 10px;
}
.navigation {
  display: flex;
  width: 100%;
}

#ConnexionBtn {
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
}
#Account {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
}
#AccountBtn {
  display: flex;
  //flex-grow: 1;
  justify-content: flex-end;
  .fa-user-alt {
    margin-right: 4px;
    color: rgb(24, 107, 99);
    &:hover {
      transition: 1s;
      color: rgba(192, 115, 14, 0.712);
    }
  }
}
.Deco {
  display: flex;
  justify-content: flex-end;
}
#deconexion {
  display: flex;
  flex-flow: 1;
  background-color: white;

  border: none;
  margin-top: 10px;
  margin-right: -5px;
  border-radius: 15px;
  .fa-sign-out-alt {
    font-size: 1.8em;
    color: rgba(112, 2, 2, 0.815);
    font-weight: 700;
    &:hover {
      transition: 1s;
      color: black;
    }
  }
  &:hover {
    cursor: pointer;
  }
}

textarea {
  border-radius: 7px;
  min-width: 300px;
  min-height: 150px;
  background-color: rgba(24, 107, 99, 0.397);
}
</style>

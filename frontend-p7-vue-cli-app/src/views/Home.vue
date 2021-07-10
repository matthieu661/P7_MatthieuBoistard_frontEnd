<template>
  <div class="homeHome">
    <div class="container">
      <img
        alt="Vue logo"
        src="../assets/icon-left-font-monochrome-black.svg"
        id="homeImg"
      />
    </div>
    <div class="Anima"><AcceuilText/></div>
  </div>
</template>

<script>
// @ is an alias to /src
import AcceuilText from "../components/zHome-Component.vue"

export default {
  name: "",
  components: {
    AcceuilText
  },
  mounted() {
    
  }
};
</script>
<style lang="scss">
.homeHome {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  
  justify-content: center;
  max-width: 600px;
}

#homeImg {
  width: 95%;
}
.anima {
  font-family: 'Waiting for the Sunrise', cursive; 
  font-size:30px; 
  margin: 10px 50px; 
  letter-spacing: 6px; 
  font-weight: bold;
}
</style>

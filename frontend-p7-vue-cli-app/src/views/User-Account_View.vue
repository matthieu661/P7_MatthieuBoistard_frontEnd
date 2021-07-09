<template>
  <div class="home">
    
    <GetUserAcccount />
  </div>
</template>

<script>
// @ is an alias to /src
import GetUserAcccount from '@/components/User-GetAccount_Component.vue'

export default {
  name: 'GetUserAccount',
  components: {
    GetUserAcccount
  }
}
</script>
<style lang="scss">
#oneUserBox{
  display: flex;
  flex-direction: column;
  height: auto;
}
.UserTitre {
  font-size: 2em;
  color: green;
  margin-top: -15px;
  margin-bottom: -10px;
}

#deleteUser {
  
  &:hover {
    transition: 2s;
    background-color: rgba(255, 0, 0, 0.555);
    border: none;
  }
}
.UserPage{
  display: flex;
  flex-direction: column;

  justify-content:center;
}
#return {
  display: flex;
  flex-direction: row;
  align-self: center;
  .back {
    font-size: 1.3em;
    font-weight: 600;
    margin-left: 10px;
    text-decoration: none;
    
  }
  .boxBio {
    display: flex;
    flex-direction: column;
    height: 400px;
  }
  
}
.MiniTitle {
  font-size: 1.2em;
  font-weight: 600;
}
.pSmart {
 height: auto;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
}
.Green {
  background-color: #beefd9;
  border-radius: 15px;
}





</style>
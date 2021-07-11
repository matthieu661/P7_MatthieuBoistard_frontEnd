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
  color: rgb(24,107,99);
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
  margin-top :30px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgb(24, 107, 99) 0px -2px 6px 0px inset;
  justify-content:center;
  border-radius: 10px;
  padding-bottom: 15px;
}
.cartesUser {
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(24, 107, 99, 0.596) 0px -2px 6px 0px inset;
  border-radius: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
}
.bntWall{
  margin-bottom: 10px!important;
&:hover{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(24, 107, 99, 0.596) 0px -2px 6px 0px inset !important;
      
    }
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
#Use {
  background-color: rgb(24, 107, 99);
  color: white;
}






</style>
<template>
  <div class="about">
    <h1>vous pouvez modifier votre profile</h1>
    <ModifyUser />
  </div>
</template>
<script>
// @ is an alias to /src
import ModifyUser from "@/components/User-Modify_Component.vue";

export default {
  name: "ModifyUserAccount",
  components: {
    ModifyUser,
  },
};
</script>
<style lang="scss" >

form {
  display: flex;
  flex-direction: column;
}
#Bio, .UserModif {
  border-radius: 10px;
  margin-bottom : 20px;
  color : white;
  background-color: rgba(24, 107, 99, 0.733);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgb(24, 107, 99) 0px -2px 6px 0px inset;
  &:focus {
    transition: 2s;
    background-color: rgba(24, 107, 99, 0.096);
    font-weight: 600;
    color : black;
  }
}
.userUpd{
  display: flex;
  justify-content: center;
  background-color: white;
  font-weight: 600;
  border: none;
  height: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(11, 71, 8, 0.35) 0px -2px 6px 0px inset;
   border-radius: 10px;
  margin-bottom: 10px!important;
&:hover{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(107, 92, 24, 0.596) 0px -2px 6px 0px inset !important;
      
}  
}
</style>
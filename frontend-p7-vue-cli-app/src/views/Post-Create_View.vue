<template>
  <div class="about">
    <h1>Créer un nouveau message</h1>
    <CreatePost/>
  </div>
</template>



<script>
import CreatePost from '@/components/Post-Create_Component.vue'
export default ({
    name: 'PostCreatePost',
    components: {
        CreatePost
    }
    
})
</script>


<style lang="scss">
#boxAPost{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#postBox {
  display: flex;
  flex-direction: column;
  width: 90%;
}
#title {
  min-width: 300px;
  min-height: 30px;
  border-radius :7px;
  background-color: rgba(24, 107, 99, 0.267);
}
label {
  font-weight: 600;
  margin-top: 15px;
}
.Btn-Input_file {
  background: white;
  margin-bottom: 20px ;
  width: 180px;
  height: 23px;
  align-self: center;
  padding-top: 5px;
  border-radius: 15px;
  
  &:hover {
    cursor: grab ;
    transition: 1s;
    background-color: #043b2231 ;
    &:active {
      cursor: grabbing;
    }

  }
}
#newPost {
  font-weight: 600;
  border-radius: 7px;
}
// .. .. revenir sur ce point dans le futur ! Important custom Upload button***
.Input-file {
  display: flex;
  margin-top: 5px;
  margin-bottom: 8px;
  border: 1px black solid;
  border-radius: 7px;
  background-color: rgba(24, 107, 99, 0.808);
  text-align: center;
  justify-content: center;
  justify-items: center;
  font-size: 1em;
  
  
}


// Probleme de double btn difficilement modifiable btn upload
input[type="file"]::file-selector-button {
  display: none;
}
#media {
  display: flex;
  width: 94%;
  color : white;
  align-self: center;
  padding-left: 15px;
 
  
}


</style>

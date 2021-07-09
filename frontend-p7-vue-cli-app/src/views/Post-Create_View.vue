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
  background-color: #42b98357;
}
label {
  font-weight: 600;
  margin-top: 15px;
}

</style>

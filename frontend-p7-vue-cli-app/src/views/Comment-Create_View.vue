<template>
  <div class="about">
    <h1>Commenter !</h1>
    <CreateComment />
  </div>
</template>



<script>
import CreateComment from "@/components/Comment-Create_Component.vue";
export default {
  name: "CommentCreateComment",
  components: {
    CreateComment,
  },
};
</script>




<style lang="scss" >
#Commentbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#postBoxContent2{
  display: flex;
  flex-direction: column;
}
#replyTo {
  font-style: oblique;
  margin-top: -15px;
}
#usern{
  font-size: 1.2em;
  font-weight: 600;
  margin-left: 5px;
  color : #42b983 ;
}
</style>
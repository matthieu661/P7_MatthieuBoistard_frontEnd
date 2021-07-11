<template>
  <div id="Post">
    <OnePost />
    <GetAllComment />
  </div>
</template>

<script>
import OnePost from "@/components/Post-OnePerPage_Component.vue";
import GetAllComment from "@/components/Comment-GetAll_Component.vue";

export default {
  name: "Post",
  components: {
    OnePost,
    GetAllComment,
  },
};
</script>
<style lang="scss">
#Post {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  align-items: center;
}

#like {
  display: flex;
  justify-content: center;
  .fa-thumbs-down {
    margin-left: 10px;
    & {
      color: red;
    }
  }
  .fa-thumbs-up {
    margin-left: 10px;
    & {
      color: blue;
    }
  }
}
#liker {
  display: flex;
  justify-content: center;
  background-color: white;
  border : none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(11, 71, 8, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    transition: 1s;
    box-shadow: rgba(122, 118, 118, 0.315) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(4, 2, 102, 0.836) 0px -2px 6px 0px inset;
    
    
  }
}
#disliker {
  display: flex;
  justify-content: center;
  background-color: white;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(11, 71, 8, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    transition: 1s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(112, 0, 0, 0.884) 0px -2px 6px 0px inset;
    
    
  }
}
.OnePost {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #186b6357;
  border-radius: 25px;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
#onePostBox {
  margin-top: 20px;
  background-color: white;
  width: 95%;
  border-radius: 15px;
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(3, 31, 1, 0.39) 0px -2px 6px 0px inset;
}
.cartesPost2 {
  width: 100%;
}


.btn {
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
  width: 200px;
  height: 25px;
  border-radius: 75px;
  transition: 2s box-shadow;
  cursor: pointer;
  margin: 10px;
  text-decoration: none; // tick sur tout les a
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(11, 71, 8, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    transition: 2s;
    border : none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgb(177, 160, 11) 0px -2px 6px 0px inset;
  }
}
#deletePost {
  &:hover {
    transition: 2s;
    border : none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgb(129, 2, 2) 0px -2px 6px 0px inset;
  }
}

.btn2 {
  width: 100px;
}

#Reply {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 200px;
  height: 25px;
  background: rgb(255, 255, 255);
  border: green 2px solid;
  border-radius: 75px;
  transition: 1s box-shadow;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
  }

  &:hover::before,
  &:hover::after {
    display: block;
    content: "";
    position: absolute;
    width: 200px;
    height: 25px;
    background: #beefd9;

    border-radius: 75px;
    z-index: -1;
    animation: 3s clockwise infinite;
  }
  &:hover:after {
    background: #42b983;
    animation: 2s counterclockwise infinite;
  }
  .fa-comment-dots {
    margin-left: 10px;
  }
}
.Commentbox {
  display: flex;
  
  flex-direction: column;
  width: 100%;
  
}
.contentBoxPost {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 600px;
  width: 100%;
  
  .TitrePost2 {
    background-color: rgb(24,107,99);
    width: 80%;
    color: white;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  .ImageOnePost {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
}
.licomment {
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 15px;
  margin-bottom: 15px;
  .commentmess2 {
    display: flex;
    margin-top: 3px;
    margin-bottom: 5px;
    padding: 7px;
    max-height: 300px;
    white-space: normal;
    overflow: visible;
    text-overflow: none;
    font-style: oblique;
    text-overflow: ellipsis;
    justify-content: center;
    
     margin-left: 10px;
     height: auto;
  }
  .contentBox {
    background-color: transparent;
    
  }
  .ownerDiv {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    img {
      width: 15px;
    }
  }
  .Owner {
    font-size: 1.1em;
    font-weight: 700;
    margin-left: 10px;
  }

  .btnDel {
    &:hover {
    transition: 2s;
    border : none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgb(129, 2, 2) 0px -2px 6px 0px inset;
  }
  }
}

@keyframes clockwise {
  0% {
    top: -5px;
    left: 0;
  }
  12% {
    top: -2px;
    left: 2px;
  }
  25% {
    top: 0;
    left: 5px;
  }
  37% {
    top: 2px;
    left: 2px;
  }
  50% {
    top: 5px;
    left: 0;
  }
  62% {
    top: 2px;
    left: -2px;
  }
  75% {
    top: 0;
    left: -5px;
  }
  87% {
    top: -2px;
    left: -2px;
  }
  100% {
    top: -5px;
    left: 0;
  }
}

@keyframes counterclockwise {
  0% {
    top: -5px;
    right: 0;
  }
  12% {
    top: -2px;
    right: 2px;
  }
  25% {
    top: 0;
    right: 5px;
  }
  37% {
    top: 2px;
    right: 2px;
  }
  50% {
    top: 5px;
    right: 0;
  }
  62% {
    top: 2px;
    right: -2px;
  }
  75% {
    top: 0;
    right: -5px;
  }
  87% {
    top: -2px;
    right: -2px;
  }
  100% {
    top: -5px;
    right: 0;
  }
}
</style>
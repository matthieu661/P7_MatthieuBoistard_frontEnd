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
  &:hover {
    transition: 1s;
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.671);
    background-color: #beefd9;
    border: white 3px solid;
  }
}
#disliker {
  display: flex;
  justify-content: center;
  background-color: white;
  &:hover {
    transition: 1s;
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.671);
    background-color: #beefd9;
    border: white 3px solid;
  }
}
.OnePost {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #beefd94b;
  border-radius: 25px;
  margin-bottom: 20px;
  margin-top: 20px;
}
#onePostBox {
  margin-top: 20px;
  background-color: white;
  width: 95%;
  border-radius: 15px;
}
.cartesPost2 {
  width: 100%;
}

.commentmess2 {
  height: auto;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
}
.btn {
  align-items: center;
  justify-content: center;
  border: #42b983 2px solid;
  background-color: white;
  width: 200px;
  height: 25px;
  border-radius: 75px;
  transition: 2s box-shadow;
  cursor: pointer;
  margin: 10px;
  text-decoration: none; // tick sur tout les a
  &:hover {
    transition: 2s;
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
    background-color: #beefd9;
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
    background-color: green;
    width: 100%;
    color: white;
    border-radius: 15px;
  }
  .ImageOnePost {
    width: 100%;
    max-width: 300px;
  }
}
.licomment {
  width: 100%;
  border: #42b983 2px solid;
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
  }
  .ownerDiv {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
  .Owner {
    font-size: 1.1em;
    font-weight: 700;
    margin-left: 10px;
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
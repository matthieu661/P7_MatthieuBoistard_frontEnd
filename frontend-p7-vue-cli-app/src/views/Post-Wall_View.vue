<template>
  <div class="WallPage">
    <h1>Publications</h1>
    <div id="NewPost">
      <router-link to="/newPost" id="link-mess">Nouveau message <i class="fas fa-paper-plane"></i></router-link>
    </div>
    <WallPage />
  </div>
</template>

<script>
import WallPage from "@/components/Posts-Wall_Component.vue";

export default {
  name: "GetWallPage",
  components: {
    WallPage,
  },
};
</script>
<style lang="scss">
.WallPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.Parent {
  display: flex;
  width: 98%;
  justify-content: center;
}
#link-mess {
  text-decoration: none;
  color: #42b983ec;
  font-size: 1.3em;
  font-weight: 700;
  border &:hover {
    font-size: 2em;
  }
}

#NewPost {
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 240px;
  height: 25px;
  background: rgba(255, 255, 255, 0);
  border-radius: 75px;
  transition: 1s box-shadow;

  :hover {
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
  }

  :hover::before,
  :hover::after {
    display: block;
    content: "";
    position: absolute;
    width: 240px;
    height: 40px;
    background: #42b983;
    border-radius: 75px;
    z-index: -1;
    animation: 1s clockwise infinite;
  }
  :hover:after {
    background: #beefd9;
    animation: 2s counterclockwise infinite;
  }
}
#getAll {
  width: 97%;
  //border: 2px solid black;
  margin-left: 0px;
  padding-left: 8px;
  padding-right: 11px;
  list-style: none;
  background-color: white;
  justify-content: center;
}
.superLi {
  width: 100%;
  border: #42b983 2px solid;
  border-radius: 15px;
  margin-top: 15px;
  background-color: #beefd9;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.425);
}

.cartesPost {
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 0px;
    margin-bottom: 5px;
    background-image: linear-gradient(#42b9838c, 90%, white);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-size: 1.2em;
    font-weight: 700;
  }
  .contentBox {
    max-height: 400px;
    width: 100%;
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .messagePost {
    background-color: white;
    margin-top: 3px;
    margin-bottom: 5px;
    padding: 7px;
    max-height: 300px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .BoxData {
    height: 20px;
    display: flex;
    background-color: white;

    img {
      width: 15px;
      margin-left: 15px;
    }
  }
  img {
    width: 15px;
    margin-left: 15px;
  }
  .username {
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  .time {
    font-size: 1em;
    font-style: italic;
    font-weight: 500;
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .counter {
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 10px;
  }
  .Comment {
    display: flex;
    width: 100%;
    height: 23px;
    background-color: white;
    justify-content: center;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    :hover {
      background-color: #42b98367;
      cursor: pointer;
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
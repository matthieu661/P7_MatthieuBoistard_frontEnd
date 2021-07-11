<template>
  <div class="WallPage">
    <h1>Publications</h1>
    <div id="NewPost">
      <router-link to="/newPost" id="link-mess"
        >Nouveau message <i class="fas fa-paper-plane"></i
      ></router-link>
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
  color: rgb(24, 107, 99);
  font-size: 1.3em;
  font-weight: 700;
  border &:hover {
    font-size: 2em;
  }
}
.solution {
  display: flex;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:hover {
    transition: 1s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(83, 5, 5, 0.3) 0px 30px 60px -30px,
      rgba(4, 90, 71, 0.466) 0px -2px 6px 0px inset;
    cursor: pointer;
   
  }
}
.miracle {
  margin-left: 5px;
  font-weight: 600;
  
}

.Commenter {
  width: 16px;
  margin-bottom: 2px;
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
  //border: rgb(24,107,99) 2px solid;
  border: none;
  border-radius: 15px;
  margin-top: 15px;
  //background-color: rgba(24, 107, 99, 0.178);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgb(24, 107, 99) 0px 1px 2px;
}

.cartesPost {
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 0px;
    margin-bottom: 5px;
    background: rgb(24, 107, 99);
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    font-size: 1.2em;
    font-weight: 700;
    color: white;
  }
  .contentBox {
    max-height: 600px;
    width: 100%;
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .ImageduPost {
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
    margin-bottom: 5px;
    img {
      width: 15px;
      margin-left: 15px;
    }
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
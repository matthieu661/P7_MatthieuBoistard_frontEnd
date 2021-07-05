<template>
  <div class="Parent">
    <ul id="getAll"></ul>
  </div>
</template>
<script>
export default {
  name: "GetAllComment",
  props: {},
  data() {
    return {
      id: "",
      token: "",
      username: "",
      post: [],
    };
  },
  // mounted pour auto load
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // la recup les username+token dans le localstorage
      this.username = user.username;
      this.token = user.token;
      //invoque la recup des posts et la creation des li
      this.returnAllComment();
    } else {
      // a changer juste pour test
      return console.log("Probleme localstorage no data");
    }
  },
  methods: {

    getAllComment() {
      // const router = this.$router;

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      const paramsId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );
      return fetch(
        `http://localhost:3000/api/posts/getOnePost/${paramsId}`,
        options
      ).then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return res.status(8000);
        }
      });
    },

    async returnAllComment() {
      await this.getAllComment().then((json) => {
        let data = json.comment;
        console.log(data.length);
        for (let i = 0; i < data.length; i++) {

          // creation de la LI
          let newLi = document.createElement("li");
          document.getElementById("getAll").appendChild(newLi);
          //cartes
          let newCarte = document.createElement("div");
          newCarte.classList.add("cartesPost");
          newLi.appendChild(newCarte);
          // content Post
          let newContentBox = document.createElement("div");
          newContentBox.classList.add("contentBox");
          newCarte.appendChild(newContentBox);
          // comment
          let newMessage = document.createElement("p");
          let messageContent = data[i].postReply;
          newMessage.textContent = messageContent;
          newContentBox.appendChild(newMessage);
          // content Info
          let newInfoBox = document.createElement("div");
          newCarte.appendChild(newInfoBox);
          // Username
          let newUsername = document.createElement("p");
          let usernameContent = data[i].username;
          newUsername.textContent = usernameContent;
          newInfoBox.appendChild(newUsername);
        }
      });
    },
  },
};
</script>
<style scoped lang="scss" >
.Parent {
  width: 100%;
  height: auto;
  border: solid black 2px;
}
ul {
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin-top: 20px;
  padding: 30px;
  &__li {
    display: flex;
    background-color: red;
  }
}
</style>
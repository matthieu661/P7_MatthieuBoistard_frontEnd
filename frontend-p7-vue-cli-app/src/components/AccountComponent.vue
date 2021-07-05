<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/wall">retourner sur le " The Wall " </router-link>
    <h2>votre compte utilisateur</h2>
    <div id="oneUserBox"></div>
    <div id="action">
      <button id="modifyUser" type="button">modifer votre Profile</button> |
      <button id="deleteUser" type="button">supprimer votre Profile</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "OneUser",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // la recup les username+token dans le localstorage
      this.id = user.id;
      this.username = user.username;
      this.token = user.token;

      // init le btn1
      let btnModify = document.getElementById("modifyUser");
      btnModify.addEventListener("click", () => {
            this.$router.push("/account/:id/modifyUser");
          });
      //invoque la recup des posts et la creation des li
      this.returnInfoUser();
    } else {
      // a changer juste pour test
      return console.log("Probleme localstorage no data");
    }
  },
  methods: {
    getOneUser() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      const myId = this.id;
      console.log(myId);

      return fetch(
        `http://localhost:3000/api/users/getOneUser/${myId}`,
        options
      ).then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return res.status(8000);
        }
      });
    },
    returnInfoUser() {
      this.getOneUser().then((json) => {
        console.log(json);
        // la requete passe
        let Box = document.getElementById("oneUserBox");
        let newCarte = document.createElement("div");
        newCarte.classList.add("cartesUser");
        Box.appendChild(newCarte);
        // content Post
        let newContentBox = document.createElement("div");
        newContentBox.classList.add("contentBox");
        newCarte.appendChild(newContentBox);
        // H3 titre post
        let NewTitle = document.createElement("h3");
        let titleContent = json.username;
        NewTitle.textContent = titleContent;
        newContentBox.appendChild(NewTitle);
        // post
        let newMessage = document.createElement("p");
        let messageContent = json.email;
        newMessage.textContent = messageContent;
        newContentBox.appendChild(newMessage);
        // content Info
        let newInfoBox = document.createElement("div");
        newCarte.appendChild(newInfoBox);
        // Username
        let newBio = document.createElement("p");
        let userBioContent = json.BIO;
        newBio.textContent = userBioContent;
        newInfoBox.appendChild(newBio);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 30 10px;
}
a {
  color: #42b983;
}
</style>
<template>
  <div class="UserPage">
    <h1 id="Use">Bienvenue</h1>
    <p class="UserTitre">{{ msg }}</p>
    <h2>Votre Espace Personel</h2>
    <div id="oneUserBox" class="Green"></div>
    <div id="action">
      <button id="modifyUser" type="button" class="btn">
        <i class="fas fa-user-edit"></i> Mettre a jour votre Profile
      </button>
      <button id="deleteUser" type="button" class="btn">
        <i class="fas fa-trash"></i> supprimer votre Profile
      </button>
      <button v-show="this.SwitchUser" id="testDeletePosts" type="button" class="btn btnTEST">
        <i class="fas fa-trash-alt"> TEST : supprimer toutes vos Publications</i>
      </button>
    </div>
    <router-link to="/wall" id="return" class="btn bntWall"
      ><i class="fas fa-chevron-circle-left"></i>
      <p class="back back2">The Wall</p></router-link
    >
  </div>
</template>

<script>
export default {
  name: "GetUserAcccount",

  data() {
    return {
      id: "",
      username: "",
      msg: "",
      posts: [],
      SwitchUser: false
    };
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
      // init bnt2
      if(this.posts.length != null){
      let BtnTest = document.getElementById("testDeletePosts")
     BtnTest.addEventListener("click", () => {
        this.$confirm("Voulez-vous supprimer vos publications ?")
          .then(() => {
            for (let i = 0; i < this.posts.length; i++) {
              let int = parseInt(this.posts[i]);
              this.deleteOnePost(int);
              window.location.reload();
            }
          })
          .catch(function () {
            return console.log("cancel delete");
          });
      });}

      let btnDelete = document.getElementById("deleteUser");
      btnDelete.addEventListener("click", () => {
        this.$confirm("Voulez-vous supprimer votre Profil ?")
          .then(() => {
            this.deleteOneUser()
          })
          .catch(function () {
            return console.log("cancel delete");
          });
      });
      //invoque la recup des posts et la creation des li
      this.returnInfoUser();
    } else {
      // a changer juste pour test
      return console.log("Probleme localstorage no data");
    }
  },
  methods: {
    deleteOneUser() {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      return fetch("http://localhost:3000/api/users/deleteUser/", options).then(
        (res) => {
          if (res.status == 200) {
            this.$router.push({ name: "Home" });
            localStorage.clear();
            window.location.reload();
          } else {
            return res.status(8000);
          }
        }
      );
    },

    deleteOnePost(x) {
      console.log(x);
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      const paramsId = x;

      fetch(
        `http://localhost:3000/api/posts/deletePost/${paramsId}`,
        options
      ).then((res) => {
        if (res.status == 200) {
          return console.log( `post n° ${paramsId} supprimé`)
        } else {
          res.status(8000);
        }
      });
    },

    getOneUser() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      const myId = this.id;

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

        if (json.Posts != "") {
      this.SwitchUser = true;
    } else {
      this.SwitchUser = false;}


        if (json.Posts != "" ) {
          for (let i = 0; i < json.Posts.length; i++) {
            this.posts += json.Posts[i].id + ".";
          }
          this.posts = this.posts.split(".");
          this.posts.pop();

        }
        
        // la requete passe
        this.msg = json.username;

        let Box = document.getElementById("oneUserBox");
        let newCarte = document.createElement("div");
        newCarte.classList.add("cartesUser");
        Box.appendChild(newCarte);
        // content Post
        let newContentBox = document.createElement("div");
        newContentBox.classList.add("contentBox");
        newCarte.appendChild(newContentBox);
        // H3 titre post
        let NewTitleDesc = document.createElement("p");
        NewTitleDesc.textContent = "Votre nom d'utilisateur";
        NewTitleDesc.classList.add("MiniTitle");
        newContentBox.appendChild(NewTitleDesc);

        let NewTitle = document.createElement("p");
        let titleContent = json.username;
        NewTitle.textContent = titleContent;
        newContentBox.appendChild(NewTitle);
        NewTitle.classList.add("MiniTitleUser");
        // post
        let newMessageDesc = document.createElement("p");
        newMessageDesc.textContent = "Votre Adresse E-mail";
        newMessageDesc.classList.add("MiniTitle");
        newContentBox.appendChild(newMessageDesc);

        let newMessage = document.createElement("p");
        let messageContent = json.email;
        newMessage.textContent = messageContent;
        newContentBox.appendChild(newMessage);
        newMessage.classList.add("MiniTitleEmail");
        // content Info
        let newInfoBox = document.createElement("div");
        newInfoBox.classList.add("boxBio");
        newCarte.appendChild(newInfoBox);
        // Username
        let newBioDesc = document.createElement("p");
        newBioDesc.textContent = "Votre Bio";
        newBioDesc.classList.add("MiniTitle");
        newInfoBox.appendChild(newBioDesc);

        let newBio = document.createElement("p");
        let userBioContent = json.BIO;
        newBio.textContent = userBioContent;
        newBio.classList.add("pSmart");
        newInfoBox.appendChild(newBio);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

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
      PowerAdmin: false,
      PowerUser: false,
      POWER : false,
      
    };
  },
  // mounted pour auto load
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // la recup les username+token dans le localstorage
      this.PowerAdmin = user.isAdmin;
      this.username = user.username;
      console.log(this.username)
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
        
        

        for (let i = 0; i < data.length; i++) {


          if (data[i].username === this.username) {
          console.log(data.username);
          this.PowerUser = true;
        }
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

          // btn 
          if((this.PowerAdmin === true || this.PowerUser === true)){
          let newBtnM = document.createElement("button");
          newBtnM.classList.add("btn");
          let NewtextBtnModify = document.createTextNode(
            "modfier votre commentaire"
          );
          newBtnM.appendChild(NewtextBtnModify);
          newLi.appendChild(newBtnM);
          //event sur btn
          newBtnM.addEventListener("click", () => {
            const paramsIdPost = window.location.href.substr(
              window.location.href.lastIndexOf("/") + 1
            );
            const paramsId = data[i].id;
            this.$router.push(
              `/post/&${paramsIdPost}&/modifyComment/${paramsId}`
            );
          });
          let newBtnD = document.createElement("button");
          newBtnD.classList.add("btn");
          let NewtextBtnDelete = document.createTextNode(
            "supprimer votre commentaire"
          );
          newBtnD.addEventListener("click", () => {
            this.$confirm("Voulez-vous supprimer votre Poste?").then(() => {
              this.deleteOneComment(data[i].id); // une const ne passe pas ?? mais le json oui!
            });
          });

          newBtnD.appendChild(NewtextBtnDelete);
          newLi.appendChild(newBtnD);}
          console.log(data);
        }
      });
    },
    deleteOneComment(x){
       const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      const paramsId = x;

      return fetch(
        `http://localhost:3000/api/comment/deleteComment/${paramsId}`,
        options
      ).then((res) => {
        if ((res.status == 200)) {
          
          this.$alert("Commentaire supprimé");
          this.$router.go()
        } else {
           res.status(8000);
        }
      });
    }

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
<template>
  <div class="Commentbox">
    <h4>{{ this.H4 }}</h4>
    <ul id="getAll" class="listeComment"></ul>
  </div>
</template>
<script>
import logo3 from "../assets/user-regular.svg";
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
      POWER: false,
      H4: "",
      confirmation: false,
    };
  },
  // mounted pour auto load
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // la recup les username+token dans le localstorage
      this.PowerAdmin = user.isAdmin;
      this.username = user.username;
      this.token = user.token;
      this.id = user.id;
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
      )
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            res.status(401).json({ error: "Unauthorized" });
            return;
          }
        })
        .catch(function (error) {
          console.log("getAll comment" + error.message);
        });
    },

    async returnAllComment() {
      await this.getAllComment().then((json) => {
        let data = json.comment;

        // commentaire avec ou sans "S"
        if (data.length <= 1) {
          this.H4 = "Commentaire";
        } else {
          this.H4 = "Commentaires";
        }

        for (let i = 0; i < data.length; i++) {
          if (data[i].userId === this.id) {
            this.PowerUser = true;
          }
          // creation de la LI
          let newLi = document.createElement("li");
          newLi.classList.add("licomment");
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
          newMessage.classList.add("commentmess2");
          newMessage.textContent = messageContent;
          newContentBox.appendChild(newMessage);
          // content Info
          let newInfoBox = document.createElement("div");
          newInfoBox.classList.add("ownerDiv");
          newCarte.appendChild(newInfoBox);
          // Username
          let newUsername = document.createElement("p");
          let usernameContent = data[i].username;
          newUsername.textContent = usernameContent;
          newUsername.classList.add("Owner");
          newInfoBox.appendChild(newUsername);
          let logoUser = document.createElement("img");
          logoUser.src = logo3;
          newInfoBox.appendChild(logoUser);

          // btn
          if (this.PowerAdmin === true || this.PowerUser === true) {
            let newBtnM = document.createElement("button");
            newBtnM.classList.add("btn");
            newBtnM.classList.add("btnModif");
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
            newBtnD.classList.add("btnDel");
            let NewtextBtnDelete = document.createTextNode(
              "supprimer votre commentaire"
            );
            newBtnD.addEventListener("click", () => {
              this.$confirm("Voulez-vous supprimer votre commentaire ?")
                .then(() => {
                  this.deleteOneComment(data[i].id);
                })
                .catch(function () {
                  return console.log("cancel delete");
                });
            });

            newBtnD.appendChild(NewtextBtnDelete);
            newLi.appendChild(newBtnD);
          }
        }
      });
    },
    deleteOneComment(x) {
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
      )
        .then((res) => {
          if (res.status == 200) {
            this.$alert("Commentaire supprimé");
            this.$router.go();
          } else {
            res.status(401).json({ error: "Unauthorized" });
            return;
          }
        })
        .catch(function (error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    },
  },
};
</script>

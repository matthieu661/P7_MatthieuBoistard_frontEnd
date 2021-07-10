<template>
  <div class="OnePost">
    <div id="onePostBox"></div>
    <h4 id="Reply" >Reply this post <i class="far fa-comment-dots"></i></h4>
    <div id="like">
      
      <h5 id="liker" class="btn btn2">{{ this.dataLike }}<i class="far fa-thumbs-up"></i></h5>
      <h5 id="disliker" class="btn btn2" >
        {{ this.dataDisLike }}<i class="far fa-thumbs-down"></i>
      </h5>
    </div>
    <div id="action">
      <button id="modifyPost" class="btn" v-show="this.POWER" type="button">
        modifer votre Post
      </button>
      <button id="deletePost" class="btn" v-show="this.POWER" type="button">
        supprimer votre Post
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModifyPost",
  props: {
    msg: String,
    like: Number,
    dislike: Number,
  },
  data() {
    return {
      dataLike: 0,
      dataDisLike: 0,
      PowerAdmin: false,
      PowerUser: false,
      POWER: false,
      username: "",
    };
  },
  mounted() {
    const router = this.$router;
    const paramsId = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    );

    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // la recup les username+token dans le localstorage
      this.PowerAdmin = user.isAdmin; // Power admin pour l'affichage seulement
      this.id = user.id;
      this.username = user.username;
      console.log(this.username + "la");
      this.token = user.token;

      //invoque la recup des posts et la creation des li
      this.returnOnePost();
      let Active = document.getElementById("Reply");
      Active.addEventListener("click", () => {
        router.push(`newComment/${paramsId}`);
      });
    } else {
      // a changer juste pour test
      return console.log("Probleme localstorage no data");
    }

    // réutilise la function pour le compteur des likes/dislikes
    this.getOnePost().then((json) => {
      this.dataLike = json.post.likes;
      this.dataDisLike = json.post.dislikes;
    });

    console.log(this.dataLike);
    // btn like
    let userLike = document.getElementById("liker");
    userLike.addEventListener("click", () => {
      this.PushLike();
    });
    // btn dislike
    let userDisLike = document.getElementById("disliker");
    userDisLike.addEventListener("click", () => {
      this.PushDisLike();
    });

    // init le btn1
  },
  methods: {
    GetLike() {
      const paramsId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      return fetch(
        `http://localhost:3000/api/rate/${paramsId}/like`,
        options
      ).then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return res.status(8000);
        }
      });
    },

    async PushLike() {
      await this.GetLike().then((json) => {
        console.log(json.post.likes);
        let value = json.post.likes;
        console.log(value);
        if (value === 0) {
          this.dataLike += 1;
        } else {
          this.dataLike -= 1;
        }
      });
    },
    // dislike
    GetDisLike() {
      const paramsId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };

      return fetch(
        `http://localhost:3000/api/rate/${paramsId}/Dislike`,
        options
      ).then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return res.status(8000);
        }
      });
    },

    async PushDisLike() {
      await this.GetDisLike().then((json) => {
        console.log(json.post.dislikes);
        let value = json.post.dislikes;
        console.log(value);
        if (value === 0) {
          this.dataDisLike -= 1;
        } else {
          this.dataDisLike += 1;
        }
      });
    },
    // /////////////////////////////////////////////////////
    ConfirmDelete() {
      this.$confirm("Voulez-vous supprimer votre Poste?").then(() => {
        this.deleteOnePost();
      });
    },

    deleteOnePost() {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      const paramsId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );

      return fetch(
        `http://localhost:3000/api/posts/deletePost/${paramsId}`,
        options
      ).then((res) => {
        if (res.status == 200) {
          this.$router.push({ name: "GetWallPage" });
          //localStorage.clear();
        } else {
          res.status(8000);
        }
      });
    },
    getOnePost() {
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
    async returnOnePost() {
      await this.getOnePost().then((json) => {
        console.log(this.username);
        const paramsId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );

        if (json.post.userName === this.username) {
          console.log(json.post.userName);
          this.PowerUser = true;
        }

        console.log(this.PowerUser);
        console.log(this.PowerAdmin);
        if (this.PowerAdmin === true || this.PowerUser === true) {
          let btnModify = document.getElementById("modifyPost");
          btnModify.addEventListener("click", () => {
            this.$router.push(`/post/modifyPost/${paramsId}`);
          });
          // init bnt2
          let btnDelete = document.getElementById("deletePost");
          btnDelete.addEventListener("click", () => {
            this.ConfirmDelete();
          });
          this.POWER = true;
        }

        // mémo : créer les div et afficher les infos via js (comme p5 et PostPageqf)
        let Box = document.getElementById("onePostBox");
        let newCarte = document.createElement("div");
        newCarte.classList.add("cartesPost2");
        
        Box.appendChild(newCarte);
        // content Post
        let newContentBox = document.createElement("div");
        newContentBox.classList.add("contentBoxPost");
        newCarte.appendChild(newContentBox);
        // H3 titre post
        let NewTitle = document.createElement("h3");
        let titleContent = json.post.title;
        NewTitle.textContent = titleContent;
        NewTitle.classList.add("TitrePost2");
        newContentBox.appendChild(NewTitle);
        // post
        let newMessage = document.createElement("p");
        let messageContent = json.post.content;
        newMessage.textContent = messageContent;
        newContentBox.appendChild(newMessage);

        let Attachement = document.createElement("img");
              Attachement.src = json.post.attachement;
              Attachement.alt = json.post.attachement;
              Attachement.classList.add("ImageOnePost")
              newContentBox.appendChild(Attachement);
        // content Info
        let newInfoBox = document.createElement("div");
        newCarte.appendChild(newInfoBox);
        // Username
        let newUsername = document.createElement("p");
        let usernameContent = json.post.userName;
        newUsername.textContent = usernameContent;
        newInfoBox.appendChild(newUsername);
        // date
        let newTime = document.createElement("p");
        let timeContent = json.post.createdAt;
        let convert = timeContent
          .replace("T", " ")
          .replace(".000Z", "")
          .split("-")
          .join(" ")
          .split(" ")
          .reverse()
          .join(" ");
        let convertTime = convert.split(" ", 1);
        let convertDate = timeContent
          .substr(0, 10)
          .replace("-", " ")
          .replace("-", " ")
          .split(" ")
          .reverse()
          .join("-");
        newTime.textContent =
          "Posté le : " + convertTime + " le " + convertDate;
        newInfoBox.appendChild(newTime);
        // Partie comment
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
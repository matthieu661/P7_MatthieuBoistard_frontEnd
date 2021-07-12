<template>
  <div class="Parent">
    <ul id="getAll"></ul>
  </div>
</template>
<script>
import logo from "../assets/reply-solid.svg";
import logo2 from "../assets/user-solid.svg";

export default {
  name: "WallPage",
  props: {},
  data() {
    return {
      id: "",
      token: "",
      username: "",
      post: [],
      dataComment: 0,
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
      this.returnAllPost();
    } else {
      // a changer juste pour test
      return console.log("Probleme localstorage no data");
    }
  },
  methods: {
    getAllPosts() {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
      return fetch("http://localhost:3000/api/posts/getAllPost", options).then(
        (res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            return res.status(8000);
          }
        }
      );
    },

    counterComment(x) {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      const paramsId = x;

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

    returnAllPost() {
      this.getAllPosts().then((json) => {
        //const router = this.$router;
        if (json.length === 0) {
          let ZERO = document.createElement("p");
          ZERO.textContent = "Soyez le premier !";
          document.getElementById("getAll").appendChild(ZERO);
        }

        for (let i = 0; i < json.length; i++) {
          let newLi = document.createElement("li");
          newLi.classList.add("superLi");
          document.getElementById("getAll").appendChild(newLi);
          //cartes
          let newCarte = document.createElement("div");
          newCarte.classList.add("cartesPost");
          newLi.appendChild(newCarte);
          // content Post
          let newContentBox = document.createElement("div");
          newContentBox.classList.add("contentBox");
          newCarte.appendChild(newContentBox);
          // H3 titre post
          let NewTitle = document.createElement("h3");
          let titleContent = json[i].title;
          NewTitle.textContent = titleContent;
          newContentBox.appendChild(NewTitle);
          // post
          if(json[i].attachement != null){
          let Attachement = document.createElement("img");
              Attachement.src = json[i].attachement;
              Attachement.alt = json[i].attachement;
              Attachement.classList.add("ImageduPost")
              newContentBox.appendChild(Attachement);}

          let newMessage = document.createElement("p");
          newMessage.classList.add("messagePost");
          let messageContent = json[i].content;
          newMessage.textContent = messageContent;
          newContentBox.appendChild(newMessage);
          // content Info
          let newInfoBox = document.createElement("div");
          newInfoBox.classList.add("BoxData");
          newCarte.appendChild(newInfoBox);

          // commentaire counter :
          let divComment = document.createElement("div");
          newCarte.appendChild(divComment);
          divComment.classList.add("Comment");
          let counterInfo = document.createElement("p");
          counterInfo.classList.add("counter");

          this.counterComment(json[i].id).then((json) => {
            this.dataComment = json.comment.length;
            let NbrComment = this.dataComment;
            if (NbrComment <= 1) {
              counterInfo.textContent = NbrComment + " commentaire";
            } else {
              counterInfo.textContent = NbrComment + " commentaires";
            }
            divComment.appendChild(counterInfo);
          });

          let newiconReply = document.createElement("img");
          newiconReply.src = logo2;
          newInfoBox.appendChild(newiconReply);

          let newDivReplyCom = document.createElement("div");
          newDivReplyCom.classList.add("solution");
          divComment.appendChild(newDivReplyCom)

          let newiconReply2 = document.createElement("img");
          newiconReply2.src = logo;
          newDivReplyCom.appendChild(newiconReply2);
          newiconReply2.classList.add("Commenter")

          let newToPost = document.createElement("p");
          let test78 = " voir ";
          newToPost.classList.add("miracle")
          newToPost.textContent = test78 ;
          newDivReplyCom.appendChild(newToPost)
          newDivReplyCom.addEventListener("click", () => {
            this.$router.push("Post/" + json[i].id);
          });

          
          // Username
          let newUsername = document.createElement("p");
          newUsername.classList.add("username");
          let usernameContent = json[i].userName;
          newUsername.textContent = usernameContent;
          newInfoBox.appendChild(newUsername);
          // date
          let newTime = document.createElement("p");
          newTime.classList.add("time");
          let timeContent = json[i].createdAt;
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
          newTime.textContent = " à " + convertTime + " le " + convertDate;
          newInfoBox.appendChild(newTime);
        }
      });
    },
  },
};
</script>


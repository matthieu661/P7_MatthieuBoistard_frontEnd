<template>
  <div class="Parent">
    <ul id="getAll"></ul>
  </div>
</template>
<script>
import logo from "../assets/reply-solid.svg"

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
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      return fetch("http://localhost:3000/api/posts/getAllPost", options).then(
        (res) => {
          if (res.status == 200) {
            return res.json()
          } else {
            return res.status(8000);
          }
        }
      );
    },

    counterComment(x){
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
        for (let i = 0; i < json.length; i++) {
          let newLi = document.createElement("li");
          newLi.classList.add("superLi");
          let newbtn = document.createElement("button")
          newbtn.classList.add('seePost');
          newbtn.textContent = "Reply"
          newLi.appendChild(newbtn)
          let newiconReply = document.createElement("img")
          newiconReply.src = logo
          newbtn.appendChild(newiconReply)

          newbtn.addEventListener("click", () => {
            this.$router.push("Post/" + json[i].id);
          });
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
          let newMessage = document.createElement("p");
          let messageContent = json[i].content;
          newMessage.textContent = messageContent;
          newContentBox.appendChild(newMessage);
          // content Info
          let newInfoBox = document.createElement("div");
          newCarte.appendChild(newInfoBox);
          // Username
          let newUsername = document.createElement("p");
          let usernameContent = json[i].userName;
          newUsername.textContent = usernameContent;
          newInfoBox.appendChild(newUsername);
          // date
          let newTime = document.createElement("p");
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
          newTime.textContent =
            "Posté le : " + convertTime + " le " + convertDate;
          newInfoBox.appendChild(newTime);
          let counterInfo = document.createElement("p");
          // commentaire counter :
          this.counterComment(json[i].id).then((json) => {
            this.dataComment = json.comment.length;
            let NbrComment = this.dataComment
          counterInfo.textContent = NbrComment + " reply"
          newInfoBox.appendChild(counterInfo)
            console.log(this.dataComment)
          })

          
          
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
}
</style>
<style>
.superLi {
  display: flex;
  border : black solid 2px;
}
</style>


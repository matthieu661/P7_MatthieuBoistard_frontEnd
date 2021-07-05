<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>reply</h4>
    <div id="onePostBox"></div>
    <h4 id="Reply">Reply this post</h4>
  </div>
</template>

<script>
export default {
  name: "OnePost",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  mounted() {
    const router = this.$router;
    const paramsId = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    );

    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // la recup les username+token dans le localstorage
      this.username = user.username;
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
  },
  methods: {
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
      return fetch(`http://localhost:3000/api/posts/getOnePost/${paramsId}`, options).then(
          (res) => {
        if (res.status == 200) {
          return res.json()
        } else {
          return res.status(8000);
        }
      });
    },
    returnOnePost() {
      this.getOnePost().then((json) => {
        console.log(json.post.title);
        // mémo : créer les div et afficher les infos via js (comme p5 et PostPageqf)
        let Box = document.getElementById("onePostBox");
        let newCarte = document.createElement("div");
        newCarte.classList.add("cartesPost");
        Box.appendChild(newCarte);
        // content Post
        let newContentBox = document.createElement("div");
        newContentBox.classList.add("contentBox");
        newCarte.appendChild(newContentBox);
        // H3 titre post
        let NewTitle = document.createElement("h3");
        let titleContent = json.post.title;
        NewTitle.textContent = titleContent;
        newContentBox.appendChild(NewTitle);
        // post
        let newMessage = document.createElement("p");
        let messageContent = json.post.content;
        newMessage.textContent = messageContent;
        newContentBox.appendChild(newMessage);
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
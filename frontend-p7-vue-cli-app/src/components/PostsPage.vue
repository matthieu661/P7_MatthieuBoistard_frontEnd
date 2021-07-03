<template>
  <div class="Parent">
    <ul id="getAll"></ul>
  </div>
</template>
<script>
export default {
  name: "PostsPage",
  props: {},
  data() {
    return {
      test: ["a", "b", "c"], // a supp
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
      this.returnAllPost();
    } else {
      // a changer juste pour test
      return console.log("Probleme localstorage no data");
    }
  },
  methods: {
    //grab data to APi
    getAllPosts() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
      };
      fetch("http://localhost:3000/api/posts/getAllPost", options).then(
        (res) => {
          if (res.status == 200) {
            return res
              .json()
              .then(function (json) {
                console.log(json.length);
                for (let i = 0; i < json.length; i++) {
                  let newLi = document.createElement("li");
                  //cartes
                  let newCarte = document.createElement("div");
                  newCarte.classList.add("cartesPost");
                  newLi.appendChild(newCarte);
                  // content Post
                  let newContentBox = document.createElement("div");
                  newContentBox.classList.add("contentBox");
                  newCarte.appendChild(newContentBox);
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
                  newTime.textContent = "Posté le : " + convertTime + " le " + convertDate;
                  newInfoBox.appendChild(newTime);


                  document.getElementById("getAll").appendChild(newLi);
                }
              })
              .catch(function (err) {
                err;
              });
          } else {
            return res.status(8000);
          }
        }
      );
    },

    async returnAllPost() {
      await this.getAllPosts();

      //console.log(typeof(dataPost));
      // for (let i = 0; i < dataPost.length; i++) {
      //  let data = data.push(dataPost);
      // }
    },
  },
};
</script>
<style scoped >
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
li {
  display: flex;
  width: auto;
  height: auto;
  background-color: red;
}
p {
  color: red;
}
</style>


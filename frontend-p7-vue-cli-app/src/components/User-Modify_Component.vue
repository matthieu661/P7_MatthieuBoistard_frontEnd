<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form @submit="UpdateUser">
      <label for="Bio">à porpos de vous :</label>
      <textarea
        @input="checkForm"
        type="text"
        id="Bio"
        name="Bio"
        minlength="30"
        maxlength="254"
      ></textarea>
      <label for="username">Username</label>
      <input
        @input="checkForm"
        type="text"
        id="username"
        class="UserModif"
        name="username"
        minlength="3"
        maxlength="15"
      />
      <input type="submit" id="Update" class="userUpd" value="mettre à jour" />
    </form>
  </div>
</template>

<script>
export default {
  name: "ModifyUser",
  props: {
    msg: String,
  },
  data() {
    return {
      id: "",
      usernaMe: "",
      posts: [],
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      this.id = user.id;
      this.username = user.username;
      this.token = user.token;
    } else {
      // a changer juste pour test
      return console.log("Probleme localstorage no data");
    }
  },
  methods: {
    checkForm() {
      if (
        document.getElementById("Bio").checkValidity() &&
        document.getElementById("username").checkValidity()
      ) {
        document.getElementById("Update").disabled = false;
      } else {
        document.getElementById("Update").disabled = true;
      }
    },

    UpdateUserPost(x) {
      console.log("DANS LE UP POST");
      console.log(x);
      let userName = document.getElementById("username").value;
      console.log(userName);
      let data = new FormData();

      data.append("userName", userName);
      console.log(data);
      const options = {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",

          Authorization: `Bearer ${this.token}`,
        },
        body: data,
      };

      const paramsIdPost = x;
      fetch(
        `http://localhost:3000/api/posts/modifyPost/${paramsIdPost}`,
        options
      )
        .then((res) => {
          if (res.status == 201) {
            res.json().then(() => {
              console.log("Username modifié"); //En cas de succès, on est renvoyé sur la page des posts
            });
          } else {
            res.json().then((json) => {
              this.message = json.error; //Affichage du message d'erreur du serveur
            });
          }
        })
        .catch(function (error) {
          console.log("modifyPost" + error.message);
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
      )
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            res.status(401).json({ error: "Unauthorized" });
          }
        })
        .catch(function (error) {
          console.log("getOne User " + error.message);
        });
    },

    UpdateUser(event) {
      event.preventDefault();
      let userName = document.getElementById("username").value;
      let BiO = document.getElementById("Bio").value;

      if (userName != "") {
        this.getOneUser().then((json) => {
          console.log(json);
          if (json.Posts != "") {
            for (let i = 0; i < json.Posts.length; i++) {
              this.posts += json.Posts[i].id + ".";
            }
            this.posts = this.posts.split(".");
            this.posts.pop();
            for (let i = 0; i < this.posts.length; i++) {
              let int = parseInt(this.posts[i]);
              this.UpdateUserPost(int);
            }
          }
        });
      }

      const User = {
        username: userName,
        BIO: BiO,
      };

      let formData = [];
      for (var X in User) {
        let encodedKey = encodeURIComponent(X);
        let encodedValue = encodeURIComponent(User[X]);
        formData.push(encodedKey + "=" + encodedValue);
      }
      formData = formData.join("&");

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
        body: formData,
      };
      fetch(`http://localhost:3000/api/users/modifyUser/`, options)
        .then((res) => {
          if (res.status == 201) {
            res.json().then(() => {
              this.$router.push({ name: "GetUserAcccount" });

              //En cas de succès, on est renvoyé sur la page des posts
            });
          } else {
            res.json().then((json) => {
              this.message = json.error; //Affichage du message d'erreur du serveur
            });
          }
        })
        .catch(function (error) {
          console.log(" modifyUser " + error.message);
        });
    },
  },
};
</script>

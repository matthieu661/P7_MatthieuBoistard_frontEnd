<template>
  <div class="hello2">
    <h1>{{ msg }}</h1>
    <form @submit="Update" id="modifyBox">
      <textarea
        @input="checkForm"
        type="text"
        id="Commentaire"
        name="Commentaire"
         minlength="3"
        maxlength="254"
        placeholder=" de 3 à 254 carractéres :) répondez-lui ! "
      ></textarea>
      <input type="submit" id="Update" value="mettre à jour" />
    </form>
  </div>
</template>

<script>
export default {
  name: "modifyCommentComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // la recup les username+token dans le localstorage
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
      if (document.getElementById("Commentaire").checkValidity()) {
        document.getElementById("Update").disabled = false;
      } else {
        document.getElementById("Update").disabled = true;
      }
    },

    Update(event) {
      event.preventDefault();
      let Commentaire = document.getElementById("Commentaire").value;
      const Comment = {
        postReply: Commentaire,
      };

      let formData = [];
      for (var X in Comment) {
        let encodedKey = encodeURIComponent(X);
        let encodedValue = encodeURIComponent(Comment[X]);
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
      const paramsId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );
      // retour vers  le post
      const url = window.location.href;
      const urlCut = url.split("&");
      const paramsIdPost = urlCut[1];
      // avec methode pussh __> PATH de vue.router

      fetch(
        `http://localhost:3000/api/comment/modifyComment/${paramsId}`,
        options
      ).then((res) => {
        if (res.status == 201) {
          res.json().then(() => {
            this.$router.push({ path: `/post/${paramsIdPost}` }); 
          });
        } else {
          res.json().then((json) => {
            this.message = json.error; 
          });
        }
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

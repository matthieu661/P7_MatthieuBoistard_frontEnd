<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form @submit="Update">
      <textarea
        @input="checkForm"
        type="text"
        id="Commentaire"
        name="Commentaire"
        minlength="30"
        maxlength="1000"
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
      //invoque la recup des posts et la creation des li

      console.log(this.id);
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
      console.log(paramsIdPost);
        // avec methode pussh __> PATH de vue.router

      fetch(
        `http://localhost:3000/api/comment/modifyComment/${paramsId}`,
        options
      ).then((res) => {
        if (res.status == 201) {
          res.json().then(() => {
            this.$router.push({ path : `/post/${paramsIdPost}` }); //En cas de succès, on est renvoyé sur la page des posts
          });
        } else {
          res.json().then((json) => {
            this.message = json.error; //Affichage du message d'erreur du serveur
          });
        }
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
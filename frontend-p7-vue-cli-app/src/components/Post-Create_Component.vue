<template>
  <div id="boxAPost">
    <form id="postBox" @submit="newPost">
      <label for="title">Titre</label>
      <input
        @input="checkForm"
        type="text"
        id="title"
        name="title"
        minlength="3"
        maxlength="20"
        required
      />
      <label for="message">Message</label>
      <textarea
        @input="checkForm"
        type="text"
        id="message"
        name="message"
        maxlength="1000"
      ></textarea>
      <input type="submit" id="newPost" value="createPost" disabled />
      <label for="media" class="custom-file-upload"
        ><i class="fa fa-upload" aria-hidden="true"></i> Télécharger 
        image</label
      >
      <input
        @input="checkForm"
       
        type="file"
        id="media"
        name="media"
        accept="image/*"
      />
    </form>
  </div>
</template>


<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "CreatePost",
  data() {
    return {
      id: "",
      token: "",
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      this.id = user.id;
      this.token = user.token;
    } else {
      // a changer juste pour test
      return console.log("Probleme localstorage no data");
    }
  },
  methods: {
    checkForm() {
      if (
        document.getElementById("title").checkValidity() &&
        document.getElementById("message").checkValidity()
      ) {
        document.getElementById("newPost").disabled = false;
      } else {
        document.getElementById("newPost").disabled = true;
      }
    },

    newPost(event) {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const message = document.getElementById("message").value;
      const Attachement = event.target.media.files[0];

      let data= new FormData();

      data.append('title', title);
      data.append('content', message);

      data.append('attachement', Attachement)

      // pour mettre des images il faut apsser en app/JSON
      /*let formData =[];
        for (var X in Post){
          let encodedKey = encodeURIComponent(X);
          let encodedValue = encodeURIComponent(Post[X]);
          formData.push(encodedKey + "=" + encodedValue);
        }
        formData = formData.join("&");*/

      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          
          Authorization: `Bearer ${this.token}`,
        },
        body: data,
      };
      fetch("http://localhost:3000/api/posts/createPost", options).then(
        (res) => {
          if (res.status == 201) {
            res.json().then(() => {
              this.success = true;
              this.waiting = false;
              this.$router.push({ name: "GetWallPage" }); //En cas de succès, on est renvoyé sur la page des posts
            });
          } else {
            res.json().then((json) => {
              this.message = json.error; //Affichage du message d'erreur du serveur
            });
          }
        }
      );
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
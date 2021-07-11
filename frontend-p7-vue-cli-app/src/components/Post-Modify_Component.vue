<template>
  <div class="hello2">
    <h1>{{ msg }}</h1>
    <form @submit="UpdateUser" id="modifyBox">
      <label for="Title">Title</label>
      <input
        @input="checkForm"
        type="text"
        id="Title"
        name="Ttile"
        minlength="3"
        maxlength="15"
      />
      <label for="Content">Content :</label>
      <textarea
        @input="checkForm"
        type="text"
        id="Content"
        name="Content"
        minlength="30"
        maxlength="1000"
        
      ></textarea>
      <label for="media" class="custom-file-upload"
        ><i class="fa fa-upload" aria-hidden="true"></i> modifier l'image</label
      >
      <input
        @input="checkForm"
       
        type="file"
        id="media"
        name="media"
        accept="image/*"
      />
      <input type="submit" id="Update" value="mettre à jour" />
    </form>
  </div>
</template>

<script>
export default {
  name: "modifyPostComponent",
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
      if (
        document.getElementById("Content").checkValidity() &&
        document.getElementById("Title").checkValidity()
      ) {
        document.getElementById("Update").disabled = false;
      } else {
        document.getElementById("Update").disabled = true;
      }
    },

    UpdateUser(event) {
      event.preventDefault();
      let Title = document.getElementById("Title").value;
      let Content= document.getElementById("Content").value;
      let Attachement = event.target.media.files[0];

      let data= new FormData();

      data.append('title', Title);
      data.append('content', Content);

      data.append('attachement', Attachement)


      const options = {
        method: "PUT",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          
          Authorization: `Bearer ${this.token}`,
        },
        body: data,
      };
      const paramsId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );
      fetch(`http://localhost:3000/api/posts/modifyPost/${paramsId}`, options).then(
        (res) => {
          if (res.status == 201) {
            res.json().then(() => {
              this.$router.push({ name: "OnePost" }); //En cas de succès, on est renvoyé sur la page des posts
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

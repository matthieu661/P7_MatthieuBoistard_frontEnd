<template>
  <div>
    <h2>Hello on create Comment</h2>
    <form id="postBox" @submit="newPost"> 
      <label for="message">Message</label>
      <textarea
        @input="checkForm"
        type="text"
        id="message"
        name="message"
        maxlength="1000"
        required
      ></textarea>
      <input type="submit" id="newPost" value="createPost" disabled />
    </form>
  </div>
</template>


<script>


export default {
  name: "CreateComment",
  data() {
    return {
        id:"",
    token:"" 
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      this.id = user.id;
      this.token = user.token;
    }else {
    // a changer juste pour test
    return console.log("Probleme localstorage no data");}
  },
  methods: {
    checkForm() {
      if (
        
        document.getElementById("message").checkValidity()
      ) {
        document.getElementById("newPost").disabled = false;
      } else {
        document.getElementById("newPost").disabled = true;
      }
    },

    newPost(event) {
      event.preventDefault();
      const message = document.getElementById("message").value;
      const Comment = {
        comment: message,
      };

      const paramsId = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );


      let formData =[];
        for (var X in Comment){
          let encodedKey = encodeURIComponent(X);
          let encodedValue = encodeURIComponent(Comment[X]);
          formData.push(encodedKey + "=" + encodedValue);
        }
        formData = formData.join("&");

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        },
        body : formData,
      };
      fetch(`http://localhost:3000/api/comment/createComment/${paramsId}`, options)
          .then (res => {
            if (res.status == 201) {res.json ()
              .then (() => {
                this.$router.push({ name: 'OnePost' }); //En cas de succès, on est renvoyé sur la page des posts
              }
            )}
            else {res.json ()
            .then (json => {
                this.message = json.error; //Affichage du message d'erreur du serveur
              }
            )}
          })
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
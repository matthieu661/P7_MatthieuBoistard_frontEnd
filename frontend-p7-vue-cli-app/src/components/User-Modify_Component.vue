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
        maxlength="1000"
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

    UpdateUser(event) {
      event.preventDefault();
      let userName = document.getElementById("username").value;
      let BiO = document.getElementById("Bio").value;
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
      fetch(`http://localhost:3000/api/users/modifyUser/`, options).then(
        (res) => {
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
        }
      );
    },
  },
};
</script>

<template>
  <div class="Parent">
    <h1>{{ msg }}</h1>
    <div>
      <form>
        <form @submit="sendForm">
          <label for="Email">Adresse e-mail : </label>
          <input
            @input="checkForm"
            type="email"
            id="Email"
            name="email"
            required
          />
          <label for="Mdp">Password : </label>
          <input
            @input="checkForm"
            type="password"
            id="Mdp"
            name="password"
            minlength="8"
            required
          />
          <input type="submit" id="Login" value="LogAccount" disabled />
        </form>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thetest",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    checkForm() {
      if (
        document.getElementById("Email").checkValidity() &&
        document.getElementById("Mdp").checkValidity()
      ) {
        document.getElementById("Login").disabled = false;
      } else document.getElementById("Login").disabled = true;
    },
    sendForm(event) {
      event.preventDefault();

      let Email = document.getElementById("Email").value;
      let Mdp = document.getElementById("Mdp").value;
      const User = {
        email: Email,
        mdp: Mdp,
      };

      let formData = [];
      for (var X in User) {
        let encodedKey = encodeURIComponent(X);
        let encodedValue = encodeURIComponent(User[X]);
        formData.push(encodedKey + "=" + encodedValue);
      }
      formData = formData.join("&");

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formData,
      };

      fetch("http://localhost:3000/api/users/login", options)
        .then((res) => {
          if (res.status == 200) {
            res.json().then((json) => {
              const userData = {
                id: json.id,
                username: json.username,
                token: json.token,
              };
              //En cas de réussite, on stocke les identifiants de connexion jusqu'à ce que l'utilisateur se déconnecte
              localStorage.setItem("userData", JSON.stringify(userData));
              this.$router.push({ name: "Thetest3" }); //Renvoi vers la page des posts
            });
          } else {
            res.json().then((json) => {
              this.message = json.error;
            });
          }
        })
        .catch(() => {
          this.message = "probleme server";
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Parent {
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
  }
}
</style>

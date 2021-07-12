<template>
  <div class="Parent">
    <form @submit="sendForm" id="FlexForm">
      <label for="Email"><p class="visuel">Adresse e-mail :</p></label>
      <input @input="checkForm" type="email" id="Email" name="email" required />
      <label for="Mdp"><p class="visuel">Password :</p></label>
      <input
        @input="checkForm"
        type="password"
        id="Mdp"
        name="password"
        minlength="8"
        required
      />
      <input type="submit" id="Login" value="Se connecter" disabled />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
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
                isAdmin: json.isAdmin,
                id: json.userId,
                username: json.userName,
                token: json.token,
              };
              localStorage.setItem("userData", JSON.stringify(userData));
              this.$router.push({ name: "GetWallPage" });
              window.location.reload();
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

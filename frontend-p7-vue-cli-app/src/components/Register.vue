<template>
  <div class="userRegister">
    <h1>{{ msg }}</h1>
    <form @submit="sendform">
      <label for="Email">Adresse e-mail</label>
      <input @input="checkForm" type="email" id="Email" name="email" required />
      <label for="Mdp">Password </label>
      <input
        @input="checkForm"
        type="password"
        id="Mdp"
        name="password"
        minlength="8"
        required
      />
      <p>
        // mdp complexité : [min 8 caractéres / min : 1 miniscule / min : 1
        majuscule / min : 1 number / min : 1 caractére spé (!@#$%^&*)]
        
      </p>
      <h2>{{message}}</h2>
      <label for="Username">Username</label>
      <input
        @input="checkForm"
        type="text"
        id="Username"
        name="username"
        minlength="3"
        maxlength="15"
        required
      />
      <input type="submit" id="Register" value="logAccount" disabled />
    </form>
  </div>
</template>

<script>
export default {
  name: "Thetest2",
  props: {
    //
    msg: String,
  },
  data: function () {
    return {
      message: "",
    };
  },

  methods: {
    // functiona  faire passer
    checkForm() {
      if (
        document.getElementById("Email").checkValidity() &&
        document.getElementById("Mdp").checkValidity() &&
        document.getElementById("Username").checkValidity()
      )
        document.getElementById("Register").disabled = false;
    },
    // recuperer les données du forme
    sendform(event) {
      event.preventDefault(); //On gère nous-mêmes l'appel backend
      const Email = document.getElementById("Email").value;
      const Mdp = document.getElementById("Mdp").value;
      const Username = document.getElementById("Username").value;
      const isAdmin = false;
      const Bio = "";
      const User = {
        'email': Email,
        'username': Username,
        'mdp': Mdp,
        'isAdmin': isAdmin,
        'BIO': Bio,
      };

      //test filtre pseudo ----> a ameliorer
      const Polite = /\b(?!(?:WHOLE|GARDENER)\b)\w*(?:TROLL|WIFEHUNTER|HOLE|MORTAUXPATRONS)\w*\b/
      
      const UserNameFilter = JSON.stringify(User.username);
      console.log(UserNameFilter);
      console.log(Polite.test(UserNameFilter));
      if (Polite.test(UserNameFilter)) {
        this.message = "ce pseudo n'est pas autorisé";
        return console.log(this.message);
      }

     
      else {
        console.log(User);
        let formData =[];
        for (var X in User){
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
        
        fetch("http://localhost:3000/api/users/register", options)
          .then((res) => {
            if (res.status == 201) {
              this.$router.push({ name: "login" });
            } else {
              res.json().then((json) => {
                this.message = json.error;
              });
            }
          })
          .catch(() => {
            this.message =
              "Nous revenons bientot, le server est en maintenance";
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
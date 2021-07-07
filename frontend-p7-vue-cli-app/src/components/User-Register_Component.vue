<template>
  <div class="Parent">
    <h1>{{ msg }}</h1>
    <form @submit="sendform2">
      <label for="Email2">Adresse e-mail</label>
      <input @input="checkForm2" type="email2" id="Email2" name="email2" required />
      <label for="Mdp2">Password </label>
      <input
        @input="checkForm2"
        type="password"
        id="Mdp2"
        name="password"
        minlength="8"
        required
      />
      <p>
        // mdp complexité : [min 8 caractéres / min : 1 miniscule / min : 1
        majuscule / min : 1 number / min : 1 caractére spé (!@#$%^&*)]
        
      </p>
      <h2>{{message}}</h2>
      <label for="Username2">Username</label>
      <input
        @input="checkForm2"
        type="text"
        id="Username2"
        name="username"
        minlength="3"
        maxlength="15"
        required
      />
      <input type="submit" id="Register" value="S'enregistrer" disabled />
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
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
    checkForm2() {
      if (
        document.getElementById("Email2").checkValidity() &&
        document.getElementById("Mdp2").checkValidity() &&
        document.getElementById("Username2").checkValidity()
      ){
        document.getElementById("Register").disabled = false;
      }else {
        document.getElementById("Register").disabled = true;
    }
    },
    // recuperer les données du forme
    sendform2(event) {
      event.preventDefault();
      localStorage.clear();
      const Email = document.getElementById("Email2").value;
      console.log(Email)
      const Mdp = document.getElementById("Mdp2").value;
      const Username = document.getElementById("Username2").value;
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
              this.$router.go()
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
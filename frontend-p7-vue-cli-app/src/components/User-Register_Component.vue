<template>
  <div class="Parent">
    
    <form @submit="sendform2" id="FlexForm">
      <label for="Email2"><p class="visuel">Adresse e-mail :</p> </label>
      <input @input="checkForm2" type="email2" id="Email2" name="email2" required />
       <p class="avertissement margetop">
      Votre password doit contenir au minimum  : 
      </p>
      <p class="avertissement" > 8 caractéres, 1 miniscule, 1 majuscule, </p>
      <p class="avertissement margebot"> 1 chiffre, et  1 caractére spécial </p>
      <label for="Mdp2"><p class="visuel">Password :</p></label>
      <input
        @input="checkForm2"
        type="password"
        id="Mdp2"
        name="password"
        minlength="8"
        required
      />
     
      <label for="Username2"><p class="visuel">Username</p></label>
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
      EmailL:"",
      MdpL:"",
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
    
    Login() {

      const User = {
        email : this.EmailL,
        mdp : this.MdpL,
      }
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
              console.log(json)


              const userData = {
                isAdmin : json.isAdmin,
                id: json.userId,
                username: json.userName,
                token: json.token,
              };
              console.log(userData.isAdmin)
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
    // recuperer les données du forme
    sendform2(event) {
      event.preventDefault();
      localStorage.clear();
      const Email = document.getElementById("Email2").value;
      console.log(Email)
      this.EmailL = Email;
      const Mdp = document.getElementById("Mdp2").value;
      this.MdpL = Mdp;
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
              this.Login();
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

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="onePostBox"></div>
  </div>
</template>

<script>
export default {
  name: "OnePost",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      // la recup les username+token dans le localstorage
      this.username = user.username;
      this.token = user.token;
      //invoque la recup des posts et la creation des li
      this.getOnePost();
    } else {
      // a changer juste pour test
      return console.log("Probleme localstorage no data");
    }
  },
  methods: {
    getOnePost() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${this.token}`,
        }
      };
      const paramsId = window.location.href.substr((window.location.href.lastIndexOf("/") + 1));

      fetch(`http://localhost:3000/api/posts/getOnePost/${paramsId}`, options).then(

        (res) => {
          if (res.status == 200) {
            return res
              .json()
              .then(function (json) {
                console.log(json.post.title);

                // la requete passe 
                
                        // STOP POUR LA NUIT..
                        // mémo : créer les div et afficher les infos via js (comme p5 et PostPageqf)
                
              })
              .catch(function (err) {
                err;
              });
          } else {
            return res.status(8000);
          }
        }
      );
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
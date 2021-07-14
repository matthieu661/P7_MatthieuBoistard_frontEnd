<template>
  <div  id="Retour" class="about">
    <h1>Guide de présentation du Projet 7 " groupomania "</h1>
    <p><i class="fas fa-wrench"></i> en cours <i class="fas fa-wrench"></i></p>
    <h2>Page à ne pas prendre en compte</h2>

    <div id="BoxPrésentation">
      <div id="NavDemo">
        <a href="#Prérequis">Prérequis</a>
        <a href="#Fonctions">Fonctions du Network</a>
        <a href="#Database">DataBase</a>
        <a href="#Backend">Backend</a>
        <a href="#Frontend">FrontEnd</a>
      </div>
      <div id="contentDemo">
        <div id="Prérequis">
          <h3>Prérequis du projet</h3>
          <h4>
            1 : utiliser une base de données relationnelles qui se manipule avec
            le langage SQL pour le stockage de données <i class="fas fa-check-square"></i>
          </h4>
          <p class="reponses"> Utilisation du <span title=" relation entre tables // tete->corp* (tete = nom des colonnes/ corp = lignes) ">SGBDR</span> Mysql. </p>
          <h4>
            2 : Les données de connexion doivent également être sécurisées <i class="fas fa-check-square"></i>
          </h4>
          <p class="reponses"> Utilisation du <span>bcrypt</span> pour le password et de de <span>JWT</span> pour l'authentification sur les routes. </p>
           <h4>
            3 :  la web app puisse se connecter et se déconnecter à l’application et que la session de l’utilisateur persiste pendant qu’il est connecté
            <i class="fas fa-check-square"></i>
          </h4>
          <p class="reponses"> Utilisation du <span>Local storage</span>, tant que le token est valide, l'utilisateur peut se reconnecter au site et naviguer sans reconnexion. </p>
          <h4>
            4 : Tu peux utiliser le framework Front-End de ton choix, Par contre, le projet doit être codé en Javascript <i class="fas fa-check-square"></i>
          </h4>
          <p class="reponses"> Utilisation du <span>Vue.js</span> de façon basique pour le front et <span>Javascript</span>.</p>
          <img class="imgDemo" src="../../public/Presentation/Capture.jpg"/>
        </div> 
        
        <div id="Fonctions">
            <h3>Exigences du comité de pilotage</h3>
            <h4>la présentation des fonctionnalités doit être simple.</h4>
            <p class="repsonses"> Une demonstration en direct des fonctionalitées vous seras faite</p>
            <h4>la création d’un compte doit être simple et possible depuis un téléphone mobile.</h4>
            <p class="repsonses"> Le prototype utilise flexbox et à été devellopé de façon à s'ajuster sur les écrans de smartphone</p>
            <h4>le profil doit contenir très peu d’informations pour que sa complétion soit rapide.</h4>
            <p class="repsonses"> Pour ce <span title=" Minimum Viable Product">PMV</span> l'utilisateur ne doit contenter que 3 champs, un Email, un mdp, et un Alias </p>
            <h4>la suppression du compte doit être possible.</h4>
             <p class="repsonses">Cette Option est implanté, ainsi que d'autre à titre experimental </p>
            <h4>l’accès à un forum où les salariés publient des contenus multimédias ou du text doit être présent (ex: Reddit).</h4>
            <p class="repsonses"> Ce forum est implanté, il prend la forme d'un "Wall" ou les utilisateurs peuvent poster des .Gif, des images avec ou sans text ou seulement du texte</p>
            <h4>les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés.</h4>
            <p class="repsonses"> l'affichage sur le Wall se fait du plus récent au plus ancien, d'autre alternative sont envisageables</p>
            <h4>le ou la chargé-e de communication Groupomania doit pouvoir modérer les interactions entre les salariés.</h4>
            <p class="repsonses"> Un statut Admin est assignable, celui-ci donne le droit à la modération des postes, en d'autre terme, il/elle peut modifier ou supprimer un post ou un commentaire  </p>
        </div>


        <div id="Database">
          <h3> La base de donnée </h3>
          <p>Pour ce projet, nous gerons la base de donnée avec le language SQL pour transmettre les requêtes, et Mysql pour la gerer</p>
          <h4> structure de la DB </h4>
          
          <img class="imgDemo" src="../../public/Presentation/Capture2.jpg"/>
          <p> 5 tables :</p>
          <ul class="ulDemo" >
          <li >"users" : 8 colonnes (id / email / username / mdp / BIO / createAT / updateAT)</li>
          <li >"posts" : 10 colonnes (id / userId <span>(pointe sur la table "users")</span> / username / title / content / attachement / likes / dislikes / createAT / updateAT)</li>
          <li >"comments" : 7 colonnes (id / <span>postId</span> / <span>userId</span> / username / postReply / createAT / updateAT)</li>
          <li >"likes" : 5 colonnes (id / <span>postId</span> / <span>userId</span> / createAT / updateAT)</li>
          <li >"dislikes" : 5 colonnes (id / <span>postId</span> / <span>userId</span> / createAT / updateAT)</li>
          </ul>

          <p>Au vu de la demande de devellopement "Agil", la structure de la base de donnée à été generé avec Sequelize-cli, permettant de modifier le projet en devellopement de façon assez rapide </p> 
          <p>les fonctions de Sequelize nous permettent de rajouter des colonnes dans les tables ou meme de rajouter des tables de façon trés rapide directement depuis le backend.</p>
        </div> 

        <div id="Backend">
          <h3>Backend</h3> 
          <p class="repsonses">Nous utilisons Node avec Expresse, Multer, accompagné des packages de jwt, bcrypt, cors, ratelimite, helmet pour assurer le minimum de securité dans ce prototype et Sequelize comme ORM (bdd) </p>
          <p>Express modul nous donne des méthodes fiable pour les requétes Http, pour le routing, il est performant et leger.</p>
          <p>jwt va nous fournir une securité pour l'identification sur nos routes, en generant et signant un Token qui sera verifié à chaque requetes.</p>
          <p>bcrypt nous hash et sal le mdp, ce qui permet de ne pas transmettre et stocker de mdp en clair.</p>
          <p>ratelimite va nous fournir une protection en limitant le nombre de requetes que peut effectuer un utilisateur.</p>
          <p>helmet permet de configurer correctement nos headers HTTP, procurant une meilleur securité.</p>
          <p>Sequelize va communiquer avec la base de donnée, nous donnant des méthodes et une gestion simplifié</p>
          <p>Multer va nous permettre de gerer les fichiers uploader</p>

          <p class="info">config.json et la Secret-Key sont versionnés uniquement dans le but de la soutenance.</p>

          <h4>structure du backend</h4>
          <p>Pour ce PMV, j'ai choisi de spliter au maximum les fonctions et les routes afin de pouvoir les isolées plus facilement</p>
          
          <p> Le App.js redirige les requetes vers le repertoir "routes" qui contient les 4 fichiers de routing suivant :
           <div id="liDemo">
          <ul class="ulDemo">
            <li>"routes"<ul>
              <li>user-routes.js</li>
              <li>post-routes.js</li>
              <li>comment-routes.js</li>
              <li>like-routes.js</li>
              </ul> </li>

          </ul>
           <img class="imgDemo4" src="../../public/Presentation/Capture6.jpg"/>
          <img class="imgDemo3" src="../../public/Presentation/Capture5.jpg"/>
          </div>  

          <p> Aprés redirection, les middlewares "userValidation.js" ou "Jwt" (utils) sont appelés pour bloquer toutes requetes non conformes :</p>
          <img class="imgDemo3" src="../../public/Presentation/Capture7.jpg"/>




          
          <p>Une fois passées par le routeur, chaques requetes a sont "controller".js , ceux-ci sont triés par branche :</p>
          <div id="liDemo">
          <ul class="ulDemo">
            <li>"Account"<ul>
              <li>userLogin.js</li>
              <li>userRegister.js</li>
              <li>deleteUser.js</li>
              <li>getAllUser.js</li>
              <li>getOneUser.js</li>
              <li>modifyUser.js</li>
              </ul></li>
            <li>"Post"<ul>
              <li>createPost.js</li>
              <li>deletePost.js</li>
              <li>getAllPost.js</li>
              <li>getOnePost.js</li>
              <li>modifyPost.js</li>
              </ul></li>
            <li>"comment"<ul>
              <li>createComment.js</li>
              <li>deleteComment.js</li>
              <li>modifyComment.js</li>
              </ul></li>
            <li>"like"<ul>
              <li>Like.js</li>
              <li>dislike.js</li>
              </ul></li>
          </ul>
          <img class="imgDemo" src="../../public/Presentation/Capture3.jpg"/>
          <img class="imgDemo2" src="../../public/Presentation/Capture4.jpg"/>

          <ul class="ulDemo"></ul>
          </div>
          <p> Aprés traitement et control de la requête, les controllers communiquent avec la BDD grace aux méthodes fournis par sequelize et renvoient une response au frontend </p> 



        </div>

        <div id="Frontend">
          <h3>Frontend</h3>
          <p>
            Nous utilisons Vue.js dans ces fonctions les plus basiques, avec les modules "vue-router", "vue-simple-alert",  Javascript pour la logique de code et création des élements dans le DOM, html5 pour la structure, avec les cdn de fontAwesome pour les icones et google.font pour les polices.  
          </p>

          <h4>Structure du Frontend</h4>

          <p> meme logique que pour le backend, chaque action que fait l'utilisateur a sont component vue.js afin de pouvoir s'y retrouver plus facilement</p>
          
          <p> Pour ce prototype, nous utilisont 10 views et 13 components</p>
          <div id="Demo4">
            
            <img class="imgDemo"  src="../../public/Presentation/Capture8.jpg"/>
            <img class="imgDemo" src="../../public/Presentation/Capture9.jpg"/>
           </div>


           <div id="rangement"><h4>Home.vue</h4> <h4>User-Connexion_vue</h4> <h4>Post-Wall_view</h4>  </div> 
           
           <div id="Demo4">
            
            <img class="imgDemo" title=" Fonction : Accueil, 1 composant, l'animation est un exemple" src="../../public/Presentation/Capture10.jpg"/>
            <img class="imgDemo" title=" Permet à l'utilisateur de se connecter et de s'enregistrer, 2 composants" src="../../public/Presentation/Capture11.jpg"/>
            <img class="imgDemo" title=" Le WALL, permet de consulter les posts, d'y acceder, et d'en créer. 1 composant" src="../../public/Presentation/Capture12.jpg"/>
           </div>
           
           <div id="rangement"><h4>Post-GetOne_View</h4> <h4>Post-Create_view</h4> <h4>Post-Modify_view</h4>  </div> 
           
           <div id="Demo4">
            
            <img class="imgDemo" title=" affichage d'une publication, permet de liker ou disliker, de poster un commentaire et de consulter les commentaires, 1 composant." src="../../public/Presentation/Capture14.jpg"/>
            <img class="imgDemo" title=" Vue de création de publication, l'ajout de fichier est possible, 1 composant." src="../../public/Presentation/Capture13.jpg"/>
            <img class="imgDemo" title=" vue de modification de la publication, 1 composant" src="../../public/Presentation/Capture15.jpg"/>
           </div>

          <div id="rangement"><h4>Comment-Create_View</h4> <h4>Comment-Modify_View</h4></div> 

           <div id="Demo4">
            
            <img class="imgDemo" title=" permet de creer un commentaire, 1 composant." src="../../public/Presentation/Capture16.jpg"/>
            <img class="imgDemo" title=" permet la modification du commentaire posté, 1 commposant." src="../../public/Presentation/Capture17.jpg"/>
           </div>
          
          <div id="rangement"><h4>User-Account_View</h4> <h4>User-Modify-Modify_View</h4></div> 

           <div id="Demo4">
            
            <img class="imgDemo" title=" affiche les informations relatives à l'utilisateur,  permet leurs modifications, la suppression du profil, et un exemple de fonction qui peuvent etre implantées, la suppressions de toutes les publications de l'utilisateur. 1 composant. " src="../../public/Presentation/Capture18.jpg"/>
            <img class="imgDemo" title="" src="../../public/Presentation/Capture19.jpg"/>
           </div>





        </div>

        <h3> <a href="#Retour"> <span class="color">Démonstration ----></span></a> </h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
H3{
  margin: 70px;
  background-color: rgb(24,107,99);
  color : white;
}
H4{
  margin: 30px;
}
#NavDemo{
  border: 2px solid rgb(24,107,99);
  display: flex;
  justify-content: space-around;
  a{
    text-decoration: none;
  }

  margin-top: 35px;
  :hover{
    background-color: rgb(24,107,99) ;
    color : white ;
  }
}
.color {
  color :white
}

.ulDemo {
  text-align: start;
}
#liDemo{
  display: flex;
  justify-content: space-around;
  margin-top: 50px ;
  margin-bottom: 30px;
  border: solid 1px rgb(24,107,99);
  img{
    margin-top:100px;
    height: 100px;
    &.imgDemo2 {
      height: 250px;
    }
    &.imgDemo3 {
      margin-top : 0px;
      height: 130px;
    }
    &.imgDemo4 {
      margin-top : 0px;
      height: 250px;
    }
  }
}
#Demo4{
  display: flex;
  justify-content: center;
  
  
  border: solid 1px rgb(24,107,99);
  .Demo4{
    width: 300px;
    margin-right: 50px;
  }
  img{
    width: 300px;
  }
}

#rangement {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>



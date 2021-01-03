<template>
  <div class="mt-5">


  <div class="myprofil mb-5 col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
    <div class="text-left d-block d-sm-flex">
      <img class="mb-3 mb-sm-0" id="photo" src="../../svg/user-dev-pp.svg" :alt="listUser[0].tri.nom">
      <div class="mb-3 mb-sm-0 ml-0 ml-md-5 ml-sm-3 text-left" >
        <h2>{{ listUser[0].tri.nom}}</h2>
        <p class="m-1">Lieu : <span>{{ listUser[0].lieu }}</span></p>
        <p class="m-1" >Activité : <span>{{ listUser[0].activite }}</span></p>
        <p class="m-1">Spécialité : <span>{{ listUser[0].specialite }}</span></p>
        <p class="m-1">Disponibilité : <span>Disponible</span></p>
        <p class="m-1">Année : <span>{{ listUser[0].tri.promo }}</span></p>
      </div>
      <div class="ml-auto  mt-auto mb-auto">
        <router-link to="/modify"><button class="btn text-primary ">Modifier mon profil <img id="icon" class="ml-2 mr-auto"
                                                                                             src="../../svg/arrow-toggle.svg" alt="arrow"></button>
        </router-link>
      </div>
    </div>

    <p class="mt-3 text-left"> {{ listUser[0].bio }}
    </p>
  </div>

    <MyProject/>
    <MonParcours/>

  </div>
</template>

<script>
import MyProject from "@/components/layout/profil/MyProject";
import MonParcours from "@/components/layout/profil/MonParcours";
export default {
  name: 'MyProfil',
  props: {
    msg: String
  },
  components : {
    MyProject,
    MonParcours
  },
  data(){
    return{
      listStage:[
        {
          "id": "1",
          "img": "https://s3-eu-west-1.amazonaws.com/sortlist-core-api/cVM9B6wz5AFf4LgedzMX8ZTN",
          "nom": "Pure Illusion Lyon",
          "lieu": "Lyon",
          "annee": "2021",
        },
        {
          "id": "2",
          "img": "https://media-exp1.licdn.com/dms/image/C560BAQE-dCojUHjHqA/company-logo_200_200/0/1549621104751?e=2159024400&v=beta&t=hp69N8yI6Bi1FggtVP1plHglhU3NFz-pabrVhf8w9XY",
          "nom": "Numérica",
          "lieu": "Montbéliard",
          "annee": "2021",
        },
      ],
      listEmplois: [{
        "id": "1",
        "img": "https://s3-eu-west-1.amazonaws.com/sortlist-core-api/cVM9B6wz5AFf4LgedzMX8ZTN",
        "nom": "Pure Illusion Lyon",
        "lieu": "Lyon",
        "annee": "2022",
        "poste": "Développeur front-end"

      }
      ],
      listParcours: [
        {
          "id": "2",
          "img": "https://pbs.twimg.com/profile_images/1118495722058452993/uXevynW7.png",
          "nom": "Gobelins Développement web",
          "lieu": "Annecy",
          "annee": "2021-2022",
        },
        {"id": "1",
          "img": "https://pbs.twimg.com/profile_images/617981571564445696/F0GYCync_400x400.png",
          "nom": "DUT MMI",
          "lieu": "Montbéliard",
          "annee": "2019-2021",
          }
      ],


    listUser:
    [
      {
        "id": "0",
        "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
        "msg": "euh bah t\\'incrémentes jamais ton j, genre t\\'as jamais j++ si ? donc dans ce cas  ...",
        "lieu": "Montbéliard",
        "activite": "Étudiant",
        "specialite": "Développement",
        "bio" : "Voici ma bio.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequatur dignissimos doloremque eius eligendi error est exercitationem illo incidunt,",
        "tri": {
          "nom": "Tristan Seclet",
          "promo": 2021
        }
      },
      {
        "id": "1",
        "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
        "msg": "Bonjour je suis Jean",
        "lieu": "Belfort",
        "activite": 2,
        "specialite": 3,
        "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        "tri": {
          "nom": "Jean Dupont",
          "promo": 2010
        }
      },
      {
        "id": "2",
        "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
        "msg": "Bonjour je suis Adrien",
        "lieu": "Lyon",
        "activite": 1,
        "specialite": 1,
        "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        "tri": {
          "nom": "Adrien Bouteiller",
          "promo": 2021
        }
      },
      {
        "id": "3",
        "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
        "msg": "Bonjour je suis Sergio",
        "lieu": "Valentigney",
        "activite": 1,
        "specialite": 4,
        "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        "tri": {
          "nom": "Sergio Gomez",
          "promo": 2021
        }
      },
      {
        "id": "4",
        "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
        "msg": "Bonjour je suis Lionel",
        "lieu": "Paris",
        "activite": 3,
        "specialite": 3,
        "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        "tri": {
          "nom": "Lionel Armand",
          "promo": 2011
        }
      },
      {
        "id": "5",
        "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
        "msg": "Bonjour je suis David",
        "lieu": "Strasbourg",
        "activite": 1,
        "specialite": 3,
        "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
        "tri": {
          "nom": "David Rivera",
          "promo": 2022
        }
      }
    ]
    }
  },
}
</script>

<style scoped>
#parcours{
  margin-top: 5%;
}
.imgparcours{
  box-shadow: 5px 5px 0px #e62450;
  margin-left: 10px;
  margin-right: 20px;
  width: 84px;
  height: 84px;
}
p>span{
  font-weight: lighter;
}
button {
  border:1px solid #E62450;
  font-weight: bold;
}
button #icon{
  width: 15px;
  transform: rotate(90deg);
}
#photo{
  width: 15%;
}/*SM*/
@media (max-width: 576px ) {
  h2{
    position: absolute;
    font-size: 1.6rem;
    /*left: 125px;*/
    /*top:15px;*/
    top: 2%;
    left: 25%;

  }
  #photo{
    width: 20%;
  }
  
}

@media (max-width: 768px ){
  #photo {
    width: 20%;
  }
}
</style>
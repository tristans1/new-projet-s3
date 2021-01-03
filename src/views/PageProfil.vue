<template>
  <div>
    <TheNavigation class="d-none d-sm-block" style="z-index: 11"/>
    <TheNavHome class="d-block d-sm-none"/>
    <MenuMobil class="d-block d-sm-none" style="z-index: 10"/>
    <Space class="d-block d-sm-none" style="z-index: 1"/>




  <div class="myprofil col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-3" >
    <div class="text-left d-block d-sm-flex">
      <img class="mb-3 mb-sm-0" id="photo" src="../components/svg/user-dev-pp.svg" :alt="listUser[3].tri.nom">
      <div class="mb-3 mb-sm-0 ml-0 ml-md-5 ml-sm-3 text-left">
        <h2>{{ listUser[3].tri.nom}}</h2>
        <p class="m-1">Lieu : <span>{{ listUser[3].lieu }}</span></p>
        <p class="m-1">Activité : <span>{{ listUser[3].activite }}</span></p>
        <p class="m-1">Spécialité : <span>{{ listUser[3].specialite }}</span></p>
        <p class="m-1">Disponibilité : <span>Disponible</span></p>
        <p class="m-1">Année : <span>{{ listUser[3].tri.promo }}</span></p>
      </div>
      <div class="ml-auto  mt-auto mb-auto">

      </div>
    </div>

    <p class="mt-3 text-left"> {{ listUser[3].bio }}
    </p>




  </div>
  <MyProject/>
  <MonParcours/>
    <Space class="d-block d-sm-none"/>
  </div>
</template>

<script>
import TheNavHome from '@/components/layout/menu/TheNavHome.vue'
import TheNavigation from '@/components/layout/menu/TheNavigation'
import MenuMobil from '@/components/layout/menu/MenuMobil'
import Space from "@/components/layout/menu/Space";
import MyProject from "@/components/layout/profil/MyProject";

import MonParcours from "@/components/layout/profil/MonParcours";
export default {
name: "PageProfil",
  props : ['user'],
  components :{
  MonParcours,
    MyProject,
    Space,
    TheNavHome,
    MenuMobil,
    TheNavigation
  },
  data(){
  return {
    activeImg : '',
    listUser:
        [
          {
            "id": "0",
            "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
            "msg": "euh bah t\\'incrémentes jamais ton j, genre t\\'as jamais j++ si ? donc dans ce cas  ...",
            "lieu": "Montbéliard",
            "activite": "Étudiant",
            "specialite": "Développement",
            "bio": "Voici ma bio.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
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
#ajoutbtn{
  display: none;
}

</style>
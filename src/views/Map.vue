<template>
  <div class="map">
    <TheNavigation class="d-none d-sm-block" style="z-index: 11"/>
    <TheNavHome class="d-block d-sm-none"/>
    <MenuMobil class= "d-block d-sm-none" style="z-index: 10"/>

    <GmapMap
        v-bind:center="{lat:47.837299, lng:2.353695}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 90vh;"
        ref="mapRef"
        :options="{
          zoomControl: false,
          streetViewControl: false,
          scaleControl: false,
           }"
    >

    <GmapMarker
        v-bind:key="listUser.id"
        v-for="(listUser) in listUser"
        v-bind:position="listUser.position"
        v-bind:clickable="true"
        :draggable="false"
        @click="center=listUser.position"
    />
    </GmapMap>

    <Messagerie/>

  </div>
</template>

<script>
// @ is an alias to /src
import TheNavigation from '@/components/layout/menu/TheNavigation.vue'
import Messagerie from '@/components/layout/MessagerieRapide.vue'
import TheNavHome from '@/components/layout/menu/TheNavHome.vue'
import MenuMobil from "@/components/layout/menu/MenuMobil";

export default {
  name: 'Map',
  components: {
    TheNavigation,
    TheNavHome,
    Messagerie,
    MenuMobil
  },

  mounted() {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 47.495602, lng: 4.805290})
    })

      document.body.style.overflow = "hidden";

  },

  beforeRouteLeave(to, from, next) {
    document.body.style.overflow = "auto";
    next()
  },
  data() {
    return {
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
              },
              "position": {
                "lat": 47.5167,
                "lng": 6.8
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
              },
              "position": {
                "lat": 47.6333,
                "lng": 6.8667
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
              },
              "position": {
                "lat": 45.75,
                "lng": 4.85
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
              },
              "position": {
                "lat": 47.4667,
                "lng": 6.8333
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
              },
              "position": {
                "lat": 48.8534,
                "lng": 2.3488
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
              },
              "position": {
                "lat": 48.5833,
                "lng": 7.75
              },
            }
          ]

    };
  }

}


</script>

<style scoped>


</style>


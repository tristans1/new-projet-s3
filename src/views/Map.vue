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
          :key="index"
          v-for="(m, index) in listUser"
          :position="m.position"
          @click="toggleInfoWindow(m, index)"
          :option="MarkerOptions"
      />
      <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </GmapInfoWindow>
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
  methods:{
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent: function (marker) {
      return (
          `<div class="mt-3">
          <div>
          <div class="d-flex align-items-center">
             <img style="width: 30px" class="mr-2" src="${marker.img}" alt="${marker.tri.nom}">
             <h4 class="ml-auto"> ${marker.tri.nom}</h4>
          </div>

          <div class="text-left">

        <div class="m-2"><span style="font-weight: bold;">Lieu:  </span>
          ${marker.lieu}
          <br>
        </div>

        <div class="m-2"><span style="font-weight: bold;">Spécialité:  </span>
          ${marker.specialite}
          <br>
        </div>

        <div class="m-2"><span style="font-weight: bold;">Activité:  </span>
          ${marker.activite}
          <br>
        </div>
        <div class="m-2"><span style="font-weight: bold;">Promo:  </span>
          ${marker.tri.promo}
          <br>
      </div>

            <router-link class="align-self-end" to="/profil">
            <button class="align-self-end mt-3 pl-5 pr-5 btn btn-primary ml-auto mr-auto mb-3">Voir le profil</button>
              </router-link>

        </div>
                  </div>
        </div>`);
    },

  },

  beforeRouteLeave(to, from, next) {
    document.body.style.overflow = "auto";
    next()
  },
  data() {
    return {
      map: null,
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      fullscreenControl: false,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      MarkerOptions: {
        zIndex: 999999,
        opacity: 0.2

      },







/*      markers : this.marker*/
          listUser:
          // eslint-disable-next-line no-unexpected-multiline
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
              "activite": "Communication",
              "specialite": "Étudiant",
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
              "activite": "Freelance",
              "specialite": "Développpement",
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
              "activite": "Étudiant",
              "specialite": "Graphisme / Design",
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
              "activite": "Employé",
              "specialite": "Audiovisuel",
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
              "activite": "Étudiant",
              "specialite": "Communication",
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
  },


}


</script>

<style scoped>


</style>


<template>
  <div class="map">
    <TheNavigation class="d-none d-sm-block"/>
    <TheNavHome class="d-block d-sm-none"/>
    <MenuMobil class= "d-block d-sm-none" style="z-index: 1"/>

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
          v-bind:key="index"
          v-for="(m, index) in markers"
          v-bind:position="m.position"
          v-bind:clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GmapMap>

    <Messagerie/>

  </div>
</template>

<script>
// @ is an alias to /src
import TheNavigation from '@/components/layout/TheNavigation.vue'
import Messagerie from '@/components/layout/Messagerie.vue'
import TheNavHome from '@/components/layout/TheNavHome.vue'
import MenuMobil from "@/components/layout/MenuMobil";

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

      document.querySelector("#app").style.overflow = "hidden";

  },

  beforeRouteLeave(to, from, next) {
    document.querySelector("#app").style.overflow = "auto";
    next()
  },
  data() {
    return {
      markers: [
        {position: {lat: 48.837299, lng: 2.353695},},
        {position: {lat: 47.495602, lng: 6.805290}},
        {position: {lat: 45.739503, lng: 4.817517}},
        {position: {lat: 47.223391, lng: -1.544413}},
        {position: {lat: 48.682978, lng: 6.161145}},
        {position: {lat: 47.357118, lng: 7.100343}}

      ]
    };
  }

}


</script>

<style scoped>


</style>


<template>
  <div class="map">
    <TheNavigation />
    
    <GmapMap
  v-bind:center="{lat:47.837299, lng:2.353695}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 100%; height: 90vh;"
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

<Messagerie />

  </div>
</template>

<script>
// @ is an alias to /src
import TheNavigation from '@/components/layout/TheNavigation.vue'
import Messagerie from '@/components/layout/Messagerie.vue'

export default {
  name: 'About',
  components: {
    TheNavigation, 
    Messagerie
  }, 
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
 
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 47.495602, lng: 6.805290})
    })
  }, 
  data(){
      return {
          center: {lat:47.837299, lng:2.353695},
      markers: [ 
          {position: { lat: 48.837299, lng: 2.353695}, },
          {position: { lat: 47.495602, lng: 6.805290}  },
          {position: { lat: 45.739503, lng: 4.817517}  },
          {position: { lat: 47.223391, lng: -1.544413} },
          {position: { lat: 48.682978, lng:  6.161145} }

      ]
      };
  }

}


</script>

<style  scoped>

</style>


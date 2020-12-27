<template>
  <div class="home">
    <TheNavHome />
    <HomeConnect />
    <MenuMobil class="d-block d-sm-none" />

  </div>
</template>

<script>
// @ is an alias to /src
import TheNavHome from '@/components/layout/menu/TheNavHome.vue'
import HomeConnect from "@/components/HomeConnect.vue"
import MenuMobil from "@/components/layout/menu/MenuMobil";

export default {
  name: 'Home',
  components: {
    TheNavHome, 
    HomeConnect,
    MenuMobil
  },
  /*beforeCreate: function () {
    document.querySelector("#app").style.overflow = "hidden";
  },*/
  mounted() {
    document.body.style.overflow = "hidden";
  },
  beforeRouteLeave(to, from, next) {
    document.body.style.overflow = "auto";
    next()
  },
}
</script>

<style lang="scss">
</style>
<template>
  <div class="home">
    <TheNavHome />
    <HomeConnect />
    <MenuMobil class="d-block d-sm-none" />

  </div>
</template>

<script>
// @ is an alias to /src
import TheNavHome from '@/components/layout/TheNavHome.vue'
import HomeConnect from "@/components/HomeConnect.vue"
import MenuMobil from "@/components/layout/MenuMobil";

export default {
  name: 'Home',
  components: {
    TheNavHome, 
    HomeConnect,
    MenuMobil
  },
  beforeCreate: function () {
    document.body.style.overflow = "hidden";
  }
}
</script>

<style lang="scss">
</style>
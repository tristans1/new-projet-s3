<template>
  <div class="search">
    <TheNavigation class="d-none d-sm-block" style="z-index: 10"/>
    <TheNavHome class="d-block d-sm-none" style="z-index: 11"/>
    <MenuMobil class="d-block d-sm-none" style="z-index: 12"/>
    <Searchbar style="z-index: 2"/>
    <Space class="d-block d-sm-none" style="z-index: 1"/>

  </div>
</template>

<script>
// @ is an alias to /src
import TheNavHome from '@/components/layout/menu/TheNavHome.vue'
import TheNavigation from '@/components/layout/menu/TheNavigation'
import MenuMobil from '@/components/layout/menu/MenuMobil'
import Searchbar from "@/components/layout/Searchbar";
import Space from "@/components/layout/menu/Space";

export default {
  name: 'Search',
  components: {
    Searchbar,
    TheNavHome,
    TheNavigation,
    MenuMobil,
    Space
  }
}
</script>

<style scoped>

</style>


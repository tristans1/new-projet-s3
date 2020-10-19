<template>
  <div class="search">
    <TheNavigation class="d-none d-sm-block" style="z-index: 1"/>
    <TheNavHome class="d-block d-sm-none" style="z-index: 1"/>
    <MenuMobil class="d-block d-sm-none" style="z-index: 1"/>
    <Searchbar style="z-index: 2"/>
    <Space class="d-block d-sm-none" style="z-index: 1"/>

  </div>
</template>

<script>
// @ is an alias to /src
import TheNavHome from '@/components/layout/TheNavHome.vue'
import TheNavigation from '@/components/layout/TheNavigation'
import MenuMobil from '@/components/layout/MenuMobil'
import Searchbar from "@/components/layout/Searchbar";
import Space from "@/components/layout/Space";

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


<template>
  <div class="search">
    <TheNavigation class="d-none d-sm-block"/>
    <TheNavHome class="d-block d-sm-none"/>
    <MenuMobil class="d-block d-sm-none" style="z-index: 1"/>
    <p>Hello world</p>

  </div>
</template>

<script>
// @ is an alias to /src
import TheNavHome from '@/components/layout/TheNavHome.vue'
import TheNavigation from '@/components/layout/TheNavigation'
import MenuMobil from '@/components/layout/MenuMobil';

export default {
  name: 'Search',
  components: {
    TheNavHome,
    TheNavigation,
    MenuMobil
  }
}
</script>

<style scoped>

</style>


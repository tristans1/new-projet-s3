<template>
  <div class="search">
    <TheNavigation class="d-none d-sm-block" style="z-index: 1"/>
    <TheNavHome class="d-block d-sm-none" style="z-index: 1"/>
    <MenuMobil class="d-block d-sm-none" style="z-index: 1"/>

  </div>
</template>

<script>
// @ is an alias to /src
import TheNavHome from '@/components/layout/TheNavHome.vue'
import TheNavigation from '@/components/layout/TheNavigation'
import MenuMobil from '@/components/layout/MenuMobil'

export default {
  name: 'Profil',
  components: {
    TheNavHome,
    TheNavigation,
    MenuMobil
  }
}
</script>

<style scoped>

</style>


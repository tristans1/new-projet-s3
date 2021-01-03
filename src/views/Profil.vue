<template>
  <div class="search">
    <TheNavigation class="d-none d-sm-block" style="z-index: 1"/>
    <TheNavHome class="d-block d-sm-none" style="z-index: 1"/>
    <MenuMobil class="d-block d-sm-none" style="z-index: 1"/>
    <MyProfil/>
    <div class="d-none d-md-block" style="position: fixed; left: 10px; width: 70px; bottom: 3%">
      <img class="mb-0" src="@/components/svg/mouse.svg" alt="mouse" style=" width: 70px;">
      <img class=" arrow mt-0" src="@/components/svg/arrow-toggle.svg" alt="arrow" style="width: 20px"><br/>
      <img class="arrow mt-0" src="@/components/svg/arrow-toggle.svg" alt="arrow" style="width: 20px">


    </div>

    <Space class="d-block d-sm-none" style="z-index: 1"/>



  </div>
</template>

<script>
// @ is an alias to /src
import TheNavHome from '@/components/layout/menu/TheNavHome.vue'
import TheNavigation from '@/components/layout/menu/TheNavigation'
import MenuMobil from '@/components/layout/menu/MenuMobil'
import MyProfil from "@/components/layout/profil/MyProfil";
import Space from "@/components/layout/menu/Space";

export default {
  name: 'Profil',
  components: {
    TheNavHome,
    TheNavigation,
    MenuMobil,
    MyProfil,
    Space
  }
}
</script>

<style scoped>
.arrow{
  transform: rotate(180deg);
}

</style>


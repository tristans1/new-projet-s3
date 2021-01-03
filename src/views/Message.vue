<template>
<div id="message">
  <TheNavigation class="d-none d-sm-block" style="z-index: 11"/>
  <TheNavHome class="d-block d-sm-none" style="z-index: 12"/>
  <MenuMobil class="d-block d-sm-none" style="z-index: 10"/>
  <div style="z-index: 0">
    <MyMessage class="d-block"/>

  </div>

  <Space class="d-block d-sm-none"/>


</div>
</template>

<script>
import TheNavHome from "@/components/layout/menu/TheNavHome";
import TheNavigation from "@/components/layout/menu/TheNavigation";
import MenuMobil from "@/components/layout/menu/MenuMobil";
import MyMessage from "@/components/layout/MyMessage";
import Space from "@/components/layout/menu/Space";

export default {
name: "Message",
  components : {
  TheNavigation,
  TheNavHome,
  MenuMobil,
  MyMessage,
  Space
  },
}
</script>

<style scoped>
</style>
<template>
  <div class="home">
    <TheNavHome />
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <HomeConnect />
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavHome from '@/components/layout/TheNavHome.vue'
import HomeConnect from "@/components/HomeConnect.vue"

export default {
  name: 'Home',
  components: {
    TheNavHome, 
    HomeConnect
  },
  beforeCreate: function () {
    document.body.style.overflow = "hidden";
  }
}
</script>

<style lang="scss">
</style>
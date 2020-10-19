<template>
  <div id="menuMobil" class="align-content-center">

    <ul class="d-flex">
      <li class="m-auto">
        <router-link  to="/search"><img src="../svg/search-icon.svg" alt="recherche" /></router-link>
      </li>
      <li class="m-auto">
        <router-link  to="/"><img src="../svg/paper-plane-icon.svg" alt="message" /></router-link>
      </li>
      <li class="m-auto">
        <router-link  to="/map"><img src="../svg/map-icon-2.svg" alt="carte" /></router-link>
      </li>
      <li class="m-auto">
        <router-link  to="/profil"><img src="../svg/user-icon.svg" alt="profil" /></router-link>
      </li>
      <li class="m-auto">
        <router-link  to="/"><img src="../svg/settings-icon-3.svg" alt="paramètres" /></router-link>
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'MenuMobil',
  props: {
    msg: String
  }
}
</script>
<style scoped>
#menuMobil{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 54px;
  background: #414141;
}
ul{
  margin-top: 14px;
}
img{
  color: white;
  max-width: 100%;
  width: 25px;
}

</style>
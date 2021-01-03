<template>
    <div>

      <div class="navbar bg-primary">
        <div style="width: 120px" class="navbar-brand"><img id="logo" src="../../svg/logo_svg_alummi_blanc.svg" alt="logo"/></div>
       <div>
        <b-link class="nav-item ml-3"  to="/map" exact>Carte</b-link>
        <b-link class="nav-item ml-3" to="/message" exact>Messages</b-link>
        <b-link class="nav-item ml-3" to="/search" exact>Recherche</b-link>
        <b-link class="nav-item ml-3" to="/profil" exact>Profil</b-link>
        <b-link class="nav-item ml-3" @click="flipMenu">Paramètres</b-link>
      </div>
      </div>

      <div id="params" v-bind:class="[volet ? 'open-volet' : 'close-volet']">
        <ul class="text-left ml-4 mt-4">
          <h6 class="text-white font-weight-bold mb-4">Paramètres</h6>
          <li class="mb-4"><router-link class="text-white" to="/cookies">
            <img  class="mr-2" style="width: 20px" src="../../svg/params/lock-solid.svg" alt="">
            Confidentialité
            <img  class="arrow-w" style="width: 20px" src="../../svg/white-arrow.svg" alt=""></router-link></li>
          <li class="mb-4"><a class="text-white" href="">
              <img  class="mr-2" style="width: 20px" src="../../svg/params/shield-svgrepo-com.svg" alt="">
            Sécurité
            <img  class="arrow-w" style="width: 20px" src="../../svg/white-arrow.svg" alt=""></a></li>
          <li class="mb-4"><a class="text-white" href="">
            <img  class="mr-2" style="width: 20px" src="../../svg/params/user-circle-solid.svg" alt="">
            Compte
            <img  class="arrow-w" style="width: 20px" src="../../svg/white-arrow.svg" alt=""></a></li>
          <li class="mb-4"><a class="text-white" href="">
            <img  class="mr-2" style="width: 20px" src="../../svg/params/letter-svgrepo-com.svg" alt="">
            Mot de passe
            <img  class="arrow-w" style="width: 20px" src="../../svg/white-arrow.svg" alt=""></a></li>
          <li class="mb-4"><a class="text-white" href="">
            <img  class="mr-2" style="width: 20px" src="../../svg/params/help-web-button-svgrepo-com.svg" alt="">
            Aide
            <img  class="arrow-w" style="width: 20px" src="../../svg/white-arrow.svg" alt=""></a></li>
          <li class="mb-4"><router-link class="text-white" to="/cgu">
            <img  class="mr-2" style="width: 20px" src="../../svg/params/information-help-svgrepo-com.svg" alt="">
            Conditions d'utilisations
            <img  class="arrow-w" style="width: 20px" src="../../svg/white-arrow.svg" alt=""></router-link></li>
          <li class="mb-4">
            <router-link class="text-white" to="/mentions">
              <img class="mr-2" style="width: 20px" src="../../svg/params/information-help-svgrepo-com.svg" alt="">
              Mentions légales
              <img class="arrow-w" style="width: 20px" src="../../svg/white-arrow.svg" alt=""></router-link>
          </li>


        </ul>

        <router-link to="/">
          <button id="deconnexion" class="btn-primary">Déconnexion</button>
        </router-link>
      </div>
    </div>




</template>

 
 <script>
export default {
  name: 'TheNavigation',
  props: {
    msg: String
  },
  data() {
    return {
      volet: false
    }
  },
  methods: {
    flipMenu: function () {
      this.volet = !this.volet;
    },
  },
}
</script>

<style scoped>
#deconnexion{
  position: relative;
  top: 250px;
  border-radius: 20px;
  border:10px solid #e62450;
}
#params{
  position: absolute;
  bottom: 0;
  right: 0;
  top: 100%;
  background: #414141;
  width: 300px;
  height: 100vh;
}
.open-volet {
  display: block;
  right: 0;
  transition: all 0.5s ease;
  overflow: hidden;
}

.close-volet {
  display: block;
  overflow: hidden;
  right: -300px !important;
  transition: all 0.5s ease;
}
#logo{
  max-width: 80%;

}

div{
  position: sticky;
  top: 0;
}
.navbar-brand{
  width: 120px;
}
/*new navbar with router*/
.nav-item{
  text-decoration: none;
  opacity: 0.5;
  color: white;
}
.nav-item:hover{
  opacity: 0.7;
}
.router-link-active,
.router-link-active:hover{
  opacity: 1;
}

.arrow-w{
  position: absolute;
  right: 10px;
}

</style>
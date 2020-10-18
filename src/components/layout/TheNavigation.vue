<template>
    <div>
  <!--<b-navbar type="dark" variant="primary">
    <b-navbar-brand href="#"> <img id="logo" src="../svg/logo_svg_alummi_blanc.svg" alt="logo"/>  </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
         <b-nav-item href="#">Messages</b-nav-item>
         <b-nav-item href="/search">Recherche</b-nav-item>
         <b-nav-item href="/profil">Profil</b-nav-item>
         <b-nav-item href="#">Paramètres</b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>-->

      <div class="navbar bg-primary">
        <div style="width: 120px" class="navbar-brand"><img id="logo" src="../svg/logo_svg_alummi_blanc.svg" alt="logo"/></div>
       <div>
        <b-link class="nav-item ml-3"  to="/map" exact>Carte</b-link>
        <b-link class="nav-item ml-3" to="/" exact>Messages</b-link>
        <b-link class="nav-item ml-3" to="/search" exact>Recherche</b-link>
        <b-link class="nav-item ml-3" to="/profil" exact>Profil</b-link>
        <b-link class="nav-item ml-3" to="/" exact>Paramètres</b-link>
      </div>
      </div>
    </div>




</template>

 
 <script>
export default {
  name: 'TheNavigation',
  props: {
    msg: String
  }
}
</script>

<style scoped>
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

</style>
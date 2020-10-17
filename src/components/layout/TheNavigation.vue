<template>
    <div>
  <b-navbar type="dark" variant="primary">
    <b-navbar-brand href="#"> <img id="logo" src="../svg/logo_svg_alummi_blanc.svg" alt="logo"/>  </b-navbar-brand>
   

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
         <b-nav-item href="#" active>Carte</b-nav-item>
         <b-nav-item href="#">Messages</b-nav-item>
         <b-nav-item href="#">Recherche</b-nav-item>
         <b-nav-item href="#">Profil</b-nav-item>
         <b-nav-item href="#">Paramètres</b-nav-item>
      </b-navbar-nav>

        <!--<b-nav-item-dropdown right>-->
          <!-- Using 'button-content' slot -->
          <!--<template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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

</style>
<template>
    <div>
  <b-navbar type="dark" variant="primary">
    <b-navbar-brand href="#"><img id="logo" src="../svg/logo_svg_alummi_blanc.svg" alt="logo"></b-navbar-brand>
  </b-navbar>
</div>
</template>

 
 <script>
export default {
  name: 'TheNavHome',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#logo{
  width: 40%;
  max-width: 40%;
}
div{
  position: sticky;
  top: 0;
}
</style>
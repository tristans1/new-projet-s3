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
  width: 80%;
  max-width: 80%;
}
div{
  position: sticky;
  top: 0;
}

.navbar-brand {
  width: 120px;
}
/*SM navbar responsive*/
@media (max-width: 576px) {
  .navbar-brand{
    width: 100%;
  }
  #logo{
    width: 22%;
  }
}
</style>
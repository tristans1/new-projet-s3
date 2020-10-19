<template>
  <div class="myprofil col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-3">
    <div class="text-left d-block d-sm-flex">
      <img class="mb-3 mb-sm-0" id="photo" src="../svg/user-dev-pp.svg" alt="Tristan Seclet">
      <div class="mb-3 mb-sm-0 ml-0 ml-md-5 ml-sm-3 text-left" >
        <h2>Tristan <br class="d-block d-md-none"/> Seclet</h2>
        <p class="m-1">Lieu : <span>Montbéliard</span></p>
        <p class="m-1">Activité : <span>Étudiant</span></p>
        <p class="m-1">Spécialité : <span>Développement</span></p>
        <p class="m-1">Disponibilité : <span>Disponible</span></p>
      </div>
      <div class="ml-auto  mt-auto mb-auto">
        <button class="btn text-primary ">Modifier mon profil <img  id="icon" class="ml-2 mr-auto"
                                                                  src="../svg/arrow-toggle.svg" alt="arrow"></button>
      </div>
    </div>

    <p class="mt-3 text-left"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
       invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
       et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyProfil',
  props: {
    msg: String
  }
}
</script>

<style scoped>
p>span{
  font-weight: lighter;
}
button {
  border:1px solid #E62450;
  font-weight: bold;
}
button #icon{
  width: 15px;
  transform: rotate(90deg);
}
#photo{
  width: 15%;
}/*SM*/
@media (max-width: 576px ) {
  h2{
    position: absolute;
    font-size: 1.6rem;
    /*left: 125px;*/
    /*top:15px;*/
    top: 2%;
    left: 25%;

  }
  #photo{
    width: 20%;
  }
  
}

@media (max-width: 768px ){
  #photo {
    width: 20%;
  }
}
</style>
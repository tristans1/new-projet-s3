<template>
  <div id="projet" class="mt-5 bg-secondary col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-3 d-flex">
    <div><img src="../img/projet.png" alt="projet 1"></div>
    <div class=" ml-5 mr-5"><h3 class=" text-left text-primary">Titre du projet</h3>
      <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum ea numquam porro qui velit voluptate.
        Ab aliquam asperiores doloremque impedit in, ipsum necessitatibus non quia quod soluta! Modi, sit.</p>
      <button class="mt-3 pl-5 pr-5 btn btn-primary">Voir plus</button>
    </div>
    <!--<button   id="left"><img src="../svg/arrow-toggle.svg" alt="arrow-left"> </button>
    <button id="right"><img src="../svg/arrow-toggle.svg" alt="arrow-right"></button>-->
  </div>
</template>

<script>
export default {
  name: 'MyProject',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#projet{
  padding: 33px;
}
img{
  width: 400px;
}


</style>
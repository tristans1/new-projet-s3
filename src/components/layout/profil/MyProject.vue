<template>
  <div class="mt-5 mb-5 col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">

    <div class="mt-5 d-flex ">
    <h5>Mes projets</h5>
      <router-link class="ml-auto" to="/addprojet">
        <button id="ajoutbtn" class="btn text-primary ">Ajouter un projet <img id="icon" class="ml-2 mr-auto"
                                                                 src="../../svg/arrow-toggle.svg" alt="arrow"></button>
      </router-link>


    </div>

  <div v-for="projet in listeProjet" :key="projet.id" id="projet" class="mt-5 bg-secondary  d-block d-md-flex">
    <div><img style="border: 15px solid white" :src="projet.img" :alt="projet.titre"></div>
    <div class="ml-1 mr-1 ml-md-3 mr-md-3 ml-lg-5 mr-lg-5 ">
      <h3 class=" text-left text-primary">{{ projet.titre }}</h3>
      <p class="text-left mt-4">{{ projet.description}}</p>
      <button class="mt-3 pl-5 pr-5 btn btn-primary"><a :href="projet.lien">Voir plus</a></button>
    </div>
  </div>



  </div>
</template>

<script>
class Projet {
  constructor(titre, img, description, lien, id) {
    this.titre = titre;
    this.img = img;
    this.description = description;
    this.lien = lien;
    this.id = id;
  }
}
export default {
  name: 'MyProject',
  props: {
    msg: String
  },
  data(){
    return {
      listeProjet: [
        new Projet(
            'Premier projet',
            'https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now.png',
            'Premier projet de semestre au MMI, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum ea numquam porro qui velit voluptate.\n' +
            '        Ab aliquam asperiores doloremque impedit in, ipsum necessitatibus non quia quod soluta! Modi, sit.',
            'https://tristanseclet.com',
            '1'
        ),
        new Projet(
            'Second projet',
            'https://unblast.com/wp-content/uploads/2020/04/Free-App-Screen-Mockup.jpg',
            'Projet de second semestre au MMI, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum ea numquam porro qui velit voluptate.\n' +
            '        Ab aliquam asperiores doloremque impedit in, ipsum necessitatibus non quia quod soluta! Modi, sit.',
            'https://tristanseclet.com',
            '2'
        ),

      ]
    }
  }
}
</script>

<style scoped>

button {
  border: 1px solid #E62450;
  font-weight: bold;
}

button #icon {
  width: 15px;
  transform: rotate(90deg);
}

#projet{
  padding: 33px;
}
img{
  width: 400px;
}
button>a{
  color: white;
  text-decoration: none;
}

button > a:hover{
  color: white;
  text-decoration: none;
}

@media (max-width: 576px){
  img{
    width: 200px;
    margin-bottom: 5%;
  }
  #projet{
    padding: 10px;
  }

}

@media (max-width: 768px){
  img{
    width: 250px;
  }

}


</style>
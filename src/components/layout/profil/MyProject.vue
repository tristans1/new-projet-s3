<template>
  <div class="mt-5 mb-5 col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">

    <div class="mt-5 d-flex ">
    <h5>Mes projets</h5>
      <router-link class="ml-auto" to="/modify">
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
/*/////
/////
/////*/
@keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}



ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
}

.carousel__viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.carousel__slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  /*counter-increment: item;*/
}

.carousel__slide:nth-child(even) {
  background-color: #99f;
}

.carousel__slide:before {
  content: /*counter(item)*/;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -40%, 70px);
  color: #fff;
  font-size: 2em;
}

.carousel__snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

@media (hover: hover) {
  .carousel__snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .carousel__slide:last-child .carousel__snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel__snapper {
    animation-name: none;
  }
}

.carousel:hover .carousel__snapper,
.carousel:focus-within .carousel__snapper {
  animation-name: none;
}

.carousel__navigation {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.carousel__navigation-list,
.carousel__navigation-item {
  display: inline-block;
}

.carousel__navigation-button {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #333;
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 50%;
  font-size: 0;
  transition: transform 0.1s;
}

.carousel::before,
.carousel::after,
.carousel__prev,
.carousel__next {
  position: absolute;
  top: 0;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0;
}

.carousel::before,
.carousel__prev {
  left: -1rem;
}

.carousel::after,
.carousel__next {
  right: -1rem;
}

.carousel::before,
.carousel::after {
  content: '';
  z-index: 1;
  background-color: #333;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}

.carousel::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}

.carousel::after {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
}

/*/////
/////
/////*/

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
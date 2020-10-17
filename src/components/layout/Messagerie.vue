<template>
<!-- <div class="messagerie-open">-->
  <div id="messagerie" v-bind:class="[volet ? 'open-volet' : 'close-volet']">
    <div class=" bg-white d-none d-md-block " >
    <header class="bg-secondary d-flex" v-on:click="flipOpen">
        <h5 class="pl-2">Messagerie</h5>
        <img id="icon" class="ml-auto mr-3 arrow-toggle" src="../svg/arrow-toggle.svg" alt="arrow">

    </header>
    
            <div class="contact d-flex pl-1 pr-1">
                <div class="photo"> <img src="../svg/user-pp.svg" alt="user">    </div>
                <div class="informations">
                <h6 class="font-weight-bold">Quentin Robelin</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div class="contact d-flex pl-1 pr-1">
                <div class="photo"> <img src="../svg/user-pp.svg" alt="user">    </div>
                <div class="informations">
                <h6 class="font-weight-bold">Sergio Gomez</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div class="contact d-flex pl-1 pr-1">
                <div class="photo"> <img src="../svg/user-dev-pp.svg" alt="user">    </div>
                <div class="informations">
                <h6 class="font-weight-bold">Adrien Bouteiller</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
  </div>
    <!--</div>-->
</template>

<script>
export default {
  name: 'Messagerie',
  props: {
    msg: String
  },
  data() {
    return{
      volet: false

    }
  },
  methods: {
    flipOpen: function () {
      this.volet = !this.volet;
    },

  }
}


</script>



<style  scoped>
#messagerie{
    width: 500px;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 8%;
}
.photo{
    flex-basis: 10%;
    margin: 0;
    margin-right: 1%;
}
.informations{
    flex-basis: 89%;
    margin: 0;
    text-align: start;
}
img{
    max-width: 100%;
}
.contact{
    border-bottom: 1px solid #707070;
    padding:  2% 1% 1% 1%;
    margin:  0 1%;
}
h5{
    margin: 0;
    padding: 1%;
    text-align: start;
}
h6{
    margin-bottom: 1%;
}
p{
    margin-bottom: 1%;
}
.arrow-toggle{
    width: 5%;
}
.open-volet{
  bottom:0;
  transition: all 0.5s ease;
}

.close-volet{
  bottom:-200px !important;
  transition: all 0.5s ease;
}

.open-volet #icon{
  transform: rotate(180deg);
  transition: all 0.3s ease;
}

.close-volet #icon {
  transition: all 0.3s ease;

}


</style>
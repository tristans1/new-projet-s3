<template>
  <div id="SearchComponent">

  <div id="searchbar">
    <div id="search-message__searchbar" class="form-inline col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3  pr-0">
      <input name  type="text"  v-model="search" placeholder="Rechercher un utilisateur" />
      <img src="../svg/search-icon-red.svg" style="width: 20px"  alt="" class="ml-auto mr-3" />
    </div>
  </div>


    <div id="User" class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12  d-flex mt-3 bg-secondary
      " v-bind:key="user.id" v-for="user in filteredList">
      <div><img v-bind:src="user.img" :alt="user.name" style="width: 80px " class="ml-1 mr-2"></div>
      <div class="mt-auto mb-auto text-left "><h5>{{ user.tri.nom }}</h5> <span> Promo {{ user.tri.promo }}</span></div>
      <div class="ml-auto mt-auto mb-auto"><button class="btn btn-primary text-white"> Voir</button></div>
    </div>

    <div class="filters" v-bind:class="[volet ? 'open-volet' : 'close-volet']">
      <span><img @click="flipOpen" id="icon" src="../svg/arrow-toggle.svg" alt=""></span>
      <div>
        <h4 class="text-secondary mb-3">Trier par </h4>
        <div class="d-flex m-4" v-for="libTri of mesTris" :key="libTri">
          <a  @click="sortBy(libTri)" href="#"  class="leBoutonTri"></a>
          <h6 >{{ libTri }} (a-z)</h6>
        </div>

        <div class="d-flex m-4">
          <a @click="sortByNameZa" href="#" class="leBoutonTri"></a>
          <h6>nom (z-a)</h6>
        </div>

        <div class="d-flex m-4">
          <a @click="sortByPromoZa" href="#" class="leBoutonTri"></a>
          <h6>promo (z-a)</h6>
        </div>


      </div>
    </div>
  </div>
</template>

<script>/*
class User {
 constructor(name, img, annee, id, tri) {
    this.name = name;
    this.img = img;
    this.annee = annee;
    this.id = id;
    this.tri = [
      {
        "promo": this.annee,
        "nom" : this.name
      }
    ]
  }
}*/


export default {
  name: 'Searchbar',
  props: {
    msg: String
  },
  data() {
    return {
      volet: false,
      search: '',
      leTri: '',
      listUser: [
        {
          "name": "Tristan Seclet",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "annee": 2021,
          "id": 1,
          "tri": {
            "nom": "Tristan Seclet",
            "promo": 2021
          }
        },
        {
          "name": "Sergio Gomez",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "annee": 2021,
          "id": 2,
          "tri": {
            "nom": "Sergio Gomez",
            "promo": 2020

          }
        },
        {
          "name": "Adrien Bouteiller",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "annee": 2021,
          "id": 3,
          "tri": {
            "nom": "Adrien Bouteiller",
            "promo": 2022
          }
        },
        {
          "name": "Quentin Robelin",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "annee": 2020,
          "id": 4,
          "tri": {
            "nom": "Quentin Robelin",
            "promo": 2020
          }
        },
        {
          "name": "David Rivera",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "annee": 2020,
          "id": 5,
          "tri": {
            "nom": 'David Rivera',
            "promo": 2022

          }
        }

      ],

      /*listUser:[
        new User(
            'Tristan Seclet',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            1,
            ""
        ),
        new User(
            'Sergio Gomez',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            2,
            ""
        ),
        new User(
            'Quentin Robelin',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            3,
            ""
        ),
        new User(
            'Jean Dupont',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            4,
            ""
        ),
        new User(
            'David Rivera',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2022,
            5,
            ""


        ),
        new User(
            'Jérémie Herzogh',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            6,
            ""
        ),
        new User(
            'Adrien Bouteiller ',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            7,
            ""
        ),
        new User(
            'Steven Goffinet',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            8,
            ""
        ),
      ],*/
      /*sortKey: '',
      sortSettings: [
        {'nom': true},
        {'promo': true}
      ],
      desc: false
*/
    };
  },

  methods: {
    flipOpen: function () {
      this.volet = !this.volet;
    },
    sortByPromo(){
       this.listUser = this.listUser.sort((a, b) => a.tri["promo"] - b.tri["promo"])
    },
    sortByName() {
       this.listUser = this.listUser.sort((a, b) => a.tri["nom"].localeCompare(b.tri["nom"]))
    },
    sortByNameZa() {
      this.listUser = this.listUser.sort((a, b) => a.tri["nom"].localeCompare(b.tri["nom"])).reverse()
    },
    sortByPromoZa() {
      this.listUser = this.listUser.sort((a, b) => a.tri["promo"] - b.tri["promo"]).reverse()
    },
    sortBy(libTri){
      switch (libTri){
        case "promo":
          this.sortByPromo()
              break;
          case "nom" :
            this.sortByName()
              break;
      }
    }
  },


  computed: {

    filteredList() {
      return this.listUser.filter(user => {
        return user.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    mesTris(){
      const trier = this.listUser[0];
      return trier ? Object.keys(trier.tri): [];
    },

  }

}
</script>
<style scoped>
#searchbar{
  box-shadow: 0 4px 10px -2px #555;
  padding: 2%;
  position: fixed;
  width: 100%;
  top: 10%;
  z-index: 9;
  background: white;
}
.filters span{
  background: #414141;
  border: 10px;
  border-radius: 10px;
  position: absolute;
  top: 170px;
  right: -20px;
  padding: 10px;
  padding-right: 3px;
}
.filters span img{

  width: 20px;
  transform: rotate(90deg);
}
.filters{
  padding-top: 200px;
  width: 300px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: #414141;
}
.leBoutonTri{
  width: 30px;
  height: 30px;

  background: #EBEBEb;
  margin-right: 10px;
  margin-left: 30px;
  /*border: 50px;*/
  border-radius: 50%;
  transition: .2s ease-in-out;
 /* border: 1px solid #E62450;*/

}
h6{
  color: white;
}

.leBoutonTri:active, .leBoutonTri:focus  {
  background: #e62450;
/*  border: 1px solid #E62450;*/
  transition: .2s ease-in-out;
}

.open-volet {
  left: 0;
  transition: all 0.5s ease;
}

.close-volet {
  left: -299px !important;
  transition: all 0.5s ease;
}

.open-volet #icon {
  transform: rotate(270deg);
  transition: all 0.3s ease;
}

.close-volet #icon {
  transition: all 0.3s ease;

}

input{
  border: none;
  padding-top: 1%;
  padding-bottom: 1%;
}
#search-message__searchbar{
  border: 1px solid #E4E4E4;
  border-radius: 20px;

}
input{
  width: 80%;
}
#search-message__searchbar:hover{
  box-shadow: 0 1px 3px #555;
}
input[type="text"]:focus {
  outline: none;
}
#SearchComponent{
  margin-top: 8%;
}
/*#User{
  border-radius: 16px;
  border: #EBEBEB solid 10px;
}*/
@media screen and (max-width: 690px){
  #SearchComponent{
    margin-top: 15%;
  }
}
</style>
<template>
<div id="search-message" class="d-flex">
  <div class="un">
  <div id="" class="search-message__header">
    <div id="search-message__searchbar" class="w-100 form-inline col-12 col-md-10 offset-md-1 pr-0">
      <input name type="text" v-model="search"  placeholder="Rechercher"/>
      <img src="../svg/search-icon-red.svg" style="width: 20px" alt="" class="ml-auto mr-3"/>
    </div>
  </div>

<router-link to="/messmobile">
  <div id="search-message__contact">
    <div id="user" class="d-flex p-2 mt-auto" v-bind:key="user.id" v-for="user in filteredList">
      <div><img v-bind:src="user.img" :alt="user.name" style="width: 54px " class="ml-1 mr-2"></div>
      <div class="text-left ml-3 mr-2">
        <h5 class="m-0">{{user.tri.nom}}</h5>
        <p class="m-0">{{user.msg}}</p>
      </div>

    </div>
  </div>
</router-link>
</div>
  <div class="deux d-none d-md-block">
    <div class="search-message__header">
      <h3 id="search-message__le__contact" class=" text-left">David Rivera</h3>


      <div id="search-message__message">
        <p>06/02/2020 16:36</p>

        <div class="mess messG col-12 col-md-10 offset-md-1">
          <p class="m-0 p-2">Salut ça va bien ? T'es au MMI ?</p>
        </div>
        <div class="mess messD col-12 col-md-10 offset-md-1">
          <p class="m-0 p-2">Salut oui ça va bien et toi ?</p>
        </div>
        <div class="mess messG col-12 col-md-10 offset-md-1">
          <p class="m-0 p-2">Oui, j'aurais besoin d'aide pour ...</p>
        </div>

        <div class="mess messD col-12 col-md-10 offset-md-1">
          <p class="m-0 p-2">Pas de soucis one s'appelle demain!</p>
        </div>

      </div>



        <div id="input-message" class="form-inline col-12 col-md-10 offset-md-1 pr-0">
          <input name type="text"  placeholder="Message"/>
          <img src="../svg/paper-plane-icon-red.svg" style="width: 20px" alt="" class="ml-auto mr-3"/>
        </div>

    </div>


  </div>
</div>
</template>

<script>

export default {
name: "MyMessage",
  props: {
    msg: String
  },
  data() {
    return {
      search: '',
      listUser: [
        {
          "id": "0",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "msg": "euh bah t'incrémentes jamais ton j, genre t'as jamais j++ si ? donc dans ce cas  ...",
          "lieu": "Montbéliard",
          "activite": 1,
          "specialite": 1,
          "tri": {
            "nom": "Tristan Seclet",
            "promo": 2021
          }
        },
        {
          "id": "1",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "msg": "Bonjour je suis Jean",
          "lieu": "Belfort",
          "activite": 2,
          "specialite": 3,
          "tri": {
            "nom": "Jean Dupont",
            "promo": 2010
          }
        },
        {
          "id": "2",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "msg": "Bonjour je suis Adrien",
          "lieu": "Lyon",
          "activite": 1,
          "specialite": 1,
          "tri": {
            "nom": "Adrien Bouteiller",
            "promo": 2021
          }
        },
        {
          "id": "3",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "msg": "Bonjour je suis Sergio",
          "lieu": "Valentigney",
          "activite": 1,
          "specialite": 4,
          "tri": {
            "nom": "Sergio Gomez",
            "promo": 2021
          }
        },
        {
          "id": "4",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "msg": "Bonjour je suis Lionel",
          "lieu": "Paris",
          "activite": 3,
          "specialite": 3,
          "tri": {
            "nom": "Lionel Armand",
            "promo": 2011
          }
        },
        {
          "id": "5",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "msg": "Bonjour je suis David",
          "lieu": "Strasbourg",
          "activite": 1,
          "specialite": 3,
          "tri": {
            "nom": "David Rivera",
            "promo": 2022
          }
        },
        {
          "id": "6",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "msg": "Salut ça va, tu peux m'aider pour un petit projet ?",
          "lieu": "Lons Le Saunier",
          "activite": 1,
          "specialite": 3,
          "tri": {
            "nom": "Quentin Robelin",
            "promo": 2022
          }
        },
        {
          "id": "7",
          "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
          "msg": "Ca te dit un petit appel vocal pour parler du stage ?",
          "lieu": "Audincourt",
          "activite": 1,
          "specialite": 3,
          "tri": {
            "nom": "Jérémie Herzogh",
            "promo": 2022
          }
        }
      ],
    };
  },
  computed: {

    filteredList() {
      return this.listUser.filter(user => {
        return user.tri.nom.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>


@media screen and (max-width: 766px) {
  #search-message .un {
    max-width: 100%;
    width: 100%;
  }

  #search-message .deux {
   display: none;
  }
}
#search-message .deux{
  top: 8%;
  right: 25px;
  left: 575px;
  position: fixed;
  flex-basis: 70%;
  max-width: 70%;

}

#search-message .un {
  max-width: 575px;
  width: 100%;

}
.search-message__header {
  width: 100%;
  height: auto;


}

#search-message__le__contact{
  margin-top: 30px;
  margin-left: 50px;
}
/*#searchbar {
  box-shadow: 1px 1px 12px #555;
  padding: 2%;

}*/

input {
  border: none;
  padding-top: 1%;
  padding-bottom: 1%;
}

#search-message__searchbar{
  margin-top: 30px;/*marge a reutiliser*/
  margin-bottom: 30px;
  border: 1px solid #E4E4E4;
  border-radius: 20px;

}
#search-message__contact{
  border: 1px solid #EBEBEB;
}

#search-message__message{
  margin-top: 2%;
}

#search-message__message>p{
  margin-top: 3%;
}

input {
  width: 80%;
}

input[type="text"]:focus {
  outline: none;
}
#user{
  border-bottom: 1px solid #EBEBEB;
  height: 85px;
}
p{
  font-size: 0.875rem;
}
h5{
  font-size: 20px;
}
#user img{
  margin-top: 8px;
}
#input-message{
  margin-top: 30%; /*marge a reutiliser*/
  margin-bottom: 30px;
  border: 1px solid #E4E4E4;
  border-radius: 20px;
  position: relative;

  bottom: 0px;
}


.mess {
  align-items: center;
  background: #EBEBEb;
  width: fit-content;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px; /*marge a reutiliser*/
  margin-bottom: 30px;
  border: 1px solid #E4E4E4;
  border-radius: 20px;
}
.messG{
  background: #EBEBEb;
  margin-right: 2%;
}
.messD{
  position: relative;
  right: 0;
  margin-left: 74%;
  background: #e62450;
  color: #ffffff;
  margin-right: 4% ;
}

.messD:last-child{
  margin-left: 70%;
}

.messD p{
  color: white;
}
</style>
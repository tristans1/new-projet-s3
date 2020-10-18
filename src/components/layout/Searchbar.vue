<template>
  <div>

  <div id="searchbar">

    <div id="box-search" class="form-inline col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3  pr-0">
      <input name style="width: 90%" type="text"  v-model="search" placeholder="Rechercher un utilisateur" />
      <img src="../svg/search-icon-red.svg" style="width: 20px" alt="" class="ml-3" />
    </div>
  </div>


    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12  d-flex mt-3 bg-secondary " v-bind:key="user.id" v-for="user in filteredList">
      <div><img v-bind:src="user.img" alt="img-user" style="width: 80px " class="ml-1 mr-2"></div>
      <div class="mt-auto mb-auto " style="text-align: left"><h5>{{ user.name }}</h5> <span> Promo {{ user.annee }}</span></div>
      <div class="ml-auto mt-auto mb-auto"><button class="btn btn-primary text-white"> Voir</button></div>
    </div>



  </div>
</template>

<script>
class User {
  constructor(name, img, annee, id) {
    this.name = name;
    this.img = img;
    this.annee = annee;
    this.id = id;
  }
}
export default {
  name: 'Searchbar',
  props: {
    msg: String
  },
  data() {
    return {
      search: '',

      listUser:[
        new User(
            'Tristan Seclet',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            1
        ),
        new User(
            'Sergio Gomez',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            2
        ),
        new User(
            'Quentin Robelin',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            3
        ),
        new User(
            'Jean Dupont',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            4
        ),
        new User(
            'David Rivera',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2022,
            5
        ),
        new User(
            'Tristan Seclet',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            6
        ),
        new User(
            'Adrien Bouteiller ',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            7
        ),
        new User(
            'Steven Goffinet',
            'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png',
            2021,
            8
        ),
      ]

    };
  },
  computed: {/*
     filteredList() {
       return this.list.filter(str => str.name.toLowerCase().includes(this.search.toLowerCase()));
     }*/

    filteredList() {
      return this.listUser.filter(user => {
        return user.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
<style scoped>
#searchbar{
  box-shadow: 1px 1px 12px #555;
  padding: 2%;

}
input{
  border: none;
  padding-top: 1%;
  padding-bottom: 1%;
}
#box-search{
  border: 1px solid #E4E4E4;
  border-radius: 20px;

}

input[type="text"]:focus {
  outline: none;
}
</style>
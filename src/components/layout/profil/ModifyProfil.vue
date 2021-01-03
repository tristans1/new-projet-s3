<template>
  <div class="myprofil col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-3">



      <div class=" d-flex mb-5  ml-0 ml-md-5 ml-sm-3 text-left align-items-center">

        <img class="mb-3 mb-sm-0" id="photo" src="../../svg/user-dev-pp.svg" alt="Tristan Seclet">
        <h2 class="ml-auto">{{ listUser[0].tri.nom }}</h2>

      </div>


      <div class="mb-3 mb-sm-0 ml-0 ml-md-5 ml-sm-3 text-left">


        <b-form @submit.prevent="onSubmit" >
          <b-form-group
              id="input-group-1"
              label="Lieu :"
              type="text"
              label-for="input-1"
              description="Lieu choisit pour vous répertorier sur la carte."
          >
            <b-form-input
                id="input-1"
                type="text"
                :placeholder="listUser[0].lieu"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Activité :" label-for="input-2" description="Obligatoire">
            <b-form-select v-model="selectedActivity" :options="optionsActivity" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-3" label="Spécialité :" label-for="input-3" description="Obligatoire">
            <b-form-select v-model="selectedSpe" :options="optionsSpe" required></b-form-select>
          </b-form-group>

          <b-form-group label="Disponibilité" v-slot="{ ariaDescribedby }">
            <b-form-radio v-model="selectedDispo" :aria-describedby="ariaDescribedby" name="some-radios" value="1" >Disponible
            </b-form-radio>
            <b-form-radio v-model="selectedDispo" :aria-describedby="ariaDescribedby" name="some-radios" value="2">
              Indisponible
            </b-form-radio>
          </b-form-group>


    <b-form-group class="mt-3 text-left" id="input-group-4" label="Biographie :" label-for="input-4" type="textarea">
      <b-form-textarea style="height: 200px"
          id="input-4"
          :placeholder="listUser[0].bio"

      ></b-form-textarea>
    </b-form-group>

          <b-button class="m-3" type="submit" variant="primary">Valider</b-button>
          <router-link to="/profil"><b-button class="m-3" type="reset" variant="danger">Annuler</b-button></router-link>
        </b-form>


      </div>

    </div>

</template>

<script>
export default {
  name: 'ModifyProfil',
  props: {
    msg: String
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  },
  data(){
    return {
      listUser:
          [
            {
              "id": "0",
              "img": "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png",
              "msg": "euh bah t\\'incrémentes jamais ton j, genre t\\'as jamais j++ si ? donc dans ce cas  ...",
              "lieu": "Montbéliard",
              "activite": "Étudiant",
              "specialite": "Développement",
              "bio": "Voici ma bio.  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
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
              "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
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
              "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
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
              "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
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
              "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
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
              "bio": " Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
              "tri": {
                "nom": "David Rivera",
                "promo": 2022
              }
            }
          ],





      selectedDispo: 1,
      selectedActivity : null,
      optionsActivity : [
        {value : null, text : 'Votre activité', disabled:true},
        {value: 'a', text: 'Étudiant'},
        {value: 'b', text: 'Professeur'},
        {value: 'c', text: 'Employé'},
        {value: 'b', text: 'Freelance'}
      ],


      selectedSpe: null,
      optionsSpe: [
        {value: null, text: 'Votre spécialité', disabled: true},
        {value: 'a', text: 'Développement'},
        {value: 'b', text: 'Communication'},
        {value: 'c', text: 'Audiovisuel'},
        {value: 'b', text: 'Graphisme / Design'}]
    }
  }
}
</script>

<style scoped>
p > span {
  font-weight: lighter;
}

button {
  border: 1px solid #E62450;
  font-weight: bold;
}

button #icon {
  width: 15px;
  transform: rotate(90deg);
}

#photo {
  width: 10%;
  align-self: baseline;
}

/*SM*/
@media (max-width: 576px ) {
  h2 {
    position: absolute;
    font-size: 1.6rem;
    /*left: 125px;*/
    /*top:15px;*/
    top: 2%;
    left: 25%;

  }

  #photo {
    width: 20%;
  }

}

@media (max-width: 768px ) {
  #photo {
    width: 20%;
  }
}
</style>
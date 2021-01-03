<template>
  <div>
    <div id="parcours" class=" d-block d-md-flex text-left col-12 col-md-10 offset-md-1 mt-3 ">
      <div class="ml-0 pl-3 pr-3" style="flex-basis: 33.3%;">
        <h5>Parcours</h5>
        <div class="bg-secondary mb-5 " :key="ecole.id" v-for="ecole in listParcours">
          <div class="d-flex pt-3">
            <img class="imgparcours" :src="ecole.img" :alt="ecole.nom">
            <div>
              <h6>{{ ecole.nom }}</h6>
              <p class="font-weight-lighter mb-1">{{ ecole.annee }}</p>
              <p class="font-weight-lighter">{{ ecole.lieu}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-0 pl-3 pr-3" style="flex-basis: 33.3%;">
        <h5>Stage(s)</h5>
        <div class="bg-secondary mb-5 " :key="stage.id" v-for="stage in listStage">
          <div class="d-flex pt-3">
            <img class="imgparcours" :src="stage.img" :alt="stage.nom">
            <div>
              <h6>{{ stage.nom }}</h6>
              <p class="font-weight-lighter mb-1">{{ stage.annee }}</p>
              <p class="font-weight-lighter">{{ stage.lieu}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-0 pl-3 pr-3" style="flex-basis: 33.3%;">
        <h5>Emploi(s)</h5>
        <div class="bg-secondary mb-5 " :key="emploi.id" v-for="emploi in listEmplois">
          <div class="d-flex pt-3">
            <img class="imgparcours" :src="emploi.img" :alt="emploi.nom">
            <div>
              <h6>{{ emploi.nom }}</h6>
              <p class="font-weight-lighter mb-1">{{ emploi.annee}} - {{ emploi.lieu }}</p>
              <p class="font-weight-lighter">{{ emploi.poste}}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: 'MonParcours',
  props: {
    msg: String
  },
  data(){
    return{
      listStage: [
        {
          "id": "1",
          "img": "https://s3-eu-west-1.amazonaws.com/sortlist-core-api/cVM9B6wz5AFf4LgedzMX8ZTN",
          "nom": "Pure Illusion Lyon",
          "lieu": "Lyon",
          "annee": "2021",
        },
        {
          "id": "2",
          "img": "https://media-exp1.licdn.com/dms/image/C560BAQE-dCojUHjHqA/company-logo_200_200/0/1549621104751?e=2159024400&v=beta&t=hp69N8yI6Bi1FggtVP1plHglhU3NFz-pabrVhf8w9XY",
          "nom": "Numérica",
          "lieu": "Montbéliard",
          "annee": "2021",
        },
      ],
      listEmplois: [{
        "id": "1",
        "img": "https://s3-eu-west-1.amazonaws.com/sortlist-core-api/cVM9B6wz5AFf4LgedzMX8ZTN",
        "nom": "Pure Illusion Lyon",
        "lieu": "Lyon",
        "annee": "2022",
        "poste": "Développeur front-end"

      }
      ],
      listParcours: [
        {
          "id": "2",
          "img": "https://pbs.twimg.com/profile_images/1118495722058452993/uXevynW7.png",
          "nom": "Gobelins Développement web",
          "lieu": "Annecy",
          "annee": "2021-2022",
        },
        {
          "id": "1",
          "img": "https://pbs.twimg.com/profile_images/617981571564445696/F0GYCync_400x400.png",
          "nom": "DUT MMI",
          "lieu": "Montbéliard",
          "annee": "2019-2021",
        }
      ],
    }
  }
}
</script>


<style scoped>
#parcours {
  margin-top: 5%;
}

.imgparcours {
  box-shadow: 5px 5px 0px #e62450;
  margin-left: 10px;
  margin-right: 20px;
  width: 84px;
  height: 84px;
}

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


/*SM*/
@media (max-width: 576px ) {
  h2 {
    position: absolute;
    font-size: 1.6rem;
    top: 2%;
    left: 25%;

  }
}
</style>
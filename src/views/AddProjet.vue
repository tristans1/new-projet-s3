<template>
  <div>

    <TheNavigation class="d-none d-sm-block" style="z-index: 11"/>
    <TheNavHome class="d-block d-sm-none"/>
    <MenuMobil class="d-block d-sm-none" style="z-index: 10"/>

    <div class="myprojet col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-3">


      <div class="mt-5 d-flex mb-3  ml-0 ml-md-5 ml-sm-3 text-left align-items-center">

        <!-- <img class="mb-3 mb-sm-0" id="photo" src="../../svg/user-dev-pp.svg" alt="Tristan Seclet">-->
        <h2 class="">Ajouter un projet</h2>

      </div>


      <div class="mb-3 mb-sm-0 ml-0 ml-md-5 ml-sm-3 text-left">


        <b-form @submit.prevent="onSubmit">
          <div>
            <img :src="imageData"
                 id="previewImage"
                 class="img-responsive"
                 alt="image du projet"
                 style="width:50%;border:1px solid lightgray;margin:10px;"
            />
            <div class="custom-file">
              <input
                  type="file"
                  class="custom-file-input"
                  @change="previewImage"
                  id="validatedCustomFile" required
              >
              <label
                  class="custom-file-label"
                  for="validatedCustomFile">
                Choisir une image...
              </label>
              <div class="invalid-feedback">Image invalide</div>
            </div>
          </div>


          <b-form-group class="mt-3"
                        id="input-group-1"
                        label="Nom :"
                        type="text"
                        label-for="input-1"
                        aria-required="true"
          >
            <b-form-input class="mt-3"
                          id="input-1"
                          type="text"
                          placeholder="Nom du projet"
                          required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="mt-3" id="input-group-2" label="Description :" label-for="input-2"
                        description="Obligatoire (4-5 lignes).">
            <b-form-textarea style="height: 200px"
                             id="input-2"
                             type="textarea"
                             placeholder="Description du projet"
                             required
            ></b-form-textarea>
          </b-form-group>

          <b-form-group class="mt-3" id="input-group-3" label="Lien complémentaire :" label-for="input-3"
                        description="Obligatoire (lien du site ou d'informations complémentaires).">
            <b-form-input
                id="input-3"
                type="textarea"
                placeholder="Lien du projet"
                required
            ></b-form-input>
          </b-form-group>

          <b-button class="m-3" type="submit" variant="primary">Valider</b-button>
          <router-link to="/profil">
            <b-button class="m-3" type="reset" variant="danger">Annuler</b-button>
          </router-link>
        </b-form>


      </div>

    </div>

    <Space class="d-block d-sm-none"/>
  </div>


</template>

<script>
import TheNavigation from "@/components/layout/menu/TheNavigation";
import TheNavHome from "@/components/layout/menu/TheNavHome";
import MenuMobil from "@/components/layout/menu/MenuMobil";
import Space from "@/components/layout/menu/Space";
export default {
name: "AddProjet",
  components:{
  TheNavHome,
    TheNavigation,
    Space,
    MenuMobil
  },
  data(){
  return{
    imageData: 'https://www.datocms-assets.com/17507/1606814601-gestion-projet-web.jpg',
    projet : [{
      "image":'',
      "nom": '',
      "description" : '',
      "lien" : '',
    }]

  }
  },
  methods: {
    previewImage: function (event) {

//      console.log("Fichier ",event.target.files[0]);
      this.projet.image = event.target.files[0];

      // Reference à l'origine de l'évenement
      var input = event.target;
      // Récupération d'un ou de champs file existants
      // et renseignés
      if (input.files && input.files[0]) {

        // Création d'un objet FileReader
        // fichier en lecture
        var reader = new FileReader();

        // Création d'un callback sur event onload
        reader.onload = (e) => {
          // Lecture de l'image en base64
          // pour la charger dans imageData
          this.imageData = e.target.result;
        }
        // Render de l'image en tant qu'URL
        // Format base64 pour affichage
        reader.readAsDataURL(input.files[0]);
      }
    },
    onSubmit: function () {

      // Objet FormData pour paramètres du villageois
      let params = new FormData();
      // Les paramètres à passer au back-end
      params.append('nom', this.projet.nom);
      params.append('adresse', this.projet.description);
      params.append('image', this.projet.image);
      params.append('lien', this.projet.lien);

    }
  }
}
</script>

<style scoped>

</style>
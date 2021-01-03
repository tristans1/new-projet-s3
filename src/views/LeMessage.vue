<template>
  <div class="deux">
    <div class="search-message__header">
      <div class="d-flex align-items-center mt-3 ml-1 mb-5">
       <router-link to="/message"> <img style="transform: rotate(-90deg); width: 20px" src="../components/svg/arrow-toggle.svg" alt="">
       </router-link>
      <h3 id="search-message__le__contact" class="m-0 ml-3 text-left">David Rivera</h3>
    </div>

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
        <input name type="text" placeholder="Message"/>
        <img src="../components/svg/paper-plane-icon-red.svg" style="width: 20px" alt="" class="ml-auto mr-3"/>
      </div>

    </div>


  </div>
</template>

<script>
export default {
name: "LeMessage"
}
</script>

<style scoped>


@media screen and (max-width: 766px) {
  #search-message .un {
    max-width: 100%;
    width: 100%;
  }
}

/*.deux {
  top: 8%;
  right: 25px;
  left: 575px;
  position: fixed;
  flex-basis: 70%;
  max-width: 70%;

}*/

#search-message .un {
  max-width: 575px;
  width: 100%;

}

.search-message__header {
  width: 100%;
  height: auto;


}

#search-message__le__contact {
  margin-top: 30px;
  margin-left: 50px;
}

input {
  border: none;
  padding-top: 1%;
  padding-bottom: 1%;
}

#search-message__message {
  margin-top: 2%;
  margin-right: 5%;
  width: 100%;
}

#search-message__message > p {
  margin-top: 3%;
}

input {
  width: 80%;
}

input[type="text"]:focus {
  outline: none;
}

p {
  font-size: 0.875rem;
}

h5 {
  font-size: 20px;
}

#user img {
  margin-top: 8px;
}

#input-message {
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #E4E4E4;
  border-radius: 20px;
  position: fixed;
  bottom: 50px;
  margin: 0;
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

.messG {
  background: #EBEBEb;
  margin-left: 2%;
  width: max-content;
}

.messD {
  width: max-content;
  position: relative;
  right: 0;
  margin-left: 25%;
  background: #e62450;
  color: #ffffff;
  margin-right: 4%;
}

.messD:last-child {
  margin-left: 12%;
}

.messD p {
  color: white;
}
</style>
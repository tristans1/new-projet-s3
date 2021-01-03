<template>
<div class="background">
    <div class="container">
        <div class="row">
          <div class="d-block d-lg-flex">
            <div id="contain" class="col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-3 bg-white pb-3 pt-3"> <!-- w-sm-75 m-auto  w-md-25-->
                
                <div > <!-- class="col-12"-->
                        <router-link to="/map"> <button class="btn m-3 text-white bg-primary"> <!--<img class="img-fluid" src="../assets/svg/linkedin.svg" alt="linkedin">--> Se connecter via Linkedin</button></router-link>
                </div>
                <div >
                       <router-link to="/map"> <button class="btn mb-3 text-white bg-primary">Se connecter avec ses identifiants</button></router-link> 
                </div>
                    <div class="col-10 offset-1">
                    <span id="ou" class="m-3 text-">ou </span>
                    </div>
                <div>
                     <router-link to="/map"><button class="btn bg-muted m-3 ">Continuer sans se connecter</button></router-link>
                </div>
            </div>
          <h1 class="col-10 col-lg-6 text-left ">Gardez un  <span>lien</span>  avec <br class="d-none d-lg-block"> les anciens </h1></div>
        </div>
    </div>

</div>
    
</template>





<script>
export default {
  name: 'HomeConnect',
  props: {
    msg: String
  }
}
</script>
<style lang="scss" scoped>
div.background{
    background: url("../assets/background/home_connect_1.png") 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding-top: 12%;
}

@media (max-width: 576px) {
  div.background {
    background: url("../assets/background/home_connect_mobile.png") 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }

  }

#contain{
    border: solid #EBEBEB 5px;
    border-radius: 20px;

/*  w-sm-75 m-auto  w-md-25**/
}
button{
    width: 80%;
    border: solid 1px ;

}
img{
    fill: white;
    width: 20px;
}
span{
  text-decoration: underline white;
  color: white;
}
span#ou{
  color: #414141;
}

/*H1 responsive connnexion*/
/*SM*/
@media (max-width: 576px) {
  h1 {
    font-size: 2.75rem;
    width: 100%;
    margin: 5% auto auto;


  }
}

/*MD*/
@media (min-width: 577px) and (max-width: 991px) {
  h1 {
    font-size: 3rem;
    width: 100%;
    margin: 5% auto auto;

  }
}

@media (min-width: 992px) {
  h1 {
    font-size: 4.625rem;
    width: 100%;

  }

}

</style>
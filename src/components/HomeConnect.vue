<template>
<div class="background">
    <div class="container">
        <div class="row">
            <div id="contain" class="col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4 bg-white pb-3 pt-3"> <!-- w-sm-75 m-auto  w-md-25-->
                
                <div > <!-- class="col-12"-->
                        <router-link to="/map"> <button class="btn m-3 text-white bg-primary"> <!--<img class="img-fluid" src="../assets/svg/linkedin.svg" alt="linkedin">--> Se connecter via Linkedin</button></router-link>
                </div>
                <div >
                       <router-link to="/map"> <button class="btn mb-3 text-white bg-primary">Se connecter avec ses identifiants</button></router-link> 
                </div>
                    <div class="col-10 offset-1">
                    <span class="m-3">ou </span>
                    </div>
                <div>
                     <router-link to="/map"><button class="btn bg-muted m-3 ">Continuer sans se connecter</button></router-link>
                </div>
            </div>
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
    background: url("../assets/home_connect.png") 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding-top: 12%;
}
#contain{
    border: solid #EBEBEB 5px;
    border-radius: 20px;

/*  w-sm-75 m-auto  w-md-25**/
}
button{
    width: 80%;
    border: solid 1px ;
    border-radius: 22px;
}
img{
    fill: white;
    width: 20px;
}


</style>
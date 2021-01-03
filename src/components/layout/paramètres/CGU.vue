<template>
<div>
  <TheNavigation class="d-none d-sm-block" style="z-index: 10"/>
  <TheNavHome class="d-block d-sm-none" style="z-index: 11"/>
  <MenuMobil class="d-block d-sm-none" style="z-index: 12"/>
  <Space class="d-block d-sm-none" style="z-index: 1"/>

  <div class="content col-10 offset-1">
  <h1 class="m-5 text-primary">Conditions d'utilisations</h1>
<h5>Préambule</h5>
  <p>L’inscription sur le site alummi.fr implique l’acceptation des présentes conditions d’utilisation.</p>
  <h5> 1. Le site alummi.fr </h5>
    <p>Le site alummi.fr référence les anciens étudiants MMI et leurs parcours professionnel ainsi qu’universitaire. Il
      leur permet de chercher des anciens étudiants ou professeurs avec lesquels collaborer dans tous types de projets.
      Alummi.fr ne fait qu’informer les usagers des professionnels du web ayant effectué la même formation qu’eux.
      L’équipe du site ne saurait être tenue pour responsable en cas de discorde ou quelconque problème survenu sur lors
      d’un projet liant des utilisateurs d’alummi.fr.</p>

  <h5>2. Droits et devoirs des membres</h5>
  <p>Un membre d’Alummi est un visiteur inscrit et connecté sur le site. Les membres peuvent profiter pleinement du
    service en ayant un profil attribué sur lequel ils peuvent référencer leur parcours professionnel, universitaire,
    certaines de leurs créations...etc. Les membres sont responsables des données qu’ils postent : textes, photos,
    vidéos. Ils s’engagent à être propriétaires des contenus qu’ils postent et à ne poster aucun contenu inapproprié,
    haineux, déplacé, pornographique ou qui violerait la législation en vigueur. Ils s’engagent à communiquer avec
    courtoisie et respect avec les autres membres du site. Tout membre ne respectant pas ces principes risquera de se
    faire radier du site sans préavis.</p>

  <h5>3. Propriété intellectuelle et utilisation des contenus postés  </h5>
  <p>Tout le site est soumis au droit de la propriété intellectuelle. Toute reproduction totale ou partielle des
    contenus, textes, graphiques, photos, est strictement interdite sans l’autorisation préalable du directeur de
    publication. Alummi.fr ne saurait être tenu pour responsable de contenus inappropriés ou litigieux postés par des
    membres du site, chaque membre étant responsable de ce qu’il poste sur le site comme le stipule le point n°2 des
    présentes conditions d’utilisation.</p>

  <h5>4. Modération des contenus</h5>

  <p>Alummi.fr s’efforce de donner le meilleur accès possible à son service, mais se donne le droit de suspendre à tout
    moment l’accès à l’entièreté ou à une partie du contenu présent sur le site : Momentanément afin d’y effectuer une
    mise à jour ou définitivement s’il s’agit d’une simple suppression. À savoir également que le site est optimisé pour
    les navigateurs récents ainsi que pour tout types de supports.</p>

  <h5>6. Éthique et philosophie</h5>
  <p>Comme sa communauté, l’équipe d’Alummi est avant tout composée d’étudiants MMI. Nous sommes ouverts et à l’écoute
    de vos propositions, vos partenariats, vos projets; n’hésitez pas à nous contacter. Nous sommes à l’écoute : si vous
    détectez des bugs ou souhaitez suggérer une amélioration, n’hésitez pas à nous contacter ! <br/>
    Merci.</p>
  </div>



</div>
</template>

<script>
import TheNavHome from '@/components/layout/menu/TheNavHome.vue'
import TheNavigation from '@/components/layout/menu/TheNavigation'
import MenuMobil from '@/components/layout/menu/MenuMobil'
import Space from "@/components/layout/menu/Space";

export default {
name: "CGU",
components: {
  TheNavHome,
  TheNavigation,
  MenuMobil,
  Space
}
}


</script>

<style scoped>
/*h1{
  margin-top: 2%;
}*/
h5, p{
  text-align: left;
}
h5{
  margin-top: 2%;
}


</style>
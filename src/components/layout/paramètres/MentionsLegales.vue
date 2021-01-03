<template>
<div>
  <TheNavigation class="d-none d-sm-block" style="z-index: 10"/>
  <TheNavHome class="d-block d-sm-none" style="z-index: 11"/>
  <MenuMobil class="d-block d-sm-none" style="z-index: 12"/>
  <Space class="d-block d-sm-none" style="z-index: 1"/>

  <div class="content col-10 offset-1">
  <h1 class="m-5 text-primary">Mentions légales</h1>
<h5>Développement</h5>
  <p>Le site a été développé par Tristan Seclet, Quentin Robelin et Sergio Gomez dans le cadre d’un projet pédagogique
    au département MMI, dans l’IUT de Belfort-Montbéliard - 4 place Tharradin - 25200 Montbéliard.</p>
  <h5>Hébergement</h5>
    <p>Le site alummi.fr référence les anciens étudiants MMI et leurs parcours professionnel ainsi qu’universitaire. Il
      leur permet de chercher des anciens étudiants ou professeurs avec lesquels collaborer dans tous types de projets.
      Alummi.fr ne fait qu’informer les usagers des professionnels du web ayant effectué la même formation qu’eux.
      L’équipe du site ne saurait être tenue pour responsable en cas de discorde ou quelconque problème survenu sur lors
      d’un projet liant des utilisateurs d’alummi.fr.</p>

  <h5>2. Droits et devoirs des membres</h5>
  <p>Le site alummi.fr est hébergé par la société Infomaniak. <br/>
    Infomaniak Entertainement – SA au capital de 21 000 000 CHF <br/>
    Siège social : 25 Eugène-Marziano 1227 Les Acacias Genève – Suisse. <br/>
    Site : www.infomaniak.com</p>

  <h5>Propriété intellectuelle</h5>
  <p>Tous les textes, logos, photos et images sont protégés au titre des lois et conventions sur la propriété
    intellectuelle. Toute reproduction (même partielle) est strictement interdite sans l’accord préalable de la société
    alummi.com. Les photos appartiennent à leurs propriétaires respectifs mentionnés dans les remerciements des
    fiches.</p>

  <h5>Projection des données personnelles et nominatives</h5>

  <p>Les informations personnelles recueillies sont destinées à un usage interne. En aucun cas elles ne seront cédées ou
    vendues à des tiers. En application de l’article 27 de la loi n° 78-17 du 6 janvier 1978 modifiée « Loi Informatique
    et Libertés », vous disposez d’un droit d’accès, de rectification, de modification et de suppression des données
    vous concernant. Vous pouvez exercer ce droit en envoyant un message électronique à : contact@alummi.com.</p>


    <h5>Liens hypertextes</h5>
    <p>www.alummi.fr comporte des liens vers d’autres sites Internet (liens externes) qui sont indiqués à titre
      informatif. La société scrollandride.fr ne saurait être tenue pour responsable des contenus publiés sur ces
      sites.</p>

    <h5>Législation</h5>
    <p>Le site www.scrollandride.fr est soumis à la législation française.</p>
  </div>



</div>
</template>

<script>
import TheNavHome from '@/components/layout/menu/TheNavHome.vue'
import TheNavigation from '@/components/layout/menu/TheNavigation'
import MenuMobil from '@/components/layout/menu/MenuMobil'
import Space from "@/components/layout/menu/Space";

export default {
name: "MentionsLegales",
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
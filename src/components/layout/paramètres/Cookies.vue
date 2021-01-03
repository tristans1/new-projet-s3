<template>
<div>
  <TheNavigation class="d-none d-sm-block" style="z-index: 10"/>
  <TheNavHome class="d-block d-sm-none" style="z-index: 11"/>
  <MenuMobil class="d-block d-sm-none" style="z-index: 12"/>
  <Space class="d-block d-sm-none" style="z-index: 1"/>

  <div class="content col-10 offset-1">
  <h1 class="m-5 text-primary">Préférences des cookies</h1>
  <p>Par la présente politique des cookies, l’opérateur du site informe les visiteurs du site de l’utilisation faite des
    cookies ou des technologies de stockage similaires (ci-après « cookies ») mises en place sur ce site (ci-après «
    site web »).</p>
  <h5> Que sont les cookies ?</h5>
    <p>Les cookies sont des petits fichiers texte qui sont stockés par votre navigateur sur votre ordinateur ou support
      mobile pour enregistrer certaines informations ou fichiers d’images, tels que les pixels. La prochaine fois que
      vous visiterez notre site web sur le même dispositif, les informations enregistrées dans les cookies seront
      transmises en conséquence soit à notre site web (« cookie de première partie »), soit à un autre site web auquel
      le cookie appartient (« cookie de tiers »). <br/> Grâce à cet échange d’informations enregistrées lors de vos
      différents passages sur le site web en question, il reconnaît que vous utilisez les mêmes navigateur et
      dispositif. Nous utilisons ces informations pour pouvoir concevoir et afficher le site web de manière optimale et
      en fonction de vos préférences. En conséquence, seul le cookie lui-même est identifié sur votre appareil. Vos
      données personnelles ne seront enregistrées qu’avec votre consentement exprès ou si cela est strictement
      nécessaire pour pouvoir utiliser le service qui vous est offert et donc auquel vous avez accès. </p>

  <h5>Utilisation des données personnelles et cookies</h5>
  <p>La connexion au site AluMMI se fera via le CAS (système universitaire) ou via Linkedin. Nous utilisons la fonction
    Tag-insight de LinkedIn pour mesurer la performance de nos annonces LinkedIn. Pour en savoir plus, visitez
    https://www.linkedin.com/legal/cookie-table. Vos données personnelles ne seront jamais exploitées commercialement ni
    communiquées à des tiers. Selon la loi Informatique et libertés, l’internaute dispose d’un droit d’accès, de
    rectification et de suppression sur les données à caractère personnel le concernant. Pour cela, contacter
    l’administrateur du site par le formulaire de contact ou à l’adresse alummi@gmail.com. Si un membre souhaite
    complètement supprimer son compte, il doit contacter l’administrateur du site via le formulaire de contact.
    Pour fonctionner correctement le site utilise des cookies, qui sont de petits fichiers temporaires notamment
    utilisés pour stocker momentanément des informations comme des résultats de recherche. Quasiment tous les sites
    utilisent cette technologie. Vous pouvez désactiver les cookies depuis votre navigateur mais nous ne garantissons
    pas un fonctionnement correct dans ce cas là.</p>

  <h5>Base légale</h5>
  <p>Aux vues des utilisations décrites ci-dessus, le traitement des données à caractère personnel recueillies par des
    cookies se base sur les directives définies à l’article 6, paragraphe 1, point f), du RGPD. Lorsque
    l’utilisateur/visiteur accepte que soient utilisés les cookies recueillis après en avoir été informé par nous sur
    nos sites web (bannière d’informations sur les cookies), la légalité de l’utilisation faite de ces cookies est
    fondée sur l’article 6 (1) (a) du PIBR.</p>

  </div>



</div>
</template>

<script>
import TheNavHome from '@/components/layout/menu/TheNavHome.vue'
import TheNavigation from '@/components/layout/menu/TheNavigation'
import MenuMobil from '@/components/layout/menu/MenuMobil'
import Space from "@/components/layout/menu/Space";

export default {
name: "Cookies",
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
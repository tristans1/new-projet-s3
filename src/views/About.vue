<template>
  <div class="about">
    <TheNavigation />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavigation from '@/components/layout/menu/TheNavigation.vue'

export default {
  name: 'About',
  components: {
    TheNavigation
  }
}
</script>

<style  scoped>

</style>


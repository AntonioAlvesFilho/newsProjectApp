<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="d-flex flex-column">
    <div v-if="!mobileWidth" class="d-flex justify-content-center bg-preto">
      <router-link to="/">
        <img src="../public/Tudo.png" class="logo" alt="logo" />
      </router-link>
    </div>
    <NavBar class="navbar sticky-top" style="background-color: #111111" />
    <div>
      <RouterView />
    </div>
    <FooterView />
  </div>
</template>
<script>
import NavBar from './components/common/NavBar.vue'
import FooterView from './components/common/FooterView.vue'
import windowWidthMixin from '../src/mixins/windowWidthMixin.js'

export default {
  data() {
    return {
      mobileWidth: false
    }
  },
  components: { NavBar, FooterView },
  mixins: [windowWidthMixin]
}
</script>
<style>
a {
  text-decoration: none;
  color: inherit;
}

.logo {
  max-width: 300px;
  padding: 10px;
}

.bg-preto {
  background-color: #111111;
}
</style>

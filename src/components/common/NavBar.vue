<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark p-0">
      <div class="collapse navbar-collapse sidebar" id="navbarSupportedContent">
        <ul class="navbar-nav flex-row categories-ul">
          <li class="nav-item mx-1">
            <router-link to="/" class="nav-link">Início</router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/tecnologia" class="nav-link"
              >Tecnologia</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/ciencia" class="nav-link"
              >Ciência</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/jogos" class="nav-link"
              >Jogos</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/social" class="nav-link"
              >Redes Sociais</router-link
            >
          </li>
          <li class="nav-item mx-1">
            <router-link to="/categories/computador" class="nav-link"
              >Computador</router-link
            >
          </li>
        </ul>
      </div>
      <div class="container-fluid">
        <router-link to="/">
          <img
            style="width: 40px"
            v-if="mobileWidth"
            src="../../../public/TudoIcon.png"
            alt="logo" />
        </router-link>
        <div class="menu-meneger navbar">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-toggle="offcanvas"
            data-bs-theme="dark">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
    <div
      class="offcanvas offcanvas-end navOffCanvas"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel">
      <ul
        class="navbar-nav ms-auto mb-2 mb-lg-0 d-block w-100 navbar-nav-scroll">
        <router-link
          to="/"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          @click="$router.push('/')">
          <li class="nav-item mx-1">Inicio</li></router-link
        >
        <router-link
          to="/categories/tecnologia"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          @click="$router.push('/categories/tecnologia')">
          <li class="nav-item mx-1">Tecnologia</li></router-link
        >
        <router-link
          to="/categories/ciencia"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          @click="$router.push('/categories/ciencia')">
          <li class="nav-item mx-1">Ciência</li></router-link
        >
        <router-link
          to="/categories/jogos"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          @click="$router.push('/categories/jogos')">
          <li class="nav-item mx-1">Jogos</li></router-link
        >
        <router-link
          to="/categories/social"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          @click="$router.push('/categories/social')">
          <li class="nav-item mx-1">Redes Sociais</li></router-link
        >
        <router-link
          to="/categories/computador"
          class="nav-link sideroute"
          data-bs-dismiss="offcanvas"
          @click="$router.push('/categories/computador')">
          <li class="nav-item mx-1">Computador</li></router-link
        >
      </ul>
      <button class="btn-lg mx-3">
        <router-link
          to="/contact"
          class="nav-link"
          style="color: #d9ef3d"
          data-bs-dismiss="offcanvas"
          >Contato</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
import windowWidthMixin from '@/mixins/windowWidthMixin'
export default {
  name: 'NavBar',
  data() {
    return {
      loading: false,
      mobileWidth: false
    }
  },
  mixins: [windowWidthMixin]
}
</script>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.navOffCanvas {
  background-color: rgb(20, 20, 20);
  display: flex;
  align-items: center !important;
  gap: 3vw;
  padding: 1%;
  width: 60vw;
}

.navOffCanvas img {
  max-width: 30%;
}

.sideroute {
  border: 1px solid white;
  display: flex;
  justify-content: flex-start;
  padding: 2vw;
}

.navOffCanvas a {
  color: white;
}

.center {
  justify-content: end;
}

.navbar-toggler {
  color: #d9ef3d;
}

.btn-lg {
  background-color: transparent;
  color: #d9ef3d;
  border: 1px solid #d9ef3d;
  border-radius: 10px;
}

.navbar-toggler[data-v-4bc99714] {
  color: #0c0c0c;
  padding: 1vw 2vw;
}

.menu-meneger {
  display: flex;
  flex-direction: row-reverse;
}

@media (min-width: 1440px) {
  h3 {
    font-size: 54px !important;
  }

  h4 {
    font-size: 43.2px !important;
  }

  h3 {
    font-size: 43.2px !important;
  }

  p {
    font-size: 18px !important;
  }
}

@media (max-width: 1440px) {
}

@media (max-width: 992px) {
  nav {
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .hide {
    display: none;
  }
  .navbar-toggler {
    color: #161616;
  }

  .navbar-toggler-icon {
    width: 5vw;
  }
}

@media (max-width: 768px) {
}

@media (max-width: 540px) {
  nav {
    padding: 1.5% 7% 1.5% 9%;
  }
  a {
    padding: 0 !important;
    text-align: end;
  }

  .sideroute {
    padding: 2vw !important;
  }

  .container-fluid img {
    width: 125px;
  }

  .btn-lg {
    padding: 0.2rem 1rem;
  }
  .navbar-toggler {
    padding: 0px 10px !important;
  }

  .navbar-toggler[data-v-4bc99714] {
    color: #141414;
    border: 1px solid;
  }
}
</style>

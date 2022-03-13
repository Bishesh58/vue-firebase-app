<template>
  <header>
    <nav>
      <div class="container">
        <div class="logo">
          <router-link :to="{ name: 'Home' }">
            <img src="../assets/logo.png" height="40" width="40" alt="" />
          </router-link>
        </div>
        <div class="nav-links">
          <router-link :to="{ name: 'Home' }" class="nav-item"
            >Home</router-link
          >
          <router-link :to="{ name: 'About' }" class="nav-item"
            >About</router-link
          >
          <router-link :to="{ name: 'Contact' }" class="nav-item"
            >Contact</router-link
          >
          <router-link :to="{ name: 'SignIn' }" class="nav-item"
            >SignIn</router-link
          >
        </div>
        <MenuIcon class="menu-icon" @click="showSideBar" />
        <!-- mobile menu starts -->
        <div v-if="isActive" class="mobile-menu">
          <router-link :to="{ name: 'Home' }" class="nav-item"
            >Home</router-link
          >
          <router-link :to="{ name: 'About' }" class="nav-item"
            >About</router-link
          >
          <router-link :to="{ name: 'Contact' }" class="nav-item"
            >Contact</router-link
          >
          <router-link :to="{ name: 'SignIn' }" class="nav-item"
            >SignIn</router-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/solid";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    MenuIcon,
  },
  methods: {
    showSideBar() {
      console.log("clicked..");
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  },
};
</script>

<style scoped>
.container {
  height: 64px;
  background-color: lightslategray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative;
}

.mobile-menu {
  position: absolute;
  height: 95vh;
  width: 20vw;
  min-width: 200px;
  top: 0;
  left: 0;
  margin-top: 64px;
  padding: 16px;
  background: lightslategray;
  display: flex;
  flex-direction: column;
}

.nav-links {
  padding-right: 16px;
}
.nav-item {
  margin: 4px;
  padding: 8px;
  background: white;
  color: black;
  border-radius: 5px;
  text-decoration: none;
}

.menu-icon {
  height: 32px;
  width: 32px;
  color: white;
  cursor: pointer;
  display: none;
}

@media only screen and (max-width: 750px) {
  .menu-icon {
    display: block;
  }
  .nav-links {
    display: none;
  }
}
</style>

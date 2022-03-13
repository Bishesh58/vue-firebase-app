<template>
  <header>
    <nav>
      <div class="container">
        <div class="logo">
          <router-link :to="{ name: 'Home' }">

            <img src="../assets/logo.png" height="40" width="40" alt="">
          </router-link>
        </div>
        <div class="nav-links">
          <router-link :to="{ name: 'Home' }" class="nav-item">Home</router-link>
          <router-link :to="{ name: 'About' }" class="nav-item">About</router-link>
          <router-link :to="{ name: 'Contact' }" class="nav-item">Contact</router-link>
          <router-link :to="{ name: 'SignIn' }" class="nav-item">SignIn</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { MenuIcon } from "@vue-hero-icons/outline";

export default {};
</script>

<style scoped>
.container{
    height: 64px;
    background-color: lightslategray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.nav-links {
    padding-right: 16px;
}
.nav-item {
    margin: 4px;
    padding: 8px;
    background: white;
    color: black;
    border-radius: 8px;
    text-decoration: none;
}
</style>

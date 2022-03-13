<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navigation />
  <main>
 <RouterView />
  </main>
 
  <Footer />
</template>

<style>
@import "@/assets/base.css";
main { 
  min-height: 100vh;
}
</style>

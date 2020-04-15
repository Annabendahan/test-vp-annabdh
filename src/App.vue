<template>
  <div id="app">
    <Header />
    <main class="main">
      <Destinations />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Destinations from "@/views/Destinations";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Destinations
  }
};
</script>

<style src="@/assets/scss/style.scss" lang="scss"></style>

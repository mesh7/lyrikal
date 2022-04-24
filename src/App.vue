<template>
  <div id="app">
    <HomePageComponent />
  </div>
</template>

<script>
import HomePageComponent from "./components/home/HomePageComponent.vue";

export default {
  name: "App",
  components: {
    HomePageComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.body {
  background: #fff6f6;
  margin: 0;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
  padding: 24px;
}
</style>

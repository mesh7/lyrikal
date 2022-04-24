<template>
  <div class="header">
    <div>
      <div href="#home">Home</div>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Type song title, artist or lyrics"
          name="search"
        />
      </div>
    </div>
    <div class="sign-in-button" href="#contact">Sign in</div>
    <div href="#about">About</div>
  </div>
</template>

<script>
import "./HeaderComponent.scss";

export default {
  name: "HeaderComponent",
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped></style>

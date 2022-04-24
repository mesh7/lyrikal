<template>
  <div class="home-component">
    <div class="container">
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
      <div class="content">
        <div class="content_one">
          Enhancing the experience of music worldwide.
        </div>
        <div class="content_two">
          Find lyrics to your favoutite songs faster
        </div>
        <div class="content_three">
          <div class="content_three_lyrics">
            <div class="content_three_lyrics_icon"></div>
            <div class="content_three_lyrics_header">Lyrics</div>
            <div class="content_three_lyrics_description">Find lyrics</div>
          </div>
          <div class="content_three_artist">
            <div class="content_three_artist_icon"></div>
            <div class="content_three_artist_header">Artists</div>
            <div class="content_three_artist_description">Explore artist</div>
          </div>
          <div class="content_three_album">
            <div class="content_three_album_icon"></div>
            <div class="content_three_album_header">Explore</div>
            <div class="content_three_album_description">Explore album</div>
          </div>
        </div>
        <div class="content_card">
          This is card content
          <button class="button">Button</button>
        </div>
      </div>
      <button id="get-btn">Get button</button>
    </div>
    <div class="footer">
      <div class="footer__item" @click="redirect('contact')">
        <u>Contact</u>
      </div>
      <div class="footer__item" @click="redirect('support')">
        <u>Support</u>
      </div>
    </div>
  </div>
</template>

<script>
import "./HomePageComponent.scss";

export default {
  name: "HomePageComponent",
  methods: {
    created() {},

    getStarted() {
      console.log("hello");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped></style>

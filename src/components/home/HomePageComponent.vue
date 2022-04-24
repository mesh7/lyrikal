<template>
  <div class="home-component">
    <div class="container">
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
      <button @click="getTracks()">Get button</button>
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
import axios from 'axios';

export default {
  name: "HomePageComponent",
  methods: {
    created() {
       console.log("created");
    },

    getTracks() {
      console.log("Hello")
      var url = "https://api.musixmatch.com/ws/1.1/";
      const key = "3caa49624d2a1784e8ba3e886b29f346";
      const country = "us";
      const size = 10;
      const query =
        "chart.tracks.get?apikey=API_KEY&page=1&page_size=_SIZE_&country=COUNTRY_NAME";
      url =
        url +
        query
          .replace("_SIZE_", size)
          .replace("COUNTRY_NAME", country)
          .replace("API_KEY", key);
      axios.get(url).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped></style>

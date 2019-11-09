<template>
  <div class="modalWrapper">
    <div class="innerWrapper">
      <img :src="`http://image.tmdb.org/t/p/w300//${movie.poster_path}`" alt />
      <div class="rightSection">
        <div class="mainDescription">
          <h1>{{movie.title}}</h1>
          <p class="description">{{movie.overview}}</p>
        </div>
        <div class="details">
          <p>
            <span class="genres" v-for="genre of genres" :key="genre">{{genre}}</span>
          </p>
          <p class="country">Original language: {{movie.original_language.toUpperCase()}}</p>
          <a :href="imdbLink">Show on IMDB</a>
        </div>
      </div>
    </div>
    <div class="close" @click="closeModal()"></div>
  </div>
</template>

<script>
import axios from 'axios';
import idToGenre from '../../genres.json';
import credentials from '../../credentials.json';

export default {
  props: {
    movie: Object
  },
  data() {
    return {
      genres: this.movie.genre_ids.map(genreId => idToGenre[genreId]),
      imdbLink: ''
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.movie.id}?api_key=${credentials.apiToken}`
      )
      .then(data => {
        this.imdbLink = `https://www.imdb.com/title/${data.data.imdb_id}`;
      });
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.modalWrapper {
  position: fixed;
  color: white;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 80%;
  padding: 50px;
  background-color: #42b983;
  border-radius: 5px;
  .innerWrapper {
    display: flex;
    justify-content: space-evenly;

    .rightSection {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 40px;

      .genres {
        margin-right: 10px;
      }
    }
  }

  .close {
    position: absolute;
    top: 20px;
    right: 30px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 20px;
      width: 4px;
      background: white;
      display: block;
      border-radius: 1px;
    }

    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>

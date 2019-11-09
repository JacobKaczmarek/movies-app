<template>
  <div class="moviesListWrapper">
    <h2>Search for a movie</h2>
    <b-form-input placeholder="Movie title" v-model="title"></b-form-input>
    <b-button @click="searchMovie()">Search</b-button>
    <div class="list-container">
      <movieCard v-for="movie in movies" :key="movie.id" :movie="movie"></movieCard>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { apiToken } from '../../credentials.json';
import movieCard from './movieCard.vue';

const apiUrl = 'https://api.themoviedb.org/3';

export default {
  components: {
    movieCard
  },
  data() {
    return {
      movies: [],
      title: ''
    };
  },
  methods: {
    searchMovie() {
      // Get movies list
      axios
        .get(`${apiUrl}/search/movie?api_key=${apiToken}&query=${this.title}`)
        .then(async data => {
          this.movies = data.data.results;
          console.log(this.movies);
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.moviesListWrapper {
  width: 70%;
  margin: 23vh auto;

  input {
    margin: 30px 0 30px;
  }

  .list-container {
    display: grid;
    grid-template-columns: auto;

    @media screen and (min-width: 765px) {
      grid-template-columns: auto auto;
    }
    @media screen and (min-width: 1024px) {
      grid-template-columns: auto auto auto;
    }
  }
}
</style>

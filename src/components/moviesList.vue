<template>
  <div class="moviesListWrapper" v-bind:class="{resultsAvailable: stage}">
    <h2 v-if="!stage">Search for a movie</h2>
    <b-form-input @input="handleInput()" placeholder="Movie title" v-model="title"></b-form-input>
    <div class="listContainer">
      <movieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @click.native="handleModalOpen(movie)"
      ></movieCard>
    </div>
    <h1 class="noResults" v-if="stage == 1 && movies.length == 0">No results.</h1>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
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
      title: '',
      stage: 0
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function() {
      axios
        .get(`${apiUrl}/search/movie?api_key=${apiToken}&query=${this.title}`)
        .then(async data => {
          this.movies = data.data.results;
          this.stage = 1;
        })
        .catch(err => console.error(err));
    }, 500),

    handleModalOpen(movie) {
      this.$emit('openModal', movie);
    }
  }
};
</script>

<style lang="scss" scoped>
.moviesListWrapper {
  width: 70%;
  margin: 23vh auto;
  transition: transform 0.3s ease;

  input {
    margin: 30px auto 0;
    width: 50%;
  }

  .listContainer {
    display: grid;
    grid-template-columns: auto;

    @media screen and (min-width: 765px) {
      grid-template-columns: auto auto;
    }
    @media screen and (min-width: 1024px) {
      grid-template-columns: auto auto auto;
    }
  }

  .noResults {
    margin-top: 20vh;
  }
}

.resultsAvailable {
  transform: translateY(-140px);
}
</style>

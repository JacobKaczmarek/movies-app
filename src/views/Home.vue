<template>
  <div class="home">
    <moviesList />
  </div>
</template>

<script>
import moviesList from '../components/moviesList.vue';

export default {
  name: 'home',
  components: {
    moviesList
  }
};
</script>

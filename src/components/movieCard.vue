<template>
  <div class="movieCardWrapper">
    <img :src="`http://image.tmdb.org/t/p/w154//${movie.poster_path}`" alt />
    <p>
      <b>{{ movie.title }}</b>
    </p>
    <p>Popularity: {{ movie.popularity }}</p>
    <p>{{ movie.vote_count }} Votes</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  },
  data() {
    return {
      posterUrl: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.movieCardWrapper {
  color: white;
  cursor: pointer;
  width: 250px;
  padding: 30px;
  margin: 30px auto;
  background: #2c3e50;
  border-radius: 5px;

  img {
    margin: 15px;
  }
}
</style>

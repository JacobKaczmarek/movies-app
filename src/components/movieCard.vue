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
  },
  methods: {
    getPoster() {}
  }
};
</script>

<style lang="scss" scoped>
.movieCardWrapper {
  color: white;
  width: 250px;
  padding: 30px;
  margin: 30px auto;
  background: #333333;
  border-radius: 3px;

  img {
    margin: 15px;
  }
}
</style>

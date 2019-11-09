<template>
  <div class="home">
    <moviesList @openModal="handleModalOpen($event)" />
    <modal v-if="modalOpen" @close="modalOpen = false" :movie="modalData" />
  </div>
</template>

<script>
import moviesList from '../components/moviesList.vue';
import modal from '../components/modal.vue';

export default {
  name: 'home',
  components: {
    moviesList,
    modal
  },
  data() {
    return {
      modalOpen: false,
      modalData: {}
    };
  },
  methods: {
    handleModalOpen(event) {
      this.modalData = event;
      this.modalOpen = true;
    }
  }
};
</script>

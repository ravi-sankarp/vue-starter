<template>
  <div class="user-home-container">
    <navbar />
    <carousel />
  </div>
</template>
<script>
import Carousel from '@/components/User/Carousel.vue';
import Navbar from '@/components/User/NavBar.vue';

export default {
  name: 'HomePage',
  components: {
    Carousel,
    Navbar
  },
  data() {
    return {
      imgUrls: []
    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import '@/assets/scss/vars';

.user-home-container {
  font-family: 'Inter', sans-serif !important;

  .home-carousel {
    height: clamp(100vh, 100vh, 100vh);

    @media (max-width: $md) {
      height: clamp(70vh, 70vh, 70vh);
    }

    @media (max-width: $sm) {
      height: clamp(50vh, 50vh, 50vh);
    }
  }

  .main-content {
    section {
      min-height: 40vh;

      h3 {
        font-size: 2rem;
        text-align: center;
      }

      h5 {
        font-weight: 550;
        opacity: 0.5;
        white-space: wrap;
        max-width: 30rem;
        text-align: center;
      }
    }
  }

  .whatsapp-btn {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    left: 40px;
    background-color: #0dc900;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 1px 1px 20px 3px rgba(0, 0, 0, 0.2);
    transition: background 0.4s ease;
    z-index: 1000;

    @media (max-width: $md) {
      bottom: 10px;
      left: 20px;
      width: 40px;
      height: 40px;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    &:hover {
      background-color: #0fdb00;
    }

    &:active {
      transform: translateY(0.0825rem);
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;

      @media (max-width: $md) {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
</style>

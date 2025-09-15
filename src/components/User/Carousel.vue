<template>
  <div class="carousel">
    <Slide v-for="(slide, index) in carouselSlides" :key="index">
      <div v-show="currentSlide === index + 1" class="slide-info">
        <img :src="slide" alt="" />
      </div>
    </Slide>

    <!-- Navigation -->
    <div v-if="navEnabled" class="navigate">
      <div class="toggle-page left">
        <left-icon @click="prevSlide" />
      </div>
      <div class="toggle-page right">
        <right-icon @click="nextSlide" />
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="pagintationEnabled" class="pagination">
      <span
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
        @click="goToSlide(index)"
      >
      </span>
    </div>
  </div>
</template>

<script>
import LeftIcon from '@/components/common/icons/ChevronLeft.vue';
import RightIcon from '@/components/common/icons/ChevronRight.vue';
import Slide from './Slide.vue';
export default {
  components: { Slide, LeftIcon, RightIcon },
  props: {
    carouselSlides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentSlide: 1,
      getSlideCount: null,
      autoPlayEnabled: true,
      timeoutDuration: 5000,
      pagintationEnabled: true,
      navEnabled: true
    };
  },
  mounted() {
    this.getSlideCount = document.querySelectorAll('.slide').length;
    this.autoPlay();
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.getSlideCount) {
        this.currentSlide = 1;
        return;
      }
      this.currentSlide += 1;
    },
    prevSlide() {
      if (this.currentSlide === 1) {
        this.currentSlide = 1;
        return;
      }
      this.currentSlide -= 1;
    },
    goToSlide(index) {
      this.currentSlide = index + 1;
    },
    autoPlay() {
      setInterval(() => {
        this.nextSlide();
      }, this.timeoutDuration);
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/vars';

.carousel {
  position: relative;
  height: 100%;

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      width: clamp(100%, 100%, 100vw);
      height: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
      @media (max-width: $md) {
        object-fit: cover;
      }
    }
  }
  .navigate {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    .toggle-page {
      display: flex;
      flex: 1;
      span {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background-color: var(--white);
        color: var(--black);
      }
    }

    .right {
      justify-content: flex-end;
    }
  }

  .pagination {
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;

    span {
      cursor: pointer;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .active {
      background-color: var(--black);
    }
  }
}
</style>

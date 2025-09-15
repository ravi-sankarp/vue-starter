<template>
  <Teleport to="body">
    <div class="loader-container center">
      <SpinnerIcon />
    </div>
  </Teleport>
</template>
<script>
import SpinnerIcon from './icons/Spinner.vue';
export default {
  name: 'Loader',
  components: { SpinnerIcon },
  data() {
    return {
      rootELe: null
    };
  },
  mounted() {
    this.rootELe = document.getElementById('app');
    if (this.rootELe) {
      this.rootELe.style.pointerEvents = 'none';
    }
  },
  beforeUnmount() {
    if (this.rootELe) {
      this.rootELe.style.removeProperty('pointer-events');
    }
  }
};
</script>
<style>
.loader-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--overlay);
  z-index: 99999;
  pointer-events: none;
  overflow: hidden;
}
</style>

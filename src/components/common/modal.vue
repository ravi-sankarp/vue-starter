<template>
  <teleport to="body">
    <transition name="pop">
      <div v-show="open" class="modal" @mousedown="handleOutsideClick">
        <div class="modal-body">
          <div class="modal-header v-center space-between">
            <h4 class="weight-500">
              {{ title }}
            </h4>
            <close-icon :size="16" class="icon-pointer px-1 py-1" @click="$emit('close')" />
          </div>
          <div v-if="open" class="modal-content"><slot /></div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script>
import CloseIcon from './icons/Close.vue';
export default {
  name: 'ModalComponent',
  components: { CloseIcon },
  props: {
    title: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  mounted() {
    document.addEventListener('keydown', this.closeOnEscapeKey);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.closeOnEscapeKey);
  },
  methods: {
    closeOnEscapeKey(event) {
      if (event.key === 'Escape') {
        this.$emit('close');
      }
    },
    handleOutsideClick(e) {
      if (e.target.classList.contains('modal')) {
        this.$emit('close');
      }
    }
  }
};
</script>
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: var(--overlay-black);
  display: flex;
  justify-content: center;
  align-items: center;

  &-body {
    position: relative;
    border-radius: 0.25rem;
    max-width: 90vw;
    animation: popIn 0.1s ease-in;
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0.0625rem 0.1875rem,
      rgba(0, 0, 0, 0.05) 0px 2.25rem 1.75rem -0.4375rem,
      rgba(0, 0, 0, 0.04) 0px 1.0625rem 1.0625rem -0.4375rem;
  }
  &-header {
    color: var(--text-color-1);
    padding: 1rem calc(0.6875rem) 1rem 1rem;
    position: sticky;
    z-index: 15;
  }
  &-content {
    max-height: 75vh;
    padding: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .pop-leave-to,
  .pop-leave-from {
    animation: popIn 0.1s ease-out reverse;
  }

  .pop-enter-from,
  .pop-leave-to {
    animation: popIn 0.1s ease-in;
  }
  @keyframes popIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>

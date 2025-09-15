<template>
  <div v-if="open" class="menu-container">
    <div class="menu-body py-2">
      <h4 class="my-2 ml-3">{{ title }}</h4>
      <hr />
      <div class="mb-4">
        <slot />
      </div>
      <div class="clear flex-end mr-3" @click="$emit('clear')"><span>Clear All</span></div>
      <div class="space-around px-2 my-1">
        <button class="btn btn-outline" @click.stop="$emit('close')">Cancel</button>
        <button class="btn" @click.stop="$emit('apply')">Apply</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuBar',
  props: {
    open: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    forFilter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'apply', 'clear'],
  mounted() {
    document.addEventListener('mousedown', this.listener);
    document.addEventListener('touchstart', this.listener);
  },
  beforeUnmount() {
    document.removeEventListener('mousedown', this.listener);
    document.removeEventListener('touchstart', this.listener);
  },
  methods: {
    listener(event) {
      if (!(this.$el == event.target || this.$el?.contains(event.target))) {
        this.$emit('close');
      }
    }
  }
};
</script>
<style lang="scss">
.menu-container {
  position: relative;
  color: var(--black);
  z-index: 100000;
  .menu-body {
    position: absolute;
    height: max-content;
    z-index: 100000;
    background-color: var(--white);
    top: 1rem;
    right: 1%;
    border: 0.0625rem solid rgb(233, 236, 239);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    min-width: 14rem;
    border-radius: 0.25rem;
    hr {
      opacity: 0.5;
    }
    h4 {
      opacity: 0.7;
      font-weight: 500;
      margin-right: auto;
      padding-bottom: 5px;
      cursor: auto;
      user-select: none;
    }
    div {
      button.btn {
        max-height: 1.5rem;
      }
      &.clear {
        margin-left: auto;
        cursor: pointer;
        span {
          display: block;
          font-size: 12px;
          font-weight: 500;
          margin-left: auto;
          color: var(--brand-color);
          text-decoration: underline;
        }
      }
    }
  }
}
</style>

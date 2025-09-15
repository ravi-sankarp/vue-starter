<template>
  <router-link :to="to">
    <slot name="icon" />
    <transition name="fade">
      <span>
        <slot name="title" />
      </span>
    </transition>
  </router-link>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true }
  }
};
</script>

<style scoped lang="scss">
.router-link-active {
  background-color: #f6f8fe;
}
</style>

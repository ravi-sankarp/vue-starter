<template>
  <span
    v-bind="$attrs"
    :aria-hidden="!title"
    :aria-label="title"
    class="center pointer"
    role="img"
    @click="$emit('click', $event)"
  >
    <svg viewBox="0 0 24 24" :fill="fillColor" class="center" :width="size" :height="size">
      <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ChevronLeftIcon',
  props: {
    title: {
      type: String,
      default: ''
    },
    fillColor: {
      type: String,
      default: 'currentColor'
    },
    size: {
      type: Number,
      default: 15
    }
  },
  emits: ['click']
};
</script>

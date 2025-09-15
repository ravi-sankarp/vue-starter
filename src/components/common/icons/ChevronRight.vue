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
      <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'ChevronRighttIcon',
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

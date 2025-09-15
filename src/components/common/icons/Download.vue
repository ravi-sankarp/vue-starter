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
      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'DownloadIcon',
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

<template>
  <span
    v-bind="$attrs"
    :aria-hidden="!title"
    :aria-label="title"
    class="center"
    role="img"
    @click="$emit('click', $event)"
  >
    <svg viewBox="0 0 24 24" :fill="fillColor" class="center" :width="size" :height="size">
      <path
        d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
      >
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'SaveIcon',
  props: {
    title: {
      type: String
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

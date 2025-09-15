<template>
  <span
    v-bind="$attrs"
    :aria-hidden="!title"
    :aria-label="title"
    class="center"
    role="img"
    @click="$emit('click', $event)"
  >
    <svg :stroke="fillColor" :width="size" :height="size" viewBox="0 0 38 38">
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(2.5 2.5)" stroke-width="5">
          <circle stroke-opacity=".5" cx="16" cy="16" r="16"></circle>
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </g>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'SpinnerIcon',
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: '#228be6'
    },
    size: {
      type: Number,
      default: 50
    }
  },
  emits: ['click']
};
</script>

<template>
  <div class="card-container gap-1 flex column">
    <div class="card-icon">
      <slot name="icon" />
    </div>
    <div class="content-body">
      <h3 class="mb-4">
        <slot name="title" />
      </h3>
      <p>
        <slot name="content" />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardComponent'
};
</script>
<style lang="scss" scoped>
.card-container {
  border-radius: 0.2rem;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem,
    rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  padding: 1.25rem;
  .content-body {
    h3 {
      font-size: 1.2rem;
      text-align: center;
    }
    p {
      font-weight: 550;
      opacity: 0.7;
      text-align: center;
      white-space: wrap;
      max-width: 17rem;
      text-align: center;
      font-size: 0.85rem;
    }
  }
}
</style>

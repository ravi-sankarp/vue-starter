<template>
  <div class="container center">
    <div class="flex column">
      <h1>The Page you are looking for was not found</h1>
      <br />
      <div class="flex center">
        <router-link to="/"> Click Here To Go Back</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
div.container {
  min-height: 100vh;
  a {
    color: auto;
    color: var(--brand-color);
  }
}
</style>

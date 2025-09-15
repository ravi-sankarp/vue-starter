<template>
  <div class="alert-container">
    <div class="alert-icon">
      <alert-icon fill-color="#d32f2f" />
    </div>
    <p class="alert-content"><slot /></p>
  </div>
</template>
<script>
import AlertIcon from './icons/Alert.vue';
export default {
  name: 'AlertBox',
  components: { AlertIcon }
};
</script>
<style lang="scss">
.alert-container {
  width: 100%;
  max-height: 45px;
  background-color: rgb(253, 237, 237);
  border-radius: 4px;
  box-shadow: none;
  font-weight: 400;
  font-size: 0.775rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgb(95, 33, 32);
  padding: 10px 10px;
  display: flex;
  align-items: center;
  .alert-icon {
    font-size: 0.5rem;
  }
  .alert-content {
    margin-left: 15px;
  }
}
</style>

<template>
  <div class="admin-container">
    <Sidebar />
    <router-view />
  </div>
</template>
<script>
import Sidebar from '../../components/common/Sidebar/Sidebar.vue';
export default {
  name: 'AdminIndex',
  components: { Sidebar }
};
</script>
<style lang="scss">
.admin-container {
  display: flex;
  overflow: hidden;

  .app-top-bar {
    height: 60px;
    margin-bottom: 0;
    background: #f6f8fe;
    border-bottom: 1px solid var(--border);

    button.btn {
      max-height: 1.8rem;
      margin-right: 1.4rem;
    }
  }
}
</style>

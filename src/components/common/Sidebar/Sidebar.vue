<template>
  <div v-if="!$route.path.includes('login')" class="sidebar-container">
    <aside class="sidebar">
      <img class="sidebar-img" src="~@/assets/images/logo.png" alt="Introlines" />
      <div class="sidebar-items">
        <SidebarLink v-if="isAdmin" to="/admin/dashboard">
          <template #icon>
            <home-icon />
          </template>
          <template #title> Dashboard </template>
        </SidebarLink>
        <SidebarLink to="/admin/cargo">
          <template #icon>
            <cargo-icon />
          </template>
          <template #title> Cargo </template>
        </SidebarLink>
        <SidebarLink to="/admin/shipments">
          <template #icon>
            <shipment-icon />
          </template>
          <template #title> Shipments </template>
        </SidebarLink>
        <SidebarLink v-if="isAdmin" to="/admin/employees">
          <template #icon>
            <employee-icon />
          </template>
          <template #title> Employees </template>
        </SidebarLink>
        <SidebarLink to="/admin/profile">
          <template #icon>
            <profile-icon />
          </template>
          <template #title> Profile </template>
        </SidebarLink>
        <SidebarLink v-if="isAdmin" to="/admin/settings">
          <template #icon>
            <settings-icon />
          </template>
          <template #title> Settings </template>
        </SidebarLink>
      </div>
      <div class="sidebar-logout flex" @click="open = true">
        <logout-icon />
        <span>Logout</span>
      </div>
      <modal title="Confirm Logout" :open="open" @close="open = false">
        <div>
          <span>Are you sure you want to logout </span>
          <div class="flex-end gap-1 mt-5">
            <Button class="btn-black" @click="open = false">Cancel</Button>
            <Button class="btn-error" @click="handleLogout">Confirm</Button>
          </div>
        </div>
      </modal>
    </aside>
  </div>
</template>

<script>
import Config from '@/config';
import Modal from '@/components/common/modal.vue';
import Button from '@/components/common/button.vue';
import HomeIcon from '../icons/Home.vue';
import CargoIcon from '../icons/Cargo.vue';
import EmployeeIcon from '../icons/Employee.vue';
import ShipmentIcon from '../icons/Shipment.vue';
import LogoutIcon from '../icons/Logout.vue';
import ProfileIcon from '../icons/Profile.vue';
import SettingsIcon from '../icons/Settings.vue';
import SidebarLink from './SidebarLink.vue';
export default {
  name: 'SideBar',
  components: {
    SidebarLink,
    HomeIcon,
    CargoIcon,
    EmployeeIcon,
    ShipmentIcon,
    LogoutIcon,
    ProfileIcon,
    SettingsIcon,
    Modal,
    Button
  },
  data: () => ({
    open: false
  }),
  computed: {
    isAdmin() {
      return localStorage.getItem(Config.localstorageKeys.USER_ROLE)==='admin';
    }
  },
  methods: {
    handleLogout() {
      localStorage.clear();
      window.location = '/admin/login';
    }
  }
};
</script>

<style lang="scss">
.sidebar-container {
  color: var(--brand-color);
  background-color: var(--white);
  min-width: 12rem;
  max-width: 12rem;
  .sidebar {
    height: 100vh;
    position: fixed;
    min-width: 12rem;
    max-width: 12rem;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    // padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 0.0625rem solid var(--border);

    &-img {
      height: 40px;
      width: 100px;
      object-fit: cover;
    }
    &-items {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        width: 100%;
        display: flex;
        padding: 0.5rem 0.5rem;
        padding-left: 1rem;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
        color: var(--black);
        &:hover {
          background-color: #f6f8fe;
          border-radius: 0.25rem;
        }
      }
    }
    &-logout {
      cursor: pointer;
      width: max-content;
      margin-top: auto;
      margin-bottom: 1rem;
      padding: 0.3rem;
      color: var(--black);
      &:hover {
        background-color: #f6f8fe;
        border-radius: 0.25rem;
      }
    }
    .collapse-icon {
      position: absolute;
      bottom: 0;
      padding: 0.75em;
      color: rgba(255, 255, 255, 0.7);
      transition: 0.2s linear;
    }

    .rotate-180 {
      transform: rotate(180deg);
      transition: 0.2s linear;
    }
  }
}
</style>

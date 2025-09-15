<template>
  <div class="nav-container">
    <nav class="flex v-center space-between bg-active">
      <div class="nav-icon">
        <a href="#">
          <img class="sidebar-img" src="~@/assets/images/logo.png" alt="" />
        </a>
      </div>
      <div class="nav-links flex gap-2" :class="{ 'bg-active': showNavbarBg }">
        <a href="#tracking"> Track </a>
        <a href="#services"> Services </a>
        <a href="#pricing"> Pricing </a>
        <a href="#working"> How we works</a>
        <a href="#contact"> Contact </a>
      </div>
      <div class="mobile-menu">
        <div class="menu-icon" @click="toggleDrawer">
          <span v-show="!showDrawer" class="hamburger-icon">
            <svg viewBox="0 0 24 24" width="26" height="26">
              <path fill="#000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
            </svg>
          </span>

          <close-icon v-show="showDrawer" class="close-icon" />
          <div class="mobile-drawer" :class="{ open: showDrawer }">
            <div class="drawer-items flex column center pt-14">
              <a href="#tracking"> Track </a>
              <a href="#services"> Services </a>
              <a href="#pricing"> Pricing </a>
              <a href="#working"> How we work </a>
              <a href="#contact"> Contact </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import CloseIcon from '@/components/common/icons/Close.vue';
export default {
  components: { CloseIcon },
  data() {
    return {
      showNavbarBg: false,
      showDrawer: false
    };
  },
  created() {
    if (window.screen.width < 768) {
      this.showNavbarBg = true;
    } else {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    }
  },
  beforeUnmount() {
    if (window.screen.width >= 768) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      this.showNavbarBg = window.scrollY > 70;
    },
    toggleDrawer() {
      this.showDrawer = !this.showDrawer;
    }
  }
};
</script>
<style lang="scss">
.nav-container {
  width: 100vw;
  max-width: 100vw;

  nav {
    z-index: 99999;
    position: fixed;
    width: 100%;
    top: 0;
    height: 3.5rem;
    transition: all 200ms ease-in-out;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;

    &.bg-active {
      background: var(--brand-color);
      border-bottom: 0.0625rem solid rgb(233, 236, 239);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-icon {
      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
    }

    .nav-links {
      font-size: 0.8rem;


      &.bg-active {
        color: var(--white);
      }

      .a-active {
        font-weight: 500;
      }
    }

    .mobile-menu {
      display: none;
      pointer-events: none;
      position: relative;


      .menu-icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;

        .hamburger-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      }

      .mobile-drawer {
        background-color: rgba(var(--brand-rgb), 0.97);
        width: 70vw;
        position: fixed;
        height: 96vh;
        left: 0;
        top: 45px;
        transition: all 0.4s ease-in-out;
        transform: translateX(-100%);

        &.open {
          transform: translateX(0);
        }

        .drawer-items {
          gap: 3rem;
          color: var(--white);
          text-transform: uppercase;

          a {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="status-dropdown-container" @click="showItems = true">
    <div class="cargo-status-container">
      <span v-if="forShipment && currentStatus < 2" class="status">
        {{ cargoStatusList[currentStatus]?.status }}
      </span>
      <span v-else-if="!forShipment && currentStatus !== 6 && currentStatus >= 2" class="status">
        {{ cargoStatusList[currentStatus]?.status }}
      </span>
      <span v-else>
        {{ cargoStatusList[currentStatus]?.status }}
      </span>
    </div>
    <div
      v-if="showItems && forShipment && currentStatus < 2"
      ref="shipmentmenu"
      class="status-items"
    >
      <h4 class="my-2 ml-3">Select Status</h4>
      <div
        v-for="status of statusList"
        :key="status?.id"
        :class="{ disabled: currentStatus === status.id || status.id < currentStatus - 1 }"
        @click.stop="handleStatusSelection(status.id)"
      >
        <input
          :disabled="currentStatus === status.id"
          type="checkbox"
          class="center"
          :checked="status.id === selectedStatusId"
        />
        <span>
          {{ status?.status }}
        </span>
      </div>
      <div class="flex gap-1">
        <Button class="btn-outline" @click.stop="showItems = false">Cancel</Button>
        <Button :disabled="!selectedStatusId" @click.stop="handleSelectStatus">Select</Button>
      </div>
    </div>
    <div
      v-if="showItems && !forShipment && currentStatus !== 6 && currentStatus >= 2"
      ref="cargomenu"
      class="status-items"
    >
      <h4 class="my-2 ml-3">Select Status</h4>

      <div
        v-for="status of statusList"
        :key="status?.id"
        :class="{ disabled: currentStatus === status.id || status.id <= currentStatus - 1 }"
        @click.stop="handleStatusSelection(status.id)"
      >
        <input
          :disabled="currentStatus === status.id || status.id <= currentStatus - 1"
          type="checkbox"
          class="center"
          :checked="status.id === selectedStatusId"
        />
        <span>
          {{ status?.status }}
        </span>
      </div>
      <div class="flex gap-1">
        <Button class="btn-outline" @click.stop="showItems = false">Cancel</Button>
        <Button :disabled="!selectedStatusId" @click.stop="handleSelectStatus">Select</Button>
      </div>
    </div>
  </div>
</template>
<script>
import Button from './button.vue';
import { CargoStatus } from '@/constants';
export default {
  components: { Button },
  props: {
    currentStatus: {
      type: Number,
      default: 0
    },
    destination: {
      type: String,
      default: 'Dubai'
    },
    forShipment: {
      type: Boolean,
      required: true
    }
  },
  emits: ['selected-id'],
  data() {
    return {
      showItems: false,
      statusList: [],
      selectedStatusId: null,
      cargoStatusList: []
    };
  },
  mounted() {
    this.statusList = Object.values(CargoStatus);
    this.cargoStatusList = JSON.parse(JSON.stringify(CargoStatus));
    if (this.forShipment) {
      this.statusList.length = 3;
    } else {
      this.statusList.splice(0, 3);
    }
    if (!this.forShipment && this.destination?.toLowerCase() !== 'uae') {
      this.statusList.unshift({
        id: 3,
        status: `Shipped to ${this.destination}`
      });
      this.statusList.unshift({
        id: 4,
        status: `Arrived in ${this.destination}`
      });
      this.cargoStatusList[3] = {
        id: 3,
        status: `Shipped to ${this.destination}`
      };
      this.cargoStatusList[4] = {
        id: 4,
        status: `Arrived in ${this.destination}`
      };
    }

    document.addEventListener('mousedown', this.listener);
    document.addEventListener('touchstart', this.listener);
  },
  beforeUnmount() {
    document.removeEventListener('mousedown', this.listener);
    document.removeEventListener('touchstart', this.listener);
  },
  methods: {
    handleStatusSelection(id) {
      if (id === this.currentStatus || id < this.currentStatus - 1) {
        return;
      } else if (id === this.selectedStatusId) {
        this.selectedStatusId = null;
      } else {
        this.selectedStatusId = id;
      }
    },
    handleSelectStatus() {
      if (!this.selectedStatusId) {
        return;
      }
      this.$emit('selected-id', this.selectedStatusId);
      this.showItems = false;
      this.selectedStatusId = null;
    },
    listener(event) {
      if (this.showItems) {
        if (this.forShipment) {
          if (
            !(
              this.$refs.shipmentmenu == event.target ||
              this.$refs.shipmentmenu.contains(event.target)
            )
          ) {
            this.showItems = false;
          }
        } else {
          if (
            !(this.$refs.cargomenu == event.target || this.$refs.cargomenu.contains(event.target))
          ) {
            this.showItems = false;
          }
        }
      }
    }
  }
};
</script>
<style lang="scss">
.cargo-status-container {
  position: relative;
  background: rgba(var(--brand-rgb));
  color: var(--white);
  border-radius: 10px;
  padding: 0.2rem 0.5rem;
  min-width: max-content;
  // max-width: 8rem;
  max-height: max-content;
  span {
    color: var(--white);
    border: none;
    background: transparent;
    text-align: center;
    cursor: pointer;
    &.status {
      padding-right: 0.7rem;
      &::after {
        content: '';
        display: block;
        height: 1em;
        width: 1em;
        background-image: url('/src/assets/images/select-white.svg');
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 0.25em;
        right: 0.35em;
      }
    }
  }
}
.status-dropdown-container {
  position: relative;
  color: var(--black);
  max-width: max-content;
  cursor: pointer;
  .input-container {
    position: relative;
    background: rgba(var(--brand-rgb));
    color: var(--white);
    border-radius: 10px;
    padding: 0.2rem 0.5rem;
    span {
      color: var(--white);
      border: none;
      background: transparent;
      text-align: center;
      cursor: pointer;
    }
  }
  .status-items {
    z-index: 1000;
    position: absolute;
    min-width: max-content;
    height: max-content;
    background-color: var(--white);
    top: 1.5rem;
    right: -58px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border: 0.0625rem solid rgb(233, 236, 239);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0.0625rem 0.1875rem,
      rgba(0, 0, 0, 0.05) 0px 1.25rem 1.5625rem -0.3125rem,
      rgba(0, 0, 0, 0.04) 0px 0.625rem 0.625rem -0.3125rem;
    border-radius: 0.25rem;
    h4 {
      opacity: 0.7;
      font-weight: 500;
      margin-right: auto;
      cursor: auto;
      user-select: none;
    }
    div {
      padding: 5px 10px;
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      align-items: center;
      width: 100%;
      input {
        margin: 0;
        width: unset;
      }
      &:hover {
        background-color: rgba(17, 25, 39, 0.04);
      }
      &.disabled {
        opacity: 0.8;
        &:hover {
        }
      }
      &:last-child {
        &:hover {
          background-color: inherit;
        }
      }
      span {
        display: block;
        white-space: nowrap;
        width: 100%;
      }
    }
  }
}
</style>

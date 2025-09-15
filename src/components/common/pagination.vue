<template>
  <div class="pagination my-2 flex">
    <button
      :disabled="pageNumber === 1"
      class="btn btn-outline"
      @click="$emit('select-page', pageNumber - 1)"
    >
      &#60;
    </button>
    <div v-for="num in numberArray" :key="num.id">
      <span v-if="num === -1"> ... </span>
      <button
        v-else
        class="btn"
        :class="{
          'btn-outline': num !== pageNumber
        }"
        @click="$emit('select-page', num)"
      >
        {{ num }}
      </button>
    </div>
    <button
      :disabled="pageNumber === totalPage || totalPage === 0"
      class="btn btn-outline"
      @click="$emit('select-page', pageNumber + 1)"
    >
      &#62;
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    length: {
      type: Number,
      default: 0
    },
    pageNumber: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 7
    }
  },
  emits: ['select-page'],
  computed: {
    totalPage() {
      return parseInt(this.length / this.perPage) + (this.length % this.perPage > 0 ? 1 : 0);
    },
    numberArray() {
      const totalButtonCount = this.totalPage;
      if (totalButtonCount <= 3) {
        return [...Array(totalButtonCount).keys()].map((i) => i + 1);
      }
      if (this.pageNumber === 1) {
        return [1, 2, -1, totalButtonCount];
      }
      if (this.pageNumber === 2) {
        return [1, 2, 3, -1, totalButtonCount];
      }
      if (this.pageNumber === totalButtonCount) {
        return [1, -1, totalButtonCount - 1, totalButtonCount];
      }
      if (this.pageNumber === totalButtonCount - 1) {
        return [1, -1, totalButtonCount - 2, totalButtonCount - 1, totalButtonCount];
      }
      return [
        1,
        -1,
        this.pageNumber - 1,
        this.pageNumber,
        this.pageNumber + 1,
        -1,
        totalButtonCount
      ];
    }
  }
};
</script>

<style lang="scss">
.pagination {
  align-items: center;
  gap: 0.3rem;
  button {
    min-height: 1.5rem;
    min-width: 1.5rem;
    margin: 0;
    padding: 0.1rem 0.5rem;
  }
}
</style>

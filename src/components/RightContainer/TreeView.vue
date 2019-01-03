<template>
  <div>
    <p>Hierarchy</p>
    <vue-nestable v-model="nestableItems">
      <vue-nestable-handle
        slot-scope="{ item }"
        :item="item">
        {{ item.text }}
      </vue-nestable-handle>
    </vue-nestable>

  </div>

</template>

<script>
  import SortableTree from 'vue-sortable-tree';

  export default {
    name: 'tree-view',
    computed: {
      nestableItems() {
        return this.$store.getters.getNestableItems;
      }
    }
  }
</script>

<style>

</style>
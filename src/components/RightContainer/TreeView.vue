<template>
  <div>
    <div>
      <p id="tree-view-header" class="md-title">Component Tree</p>
    </div>
    <div>
      <vue-nestable 
        v-model="nestableItems"
      >
        <div slot="placeholder" />
        <vue-nestable-handle
          slot-scope="{ item }"
          :item="item"
        >
          <i class="fas fa-user" />
          {{ item.text }}
        </vue-nestable-handle>
      </vue-nestable>
    </div>
    <div id="export-components-container">
      <!-- ENABLED Export Components button -->
      <md-button 
        class="md-raised md-primary md-accent"
        @click="createFiles"
        v-if="componentsExist> 0" 
      >Export Components</md-button>
      <!-- DISABLED Export Components button -->
      <md-button 
        class="md-raised md-primary md-accent" 
        v-else disabled
      >Export Components</md-button>
    </div>
  </div>
</template>

<script>
  import createFilesFunc from '../../utils/createFiles.util.js';

  export default {
    name: 'tree-view',
    computed: {
      nestableItems() {
        return this.$store.getters.getNestableItems;
      },
      componentsExist() {
        return this.$store.getters.getComponents.length
      }
    },
    methods: {
      createFiles() {
        createFilesFunc(this.$store.state.components);
      }
    }
  }
</script>

<style>
  #tree-view-header {
    text-align: center;
    margin: none;
  }
  .nestable {
    position: relative;
  }
  .nestable .nestable-list {
    margin: 0;
    padding: 0 0 0 40px;
    list-style-type: none;
  }
  .nestable > .nestable-list {
    padding: 0;
  }
  .nestable-item,
  .nestable-item-copy {
    margin: 5px 0 0;
  }
  .nestable-item:first-child,
  .nestable-item-copy:first-child {
    margin-top: 0;
  }
  .nestable-item .nestable-list,
  .nestable-item-copy .nestable-list {
    margin-top: 5px;
  }
  .nestable-item {
    position: relative;
  }
  .nestable-item.is-dragging .nestable-list {
    pointer-events: none;
  }
  .nestable-item.is-dragging * {
    opacity: 0;
    filter: alpha(opacity=0);
  }
  .nestable-item.is-dragging:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(106, 127, 233, 0.274);
    border: 1px dashed rgb(73, 100, 241);
    -webkit-border-radius: 5px;
    border-radius: 5px;
  }
  .nestable-drag-layer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    pointer-events: none;
  }
  .nestable-drag-layer > .nestable-list {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    background-color: rgba(106, 127, 233, 0.274);
  }
  .nestable [draggable="true"] {
    cursor: move;
  }
  .nestable-handle {
    display: inline;
  }
  #export-components-container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
</style>
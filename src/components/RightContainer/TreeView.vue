<template>
  <div>
    <p id="tree-view-header" class="md-title">Component Tree</p>
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
</template>

<script>
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
#tree-view-header {
  text-align: center;
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
</style>
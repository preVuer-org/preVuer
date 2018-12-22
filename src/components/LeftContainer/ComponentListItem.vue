<template>
  <div class="component-list-item">
    <p id="component-item-title">{{ component.title }}</p>
    <button 
      :id="component.id" 
      @click="deleteComponent"
    >delete</button>
  </div>
</template>

<script>
  export default {
    name: 'component-list-item',
    props: ['component'],
    methods: {
      deleteComponent(e) {
        this.$store.dispatch('deleteComponent', e.target.id)
      }
    }
  }
</script>

<style>
  #component-item-title {
    display: inline;
  }
</style>
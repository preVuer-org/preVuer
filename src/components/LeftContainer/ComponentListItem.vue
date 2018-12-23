<template>
  <div class="component-list-item">
    <p id="component-item-title">{{ component.title }}</p>
    <button 
      :id="component.id" 
      @click="deleteComponent"
    >delete</button>
    <select>
      <option>none</option>
      <option 
        v-for="parent in getParents"
        :value="parent.title"
      > {{ parent.title !== component.title ? parent.title : null }} </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'component-list-item',
    props: ['component', 'parent.title'],
    methods: {
      deleteComponent(e) {
        this.$store.dispatch('deleteComponent', e.target.id)
      }
    },
    computed: {
      getParents() {
        return this.$store.getters.GET_COMPONENTS;
      }
    }
  }
</script>

<style>
  #component-item-title {
    display: inline;
  }
</style>
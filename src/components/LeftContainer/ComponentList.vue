<template>
  <div id="component-list">
    <component-list-item 
      v-for="(component, index) in getComponents" 
      :component="component" 
      :key="index" 
      :id="index"
    />
  </div>
</template>

<script>
  import ComponentListItem from './ComponentListItem.vue';

  export default {
    name: 'component-list',
    components: {
      ComponentListItem
    },
    computed: {
      getComponents() {
        return this.$store.getters.GET_COMPONENTS;
      },
    },
  }
</script>

<style> 
  #component-list{
    margin-top: 20px;
  }
</style>

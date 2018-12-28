<template>
  <div class="component-list-item">
    <div>
      <p id="component-item-title">{{ component.title }}</p>
    </div>
    <div>
    <select>
      <option>none</option>
      <option 
        v-for="parent in getParents"
        :value="parent.title"
      > {{ parent.title !== component.title ? parent.title : null }} </option>
    </select>
    <button 
      :id="component.id" 
      @click="deleteComponent"
    >delete</button>
        <!--<md-button class="md-icon-button">
      <i class=“material-icons”>delete</i>
    </md-button>
    -->
    </div>
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
  .component-list-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #component-item-title {
    display: inline;
  }
</style>
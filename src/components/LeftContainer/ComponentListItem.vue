<template>
  <div class="component-list-item">
    <div>
      <p id="component-item-title">{{ component.title }}</p>
    </div>
    <div id="component-details">
      <p id="parent-menu-label">Parent</p>
      <select @change="parentChange" :id="component.id">
        <option>none</option>
        <option 
          v-for="parent in getParents"
          v-if="parent.title !== component.title"
          :value="parent.title"
          :id="parent.id"
        > {{ parent.title }} </option>
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
    props: ['component', 'parent.title', 'parent.id'],
    methods: {
      deleteComponent(e) {
        this.$store.dispatch('deleteComponent', e.target.id)
      },
      parentChange(e) {
        const component = e.target.id;
        const parent = e.target.value;
        this.$store.dispatch('changeParent', [component, parent]);
      },
    },
    computed: {
      getParents() {
        return this.$store.getters.GET_COMPONENTS;
      },
    },
  }
</script>

<style>
  .component-list-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #component-details {
    display: flex;
    flex-direction: row;
  }
  #component-item-title {
    display: inline;
  }
  #parent-menu-label{
    margin: 0 5px 0 0;
  }
</style>
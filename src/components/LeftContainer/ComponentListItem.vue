<template>
  <div class="component-list-item">
    <div>
      <p id="component-item-title">{{ component.title }}</p>
    </div>
    <div id="component-details">
      <input
        :id="component.id"
        type='color'
        :value="component.fill"
        @change="changeColor"
        class="chooseColor"
      />
      <p id="parent-menu-label">Parent</p>
      <select 
        @change="changeParent" 
        :id="component.id" 
        v-model="component.parentTitle"
      >
        <option>none</option>
        <!-- all components as options except the current component -->
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
      ><delete-icon /></button>
    </div>
  </div>
</template>

<script>
  import DeleteIcon from "vue-material-design-icons/Delete.vue";

  export default {
    name: 'component-list-item',
    components: {
      DeleteIcon
    },
    props: ['component', 'parent.title', 'parent.id'],
    methods: {
      deleteComponent(e) {
        const transformerNode = this.$root.$children[0].$children[1].$children[1].$refs.transformer.getStage();
        // remove transfomer which otherwise will be left on the stage
        transformerNode.detach();
        // redraw layer
        transformerNode.getLayer().batchDraw();
        this.$store.dispatch('deleteComponent', e.target.id)
      },
      changeParent(e) {
        const component = e.target.id;
        const parent = e.target.value;
        this.$store.dispatch('changeParent', [component, parent]);
      },
      changeColor(e) {
        const component = e.target.id;
        const color = e.target.value;
        this.$store.dispatch('changeColor', [component, color])
      }
    },
    computed: {
      // grab all components for the parent select options
      getParents() {
        return this.$store.getters.getComponents;
      },
    },
  }
</script>

<style>
  .component-list-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 0;
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
  .chooseColor {
    height: 20px;
    width: 40px;
    border: none;
    padding: 0px;
    margin-right: 8px;
    background-color: transparent;
  }
</style>
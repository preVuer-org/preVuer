<template>
  <div class="component-list-item">
    <!-- component title -->
    <div>
      <p id="component-item-title" class="md-body-1">{{ component.title }}</p>
    </div>
    <div id="component-details">
      <!-- select color -->
      <input
        :id="component.id"
        type='color'
        :value="component.fill"
        @change="changeColor"
        class="choose-color"
      />
      <!-- select parent drop-down -->
        <md-field>
          <label for="parent">Parent</label>
          <md-select
            name="parent"
            @change="changeParent" 
            :id="component.id" 
            v-model="component.parentTitle"
          >
            <md-option>none</md-option>
            <!-- all components as options except the current component -->
            <md-option
              v-for="parent in getParents"
              v-if="parent.title !== component.title"
              :value="parent.title"
              :id="parent.id"
            > {{ parent.title }} </md-option>
          </md-select>
        </md-field>
      <!-- delete component button -->
      <button
        class="delete-button" 
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
  .md-field {
    width: 30%;
  }
  .md-field.md-theme-default {
    margin: 0;
    padding: 0;
  }

  .component-list-item {
    min-width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 0;
  }
  #component-details {
    min-width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #component-item-title {
    display: inline;
  }
  #parent-menu-label {
    margin: 0 5px 0 0;
  }
  .choose-color {
    height: 25px;
    width: 25px;
    border: none;
    border-radius: 10px;
    padding: 0px;
    margin-right: 8px;
    background-color: transparent;
  }
  .delete-button {
    padding: none;
    margin-left: 5px;
  }


</style>

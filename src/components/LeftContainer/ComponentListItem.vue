<template>
  <div class="component-list-item">
    <div id="title-and-color">
      <!-- component title -->
      <p id="component-title">{{ component.title }}</p>
      <!-- change color input field  -->
      <input
        :id="component.id"       
        type='color'
        :value="component.fill"
        @change="changeColor"
        class="change-color"
      />
    </div>
    <!-- component details -->
    <div id="component-details">
      <p id="parent-menu-label">Parent</p>
        <!--  select drop-down for parent options --> 
        <select
          class="select"
          @change="changeParent" 
          :id="component.id" 
          v-model="component.parentTitle"
        >
          <option>none</option>
          <option
            v-for="parent in getParents"
            v-if="parent.title !== component.title"
            :value="parent.title"
            :id="parent.id"
          > {{ parent.title }} </option>
        </select>
        <!--  delete component button -->
        <button class="delete-button">
          <i class="fa fa-trash-o" 
            aria-hidden="true" 
            :id="component.id" 
            @click="deleteComponent"
          ></i>
        </button>
    </div>
  </div>
</template>

<script>
  import DeleteOutlineIcon from "vue-material-design-icons/DeleteOutline.vue";

  export default {
    name: 'component-list-item',
    components: {
      DeleteOutlineIcon
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
    }
  }
</script>

<style>
  .select {
    outline: none;
  }
  .delete-button {
    background: none;
    border: none;
    outline: none;
    color: #ff5252;
    font-size: 20px;
  }
  .delete-button:hover {
    cursor: pointer;
  }
  #title-and-color {
    margin: 2px 0;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
  
    align-items: center;
  }
  .component-list-item {
    min-height: 30px;
    min-width: 50%;
    min-height: 30px;
    border: 1px solid #585858;
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px 0;
  }
  #component-details {
    min-width: 50%;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #component-title {
    font-weight: 500;
    color: #E7E7E7;
    margin: 2px 0;
  }
  #component-item-title {
    display: inline;
  }
  #parent-menu-label {
    margin: 0 5px 0 0;
    color: #B8B8B8;
  }
  .change-color {
    height: 25px;
    width: 25px;
    border: transparent;
    outline: none;
    border-radius: 10px;
    padding: 0px;
    margin-left: 8px;
    background-color: transparent;
  }
  .change-color:hover {
    cursor: pointer;
  }

  .delete-button {
    padding: none;
    margin-left: 5px;
  }
</style>

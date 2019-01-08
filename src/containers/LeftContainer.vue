<template>
  <div class="container" id="left-container">
    <div id="input-text-button-pair">
      <md-field id="component-input">
        <label>enter component name</label>
        <md-input
          @change="updateText"
          @keyup.enter="addComponent" 
          :value="currentText" 
        ></md-input>
        <span class="md-helper-text md-accent">Add a new component</span>
      </md-field>
    </div>
      <md-button 
        id="addComponent" 
        class="md-icon-button md-raised md-accent" 
        @click="addComponent"
      >
        <md-icon>+</md-icon>
      </md-button>
    <component-list />
    <div id="clear-workspace-container">
      <md-button 
        id="clear-workspace" 
        class="md-raised md-primary md-accent" 
        @click="clearWorkspace"
      >Clear Workspace</md-button>
    </div>
  </div>
</template>

<script>
  import ComponentList from '../components/LeftContainer/ComponentList.vue';
  
  const { dialog } = require('electron').remote;

  export default {
    name: 'left-container',
    components: {
      ComponentList
    },
    methods: {
      addComponent(e) {
        // dispatch to add the component to state first, then draw the box
        this.$store.dispatch('addComponent');
        this.$store.dispatch('drawBox');
      },
      updateText(e) {
        e.preventDefault();
        this.$store.dispatch('updateText', e.target.value);
        e.target.value = '';
      },
      clearWorkspace() {
        // options = buttons for electron dialog box
        const options = {
          buttons: ['Yes', 'Cancel'],
          message: 'Do you want to delete all data?'
        }
        // ask user in a popup alert box to see if they really want to clear their workspace
        let response = dialog.showMessageBox(options)
        if (response === 0) {
          this.$store.dispatch('clearWorkspace');
        }
      },
    },
    computed: {
      currentText() {
        return this.$store.getters.getCurrentText;
      },
    },
  }
</script>

<style>
  #component-input {
    width: 75%;
  }
  #input-text-button-pair{
    display: flex;
    flex-direction: row;
  }
  #clear-workspace-container{
    display: flex;
    justify-content: center;
  }
  #clear-workspace {
    margin-top: 40px;
  }
</style>
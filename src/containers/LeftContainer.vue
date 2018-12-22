<template>
  <div class="container" id="left-container">
    <label for="input-text">Add a new component</label>
    <input 
      id="input-text" 
      type="text" 
      placeholder="enter component name" 
      @change="updateText"
      @keyup.enter="addComponent" 
      :value="currentText"
    />
    <button @click="addComponent">submit</button>
    <component-list />
  </div>
</template>

<script>
  import ComponentList from '../components/LeftContainer/ComponentList.vue';
  
  export default {
    name: 'left-container',
    components: {
      ComponentList
    },
    methods: {
      addComponent(e) {
        this.$store.dispatch('addComponent');
        this.$store.dispatch('drawBox');
      },
      updateText(e) {
        e.preventDefault();
        this.$store.dispatch('updateText', e.target.value);
        e.target.value = '';
      }
    },
    computed: {
      currentText() {
        return this.$store.getters.getCurrentText
      }
    }
  }
</script>

<style>

</style>
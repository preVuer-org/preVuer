<template>
  <div id="top-bar">
    <button @click="createFiles">Export Components</button>
  </div>
</template>

<script>
import createFilesFunc from '../../utils/createFiles.util.js'

  export default {
    name: 'top-bar',
    methods: {
      createFiles() {
        createFilesFunc(this.$store.state.components)
      }
    }
  }
</script>

<style>

</style>
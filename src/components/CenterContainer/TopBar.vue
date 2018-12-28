<template>
  <div id="top-bar">
    <md-button id="import-image-file" class="md-raised md-primary md-accent" @click="importImageFile">Import Image File</md-button>
    <md-button id="export-components" class="md-raised md-primary md-accent" @click="createFiles">Export Components</md-button>
  </div>
</template>

<script>
import createFilesFunc from '../../utils/createFiles.util.js'
import importImageFileFunc from '../../utils/importImageFile.util.js'

  export default {
    name: 'top-bar',
    methods: {
      createFiles() {
        createFilesFunc(this.$store.state.components)
      },
      importImageFile() {
        const file = importImageFileFunc()
        this.$store.dispatch('importImageFile', file)
      }
    }
  }
</script>

<style>
  #top-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
  }
</style>
<template>
  <div id="top-bar">
    <button id="import-image-file" @click="importImageFile">Import Image File</button>
    <button id="export-components" @click="createFiles">Export Components</button>
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
    background-color: #252526;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
  }
</style>
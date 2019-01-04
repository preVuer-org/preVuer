<template>
  <div class="container" id="center-container">
    <top-bar />
    <center-canvas />
  </div>
</template>

<script>
  import TopBar from '../components/CenterContainer/TopBar.vue';
  import CenterCanvas from '../components/CenterContainer/CenterCanvas.vue';
import { clearTimeout } from 'timers';

  export default {
    name: 'center-container',
    components: {
      TopBar,
      CenterCanvas
    },
  }
</script>

<style>

</style>
<template>
  <div class="container" id="center-container">
    <top-bar />
    <center-canvas />
  </div>
</template>

<script>
  import TopBar from '../components/CenterContainer/TopBar.vue';
  import CenterCanvas from '../components/CenterContainer/CenterCanvas.vue';

  export default {
    name: 'center-container',
    components: {
      TopBar,
      CenterCanvas
    },
  }
</script>

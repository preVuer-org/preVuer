<template>
  <div id="app" class="main-container">
    <left-container />
    <center-container />
    <right-container />
  </div>
</template>

<script>
import LeftContainer from './containers/LeftContainer.vue';
import CenterContainer from './containers/CenterContainer.vue';
import RightContainer from './containers/RightContainer.vue';

export default {
  name: 'app',
  components: {
    LeftContainer,
    CenterContainer,
    RightContainer
  }
}
</script>

<style>
  .main-container {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 95%;
    width: 95%;
  }

  #left-container {
    background-color: #252526;
    height: 800px;
    width: 25%;
  }
  #center-container {
    background-color: #1e1e1e;
    height: 800px;
    width: 50%;
  }
  #right-container {
    background-color: #303030;
    height: 800px;
    width: 25%;
  }
</style>

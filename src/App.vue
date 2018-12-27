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
    border: 1px black solid;
    height: 800px;
    width: 25%;
  }
  #center-container {
    border: 1px black solid;
    height: 800px;
    width: 50%;
  }
  #right-container {
    border: 1px black solid;
    height: 800px;
    width: 25%;
  }
</style>

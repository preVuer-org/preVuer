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
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: row;
    height: 95%;
    width: 95%;
  }

  #left-container {
    background-color: #4b4b4b;
    margin-top: 30px;
    padding: 20px;
    height: 800px;
    width: 25%;
  }
  #center-container {
    padding: 20px;
    height: 800px;
    width: 55%;
  }
  #right-container {
    background-color: #3e3e3e;
    height: 800px;
    margin-top: 30px;
    margin-left: 10px;
    padding: 20px;
    height: 800px;
    width: 20%;
  }
</style>

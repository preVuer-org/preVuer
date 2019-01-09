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
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  #left-container {
    background-color: #3e3e3e;
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px;
    height: 100%;
    min-width: 285px;
    width: 20%;
  }
  #center-container {
    padding: 20px;
    height: 800px;
    width: 60%;
  }
  #right-container {
    background-color: #3e3e3e;
    border-radius: 5px;
    height: 800px;
    margin: 20px 0;
    padding: 0 20px 20px 20px;
    height: 100%;
    width: 20%;
  }
</style>

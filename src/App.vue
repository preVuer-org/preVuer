<template>
  <div id="app" class="main-container">
    <left-container />
    <centers-container />
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
    height: 90%;
    width: 90%;
  }
  .container{
    border: 1px black solid;
    height: 600px;
    width: 350px;
  }
</style>

<template>
<div id="center-canvas">
    <v-stage ref="stage" :config="stageConfig" @mousedown="handleStageMouseDown">
    <v-layer ref="imageLayer">
      <v-image :config="{
            image: image
          }"/>
    </v-layer>
    <v-layer ref="layer">
      <v-rect
        v-for="rect in rectangles"
        :key="rect.id"
        :config="rect"
        @mouseover="onMouseOver"
        @mouseout="onMouseOut"
      ></v-rect>

      <v-transformer ref="transformer" :config="trConfig"></v-transformer>
    </v-layer>
  </v-stage>
  </div>
</template>

<script>
export default {
  name: 'center-canvas',
  data() {
    return {
      stageConfig: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      trConfig: {
        rotateEnabled: false,
      },
      //selectedRectId: '',
      image: null,
    };
  },
  methods: {
    onMouseOver() {
      document.body.style.cursor = 'grabbing';
    },
    onMouseOut() {
      document.body.style.cursor = 'default';
    },
    handleStageMouseDown(e) {
      
      // Grab transformer
      const transformerNode = this.$refs.transformer.getStage();
      
      // Clicked on the stage -> Clear Transformer Selection
      if (e.target === e.target.getStage()) {
        
        // Remove transfomer
        transformerNode.detach(); // Add check if it is attached
        // Redraw layer
        transformerNode.getLayer().batchDraw();
      
      } else {

        // Clicked on transformer -> Do nothing
        if (e.target.getParent().className === 'Transformer') {
          // eslint-disable-next-line no-useless-return
          return;
        }

        // Do nothing if transfomer already attached to rectangle
        if (e.target === transformerNode.node()) { 
        // eslint-disable-next-line no-useless-return
          return;
        }

        // Clicked on rectangle -> Attach Transfomer to it
        transformerNode.attachTo(e.target);
        // Redraw layer
        transformerNode.getLayer().batchDraw();

      }

    },
  },
  computed: {
    rectangles(){
      return this.$store.state.components
    }
  }

};
</script>

<style>

</style>


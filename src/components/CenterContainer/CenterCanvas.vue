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
      <v-transformer ref="transformer"></v-transformer>
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
      rectangles: [
        {
          name: 'rectangle1',
          x: 200,
          y: 200,
          width: 100,
          height: 100,
          fill: 'blue',
          stroke: 'black',
          strokeWidth: 4,
          draggable: true,
          opacity: 0.3,
        },
        {
          name: 'rectangle2',
          x: 200,
          y: 200,
          width: 200,
          height: 200,
          fill: 'blue',
          stroke: 'yellow',
          strokeWidth: 10,
          draggable: true,
          opacity: 0.3,
        },
      ],
      selectedShapeName: '',
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
      // Clicked on the stage -> Clear Transformer Selection
      if (e.target === e.target.getStage()) {
        this.selectedShapeName = '';
        this.updateTransformer();
        // eslint-disable-next-line no-useless-return
        return;
      }

      // Clicked on transformer -> Do nothing
      if (e.target.getParent().className === 'Transformer') {
        // eslint-disable-next-line no-useless-return
        return;
      }

      // Get clicked Rectangle by its name
      const name = e.target.name();
      const rect = this.rectangles.find(el => el.name === name);
      if (rect) {
        this.selectedShapeName = name;
      } else {
        this.selectedShapeName = '';
      }
      this.updateTransformer();
    },
    updateTransformer() {
      const transformerNode = this.$refs.transformer.getStage(); // Get transfomer
      const stage = transformerNode.getStage(); // Get stage
      const { selectedShapeName } = this;

      const selectedNode = stage.findOne('.' + selectedShapeName); // Get selected node

      // Do nothing if transfomer already attached to rectangle
      if (selectedNode === transformerNode.node()) {
        // eslint-disable-next-line no-useless-return
        return;
      }

      // Bind transfomer to a selected rectangle if it is not attached
      if (selectedNode) {
        transformerNode.attachTo(selectedNode);
      } else {
        // Remove Transformer if clicked on stage and not on a rectangle
        transformerNode.detach();
      }
      transformerNode.getLayer().batchDraw();
    },
  }
};
</script>

<style>

</style>

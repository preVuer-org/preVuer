<template>
  <div id="center-canvas">
    <div v-if="showStage">
      <v-stage ref="stage" :config="stageConfig" @mousedown="handleStageMouseDown">
        <v-layer ref="imageLayer">
          <!-- mock image to draw boxes on -->
          <v-image ref="actualImage" :config="{
          image: mockImg || image
          }"></v-image>
        </v-layer>
        <v-layer ref="layer">
          <!-- all the boxes from components -->
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
  </div>
</template>

<script>
export default {
  name: "center-canvas",
  data() {
    return {
      showStage: false,
      // setting the width and height of the canvas stage
      stageConfig: {
        width: 0,
        height: 0
      },
      // make sure boxes can't rotate
      trConfig: {
        rotateEnabled: false
      },
      // v-image mock image first set as null
      image: null
    };
  },
  methods: {
    onMouseOver() {
      document.body.style.cursor = "grabbing";
    },
    onMouseOut() {
      document.body.style.cursor = "default";
    },
    handleStageMouseDown(e) {
      // grab transformer
      const transformerNode = this.$refs.transformer.getStage();
      // clicked on the stage -> clear transformer selection
      if (e.target === e.target.getStage()) {
        // remove transfomer
        transformerNode.detach();
        // redraw layer
        transformerNode.getLayer().batchDraw();
      } else {
        // clicked on transformer -> do nothing
        if (e.target.getParent().className === "Transformer") {
          // eslint-disable-next-line no-useless-return
          return;
        }
        // do nothing if transfomer already attached to rectangle
        if (e.target === transformerNode.node()) {
          // eslint-disable-next-line no-useless-return
          return;
        }
        // do nothing if clicked on background image
        if (e.target.className === "Image") {
          // remove transfomer
          transformerNode.detach();
          // redraw layer
          transformerNode.getLayer().batchDraw();
          return;
        }
        // clicked on rectangle -> attach transfomer to it
        transformerNode.attachTo(e.target);
        // redraw layer
        transformerNode.getLayer().batchDraw();
      }
    }
  },
  computed: {
    // grab all components in state for konva rectangle render in vrect
    rectangles() {
      return this.$store.state.components;
    },
    // grabbing the image[path] from state to be set as konva v-image
    mockImg() {
     
      const image = new window.Image();
      image.src = this.$store.state.imagePath;

      image.onload = () => {
        this.image = image;
      };
      return image;
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      const stageContainer = document.querySelector("#center-canvas");
      
      // setting up stage height and width
      this.stageConfig.width = stageContainer.offsetWidth;
      this.stageConfig.height = stageContainer.offsetHeight;
      this.showStage = true;
    });
  },
  updated: function() {
    this.$nextTick(function() {
      
      // residing image to fit stage on load
      const stage = this.$refs.stage.getStage();
      const actualImg = this.$refs.actualImage.getStage();

      const stageContainer = document.querySelector("#center-canvas");
      
      actualImg.to({
        width: stageContainer.offsetWidth,
        height: stageContainer.offsetHeight
      });

      stage.batchDraw();

      // residing image to fit stage on resize
      window.addEventListener("resize", () => {
        
        stage.to({
          width: stageContainer.offsetWidth,
          height: stageContainer.offsetHeight
        });

        actualImg.to({
          width: stageContainer.offsetWidth,
          height: stageContainer.offsetHeight
        });

        stage.batchDraw();
      });
    });
  }
};
</script>

<style>
#center-canvas {
  border: 1px solid #3e3e3e;
  border-radius: 5px;
  margin-top: 15px;
  height: 100%;
}
</style>
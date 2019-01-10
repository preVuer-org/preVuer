<template>
  <div id="center-canvas">
    <div v-if="showStage">
      <v-stage ref="stage" :config="stageConfig" @mousedown="handleStageMouseDown">
        <v-layer ref="imageLayer" :config="imgLayerConfig">
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
      // allow dragging the background image
      imgLayerConfig: {
        draggable: true
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
      // getting stageContainer offsetHeight and offsetWidth
      const stageContainer = document.querySelector("#center-canvas");
      const height = stageContainer.offsetHeight;
      const width = stageContainer.offsetWidth;
      const image = new window.Image();

      image.src = this.$store.state.imagePath;
      // changing image size in according to stage offsetHeight and offsetWidth
      image.width = width;
      image.height = height;

      image.onload = () => {
        this.image = image;
      };
      return image;
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      // getting stageContainer offsetHeight and offsetWidth
      const stageContainer = document.querySelector("#center-canvas");
      const height = stageContainer.offsetHeight;
      const width = stageContainer.offsetWidth;

      // setting up stage to have the same height and width as stageContainer
      this.stageConfig.width = width;
      this.stageConfig.height = height;

      this.showStage = true;
    });
    window.addEventListener("resize", () => {
      // getting stageContainer offsetHeight and offsetWidth
      const stageContainer = document.querySelector("#center-canvas");
      const height = stageContainer.offsetHeight;
      const width = stageContainer.offsetWidth;

      // setting up stage to have the same height and width as stageContainer
      this.stageConfig.width = width;
      this.stageConfig.height = height;

      //shaping image layer to fit new size of stage
      if (this.$refs.actualImage.getStage()) {
        const img = this.$refs.actualImage.getStage();
        console.log("imgLayer: ", img.size());
        img.size({
          width: width,
          height: height
        });
        console.log("imgLayer resized: ", img.size());
      }

      // redraw stage

      //console.log(this.$refs);
      //const stage = this.$refs.stage.getStage();
      //stage.batchDraw();

      //console.log('canvasContainerW: ', width, 'canvasContainerH: ', height);

      // console.log('stageW: ', stage.width());
      // console.log('stageH: ', stage.height());
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
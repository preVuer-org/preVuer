<template>
  <div id="center-canvas">
    <div v-if="showStage">
      <v-stage ref="stage" :config="stageConfig" @mousedown="handleStageMouseDown">
        <v-layer ref="imageLayer">
          <v-image :config="{
            image: mockImg || image
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
  </div>
</template>

<script>
export default {
  name: "center-canvas",
  data() {
    return {
      showStage: false,
      stageConfig: {
        width: 0,
        height: 0
      },
      trConfig: {
        rotateEnabled: false
      },
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
      // Grab transformer
      const transformerNode = this.$refs.transformer.getStage();

      // Clicked on the stage -> Clear Transformer Selection
      if (e.target === e.target.getStage()) {
        // Remove transfomer
        transformerNode.detach();
        // Redraw layer
        transformerNode.getLayer().batchDraw();
      } else {
        // Clicked on transformer -> Do nothing
        if (e.target.getParent().className === "Transformer") {
          // eslint-disable-next-line no-useless-return
          return;
        }
        // Do nothing if transfomer already attached to rectangle
        if (e.target === transformerNode.node()) {
          // eslint-disable-next-line no-useless-return
          return;
        }
        // Do nothing if clicked on background image
        if (e.target.className === "Image") {
          // Remove transfomer
          transformerNode.detach();
          // Redraw layer
          transformerNode.getLayer().batchDraw();
          return;
        }
        // Clicked on rectangle -> Attach Transfomer to it
        transformerNode.attachTo(e.target);
        // Redraw layer
        transformerNode.getLayer().batchDraw();
      }
    }
  },
  computed: {
    rectangles() {
      return this.$store.state.components;
    },
    mockImg() {
      const stageContainer = document.querySelector("#center-canvas");
      const stageHeight = stageContainer.offsetHeight;
      const stageWidth = stageContainer.offsetWidth;
      const image = new window.Image();

      image.src = this.$store.state.imagePath;

      image.onload = () => {
        image.width = stageWidth;
        image.height = stageHeight;
        this.image = image;
      };
      return image;
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      const stageContainer = document.querySelector("#center-canvas");
      const stageHeight = stageContainer.offsetHeight;
      const stageWidth = stageContainer.offsetWidth;

      this.stageConfig.width = stageWidth;
      this.stageConfig.height = stageHeight;
      this.showStage = true;
    });
    window.addEventListener("resize", () => {
      console.log("rezied");
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
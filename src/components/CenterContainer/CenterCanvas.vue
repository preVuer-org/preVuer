<template>
  <div id="center-canvas">
    <div v-if="showStage">
      <v-stage ref="stage" :config="stageConfig" @mousedown="handleStageMouseDown">
        <v-layer ref="imageLayer">
          <v-image ref="actualImage" :config="{
          image: mockImg || image
          }"></v-image>
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
      const transformerNode = this.$refs.transformer.getStage();
      if (e.target === e.target.getStage()) {
        transformerNode.detach();
        transformerNode.getLayer().batchDraw();
      } else {
        if (e.target.getParent().className === "Transformer") {
          return;
        }
        if (e.target === transformerNode.node()) {
          return;
        }
        if (e.target.className === "Image") {
          transformerNode.detach();
          transformerNode.getLayer().batchDraw();
          return;
        }
        transformerNode.attachTo(e.target);
        transformerNode.getLayer().batchDraw();
      }
    }
  },
  computed: {
    rectangles() {
      return this.$store.state.components;
    },
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
      this.stageConfig.width = stageContainer.offsetWidth;
      this.stageConfig.height = stageContainer.offsetHeight;
      this.showStage = true;
    });
  },
  updated: function() {
    this.$nextTick(function() {
      const stage = this.$refs.stage.getStage();
      const actualImg = this.$refs.actualImage.getStage();
      const stageContainer = document.querySelector("#center-canvas");
      actualImg.to({
        width: stageContainer.offsetWidth,
        height: stageContainer.offsetHeight
      });
      stage.batchDraw();
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
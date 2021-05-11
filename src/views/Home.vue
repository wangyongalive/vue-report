<template>
  <div class="home">
    <!-- 中间通过-连接(vue规范) -->
    <top-view />
    <sale-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from "../components/TopView";
import SaleView from "../components/SaleView";
import BottomView from "../components/BottomView";
import MapView from "../components/MapView";
import { getWordCloud, getScreenData, getScreenMap } from "../api";

export default {
  name: "Home",
  components: {
    TopView,
    SaleView,
    BottomView,
    MapView,
  },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null,
    };
  },
  provide() {
    return {
      // 函数
      getReportData: this.getReportData,
      getWordCloudData: this.getWordCloudData,
      getMapData: this.getMapData,
    };
  },
  methods: {
    getReportData() {
      return this.reportData;
    },
    getWordCloudData() {
      return this.wordCloud;
    },
    getMapData() {
      return this.mapData;
    },
  },
  mounted() {
    getScreenData().then((data) => {
      this.reportData = data;
    });
    getWordCloud().then((data) => {
      this.wordCloud = data;
    });

    getScreenMap().then((data) => {
      this.mapData = data;
    });
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  /* height: 100%; */ /*让home根据内容增长*/
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>

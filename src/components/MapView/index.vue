<template>
  <div class="map-view">
    <div class="left">
      <b-map-scatter />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <liquid-fill />
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <word-cloud />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import BMapScatter from "../BMapScatter";
import LiquidFill from "../LiquidFill";
import WordCloud from "../WordCloud";

export default {
  components: {
    BMapScatter,
    WordCloud,
    LiquidFill
  }
};
</script>

<style lang="scss" scoped>
.map-view {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
    background-color: aqua;
  }
  .right {
    flex: 1; /*占满剩下的空间*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch; // stretch：默认值
    margin-left: 20px;
    background-color: red;
    .title {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
    }
  }
}
</style>

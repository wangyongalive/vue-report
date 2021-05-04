<template>
  <commond-card title="累计用户数" value="1,087,503">
    <template>
      <div id="total-users-chart"></div>
    </template>
    <!-- 具名插槽 -->
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">8.73%</span>
        <div class="increase" />
        <span class="mouth">月同比 </span>
        <span class="emphasis">35.73%</span>
        <div class="decrease" />
      </div>
    </template>
  </commond-card>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById("total-users-chart");
    const chart = this.$echart.init(chartDom);
    chart.setOption({});
  },
};
</script>

<style lang='scss' scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .mouth {
    margin-left: 10px;
  }
}
</style>

<template>
  <commond-card title="累计订单量" value="2,157,420">
    <!-- 默认插槽 -->
    <template>
      <div
        id="total-order-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div>
    </template>
    <!-- 具名插槽 -->
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">2,000,000</span>
    </template>
  </commond-card>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById("total-order-chart");
    const chart = this.$echart.init(chartDom);
    chart.setOption({
      xAxis: {
        type: "category",
        show: false,
        boundaryGap: false, // 距离x轴的距离为0
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "line",
          data: [620, 432, 220, 534, 790, 430, 620, 432, 220, 534, 790],
          areaStyle: {
            color: "purple",
          },
          lineStyle: {
            width: 0,
          },
          itemStyle: {
            opacity: 0,
          },
          smooth: true,
        },
      ], // 一个系列一张图
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    });
  },
};
</script>

<style>
</style>

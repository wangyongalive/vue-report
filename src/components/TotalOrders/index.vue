<template>
  <!-- props中的值改变会引起函数重新计算？ -->
  <commond-card title="累计订单量" :value="orderToday">
    <!-- <commond-card title="累计订单量" value="111111"> -->
    <!-- 默认插槽 -->
    <template>
      <!-- vue-chart重构 -->
      <!-- <div
        id="total-order-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div> -->
      <!-- 要执行() -->
      <v-chart :options="getOption()" />
    </template>
    <!-- 具名插槽 -->
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">{{ orderLastDay }}</span>
    </template>
  </commond-card>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin";
import commonDataMixin from "../../mixins/commonDataMixin";
export default {
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOption() {
      // 依赖了this.orderTrend也会重新计算
      // console.log("累计订单量", this.orderTrend.length);
      // console.log("累计订单量", 1);
      return this.orderTrend.length > 0
        ? {
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
                data: this.orderTrend,
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
          }
        : null;
    },
  },
  mounted() {
    // const chartDom = document.getElementById("total-order-chart");
    // const chart = this.$echart.init(chartDom);
    // chart.setOption({
    //   xAxis: {
    //     type: "category",
    //     show: false,
    //     boundaryGap: false, // 距离x轴的距离为0
    //   },
    //   yAxis: {
    //     show: false,
    //   },
    //   series: [
    //     {
    //       type: "line",
    //       data: [620, 432, 220, 534, 790, 430, 620, 432, 220, 534, 790],
    //       areaStyle: {
    //         color: "purple",
    //       },
    //       lineStyle: {
    //         width: 0,
    //       },
    //       itemStyle: {
    //         opacity: 0,
    //       },
    //       smooth: true,
    //     },
    //   ], // 一个系列一张图
    //   grid: {
    //     top: 0,
    //     right: 0,
    //     bottom: 0,
    //     left: 0,
    //   },
    // });
  },
};
</script>

<style>
</style>

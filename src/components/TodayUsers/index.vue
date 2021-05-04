<template>
  <commond-card title="今日交易用户数" value="81,014">
    <!-- 默认插槽 -->
    <template>
      <!-- <div
        id="today-users-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div> -->
      <!-- v-chart不用单独写一个div -->
      <v-chart :options="getOption()"/>
    </template>
    <!-- 具名插槽 -->
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">5.14%</span>
    </template>
  </commond-card>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
  methods: {
    getOption() {
      return {
        color: ["#3398DB"],
        xAxis: {
          type: "category",
          data: [
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
            "00:00",
          ],
          barWidth: "60%",
          // show: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "bar",
            data: [620, 432, 220, 534, 790, 430, 620, 432, 220, 534, 790],
            // areaStyle: {
            //   color: "purple",
            // },
            // lineStyle: {
            //   width: 0,
            // },
            // itemStyle: {
            //   opacity: 0,
            // },
            // smooth: true,
          },
        ], // 一个系列一张图
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      };
    },
  },
  mounted() {
    // const chartDom = document.getElementById("today-users-chart");
    // const chart = this.$echart.init(chartDom);
    // chart.setOption({
    //   color: ["#3398DB"],
    //   xAxis: {
    //     type: "category",
    //     data: [
    //       "00:00",
    //       "00:00",
    //       "00:00",
    //       "00:00",
    //       "00:00",
    //       "00:00",
    //       "00:00",
    //       "00:00",
    //       "00:00",
    //       "00:00",
    //       "00:00",
    //     ],
    //     barWidth: "60%",
    //     // show: false,
    //   },
    //   yAxis: {
    //     show: false,
    //   },
    //   series: [
    //     {
    //       type: "bar",
    //       data: [620, 432, 220, 534, 790, 430, 620, 432, 220, 534, 790],
    //       // areaStyle: {
    //       //   color: "purple",
    //       // },
    //       // lineStyle: {
    //       //   width: 0,
    //       // },
    //       // itemStyle: {
    //       //   opacity: 0,
    //       // },
    //       // smooth: true,
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

<template>
  <commond-card title="累计用户数" :value="userToday">
    <template>
      <!-- <div
        id="total-users-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div> -->
      <v-chart :options="getOption()" />
    </template>
    <!-- 具名插槽 -->
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">{{ salesGrowthLastDay }}</span>
        <div class="increase" />
        <span class="month">月同比 </span>
        <span class="emphasis">{{ salesGrowthLastMonth }}</span>
        <div class="decrease" />
      </div>
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
      return {
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        xAxis: {
          // x轴是值
          type: "value",
          show: false,
        },
        yAxis: {
          // y轴是类型
          type: "category",
          show: false,
        },
        series: [
          // 柱状图聚合
          {
            name: "上月平台用户数",
            type: "bar",
            data: [this.userLastMonth],
            barWidth: 10,
            stack: "总量", // stack 将数据合并
            itemStyle: {
              color: "#45c956",
            },
          },
          {
            name: "今日平台用户数",
            type: "bar",
            data: [this.userTodayNumber],
            barWidth: 10,
            stack: "总量",
            itemStyle: {
              color: "#eee",
            },
          },
          {
            // 自定义绘图
            type: "custom",
            stack: "总量",
              data: [this.userLastMonth],
            renderItem: (params, api) => {
              const value = api.value(0); // 获取第一个点
              const endPoint = api.coord([value, 0]);
              // console.log(endPoint);
              return {
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path",
                    shape: {
                      d:
                        "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                  {
                    type: "path",
                    shape: {
                      d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z",
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: "cover",
                    },
                    style: {
                      fill: "#45c946",
                    },
                  },
                ],
              };
            },
          },
        ],
      };
    },
  },
  mounted() {
    // const chartDom = document.getElementById("total-users-chart");
    // const chart = this.$echart.init(chartDom);
    // chart.setOption({
    //   grid: {
    //     top: 0,
    //     right: 0,
    //     bottom: 0,
    //     left: 0,
    //   },
    //   xAxis: {
    //     // x轴是值
    //     type: "value",
    //     show: false,
    //   },
    //   yAxis: {
    //     // y轴是类型
    //     type: "category",
    //     show: false,
    //   },
    //   series: [
    //     // 柱状图聚合
    //     {
    //       type: "bar",
    //       data: [100],
    //       barWidth: 10,
    //       stack: "总量", // stack 将数据合并
    //       itemStyle: {
    //         color: "#45c956",
    //       },
    //     },
    //     {
    //       type: "bar",
    //       data: [250],
    //       barWidth: 10,
    //       stack: "总量",
    //       itemStyle: {
    //         color: "#eee",
    //       },
    //     },
    //     {
    //       // 自定义绘图
    //       type: "custom",
    //       stack: "总量",
    //       data: [100],
    //       renderItem: (params, api) => {
    //         const value = api.value(0); // 获取第一个点
    //         const endPoint = api.coord([value, 0]);
    //         // console.log(endPoint);
    //         return {
    //           type: "group",
    //           position: endPoint,
    //           children: [
    //             {
    //               type: "path",
    //               shape: {
    //                 d: "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",
    //                 x: -5,
    //                 y: -20,
    //                 width: 10,
    //                 height: 10,
    //                 layout: "cover",
    //               },
    //               style: {
    //                 fill: "#45c946",
    //               },
    //             },
    //             {
    //               type: "path",
    //               shape: {
    //                 d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z",
    //                 x: -5,
    //                 y: 10,
    //                 width: 10,
    //                 height: 10,
    //                 layout: "cover",
    //               },
    //               style: {
    //                 fill: "#45c946",
    //               },
    //             },
    //           ],
    //         };
    //       },
    //     },
    //   ],
    // });
  },
};
</script>

<style lang='scss' scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>

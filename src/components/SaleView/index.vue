<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <!-- 具名插槽 -->
      <template v-slot:header>
        <div class="memu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-el-menu"
          >
            <!-- default-active当前激活菜单的 index -->
            <!-- index唯一标志 -->
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <!-- 按钮样式的单选组合 -->
            <!-- v-model	绑定值 -->
            <el-radio-group v-model="radioSelect" size="small">
              <!-- label	Radio 的 value -->
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <!-- picker-options当前时间日期选择器特有的选项参考下表 -->
            <!-- unlink-panels属性解除联动。 -->
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholde="开始时间"
              end-placeholde="结束时间"
              size="small"
              unlink-panels
              :picker-options="pickerOptions"
              class="sales-view-date-picker"
            ></el-date-picker>
          </div>
        </div>
      </template>

      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOption" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item" v-for="item in rankData" :key="item.no">
              <!-- 查看当前的样式是否小于3，若小于3则使用特殊的样式 -->
              <!-- <div class="list-item-no" :class="+item.no <= 3 ? 'top-no' : ''">
                {{ item.no }}
              </div> -->
              <!-- 数组 -->
              <div
                :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']"
                :key="item.no"
              >
                {{ item.no }}
              </div>
              <div class="list-item-name">{{ item.name }}</div>
              <div class="list-item-money">{{ item.money }}</div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
import commonDataMixin from "../../mixins/commonDataMixin";
export default {
  mixins: [commonDataMixin],
  watch: {
    orderFullYear(v, o) {
      console.log(v, o);
      this.render(this.orderFullYear, this.orderFullYearAxis, "年度销售额");
    },
  },
  computed: {
    rankData() {
      // console.log("rankData", this.activeIndex, this.orderRank, this.userRank);
      return this.activeIndex === "1" ? this.orderRank : this.userRank;
    },
  },
  data() {
    return {
      activeIndex: "1",
      radioSelect: "今日",
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 1000 * 3600 * 24 * 7);
              // debugger;
              // pick是通过JS $on绑定的
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 1000 * 3600 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 1000 * 3600 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      chartOption: {},
    };
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index;
      if (index === "1") {
        this.render(this.orderFullYear, this.orderFullYearAxis, "年度销售额");
      } else {
        this.render(this.userFullYear, this.userFullYearAxis, "年度用户访问量");
      }
    },
    render(data, axis, title) {
      // console.log(data);
      // console.log(axis);
      this.chartOption = {
        title: {
          text: title,
          textStyle: {
            fontSize: 12,
            color: "#666",
          },
          left: 25,
          top: 20,
        },
        xAxis: {
          type: "category",
          data: axis,
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#999",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
          axisLabel: {
            color: "#333",
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee",
            },
          },
        },
        series: [
          {
            type: "bar",
            barWidth: "35%",
            data,
          },
        ],
        color: ["#3398DB"],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .memu-wrapper {
    position: relative; /*父相*/
    display: flex;
    .sales-view-el-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        /*这里不用穿透  不知道为什么*/
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }

  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;

    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }

    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-title {
        margin-top: 20px;
        margin-bottom: 15px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list-item {
        display: flex;
        align-items: center;
        font-size: 12px;
        height: 20px;
        padding: 6px 20px 6px 0;
        .list-item-no {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;
          color: #333;
          // 平级
          &.top-no {
            background-color: #000;
            border-radius: 50%;
            color: #fff;
            font-weight: 500;
          }
        }
        .list-item-name {
          margin-left: 10px;
          color: #333;
        }
        .list-item-money {
          flex: 1; /*占满*/
          text-align: right;
        }
      }
    }
  }
}
</style>

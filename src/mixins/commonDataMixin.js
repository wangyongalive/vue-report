function format(v) {
  // 需要传递数字
  // return (+v).toLocaleString();
  // 正则表达式
  // 正向前瞻
  // +
  // $
  const reg = /\d{1,3}(?=(\d{3})+$)/g;
  // `${v}`.replace(reg, function(world) {
  //   //这里的world就是上面的$&
  //   console.log(world);
  // });
  // $&表示与regx相匹配的字符串
  return `${v}`.replace(reg, "$&,");
}

function wrapperMoney(o, k) {
  return o && o[k] ? `￥ ${format(o[k])}` : "￥ 0.00";
}

function wrapperNumber(o, k) {
  return o && o[k] ? format(o[k]) : 0;
}
function wrapperOriginalNumber(o, k) {
  return o && o[k] ? o[k] : 0;
}

function wrapperPercentage(o, k) {
  return o && o[k] ? `${o[k]}` : "0%";
}

function wrapperArray(o, k) {
  return o && o[k] ? o[k] : [];
}

export default {
  inject: ["getReportData", "getWordCloudData", "getMapData"],
  computed: {
    reportData() {
      return this.getReportData(); // 实现 provide inject 响应式获取数据
    },
    salesToday() {
      return wrapperMoney(this.reportData, "salesToday");
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.reportData, "salesGrowthLastDay");
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.reportData, "salesGrowthLastMonth");
    },
    salesLastDay() {
      return wrapperMoney(this.reportData, "salesLastDay");
    },
    orderToday() {
      return wrapperNumber(this.reportData, "orderToday");
    },
    orderLastDay() {
      return wrapperNumber(this.reportData, "orderLastDay");
    },
    orderTrend() {
      return wrapperArray(this.reportData, "orderTrend");
    },
    orderUser() {
      return wrapperNumber(this.reportData, "orderUser");
    },
    returnRate() {
      return wrapperPercentage(this.reportData, "returnRate");
    },
    orderUserTrend() {
      return wrapperArray(this.reportData, "orderUserTrend");
    },
    orderUserTrendAxis() {
      return wrapperArray(this.reportData, "orderUserTrendAxis");
    },
    userToday() {
      return wrapperNumber(this.reportData, "userToday");
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.reportData, "userToday");
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.reportData, "userLastMonth");
    },
    userGrowthLastDay() {
      return wrapperNumber(this.reportData, "userGrowthLastDay");
    },
    orderFullYear() {
      return wrapperArray(this.reportData, "orderFullYear");
    },
    orderFullYearAxis() {
      return wrapperArray(this.reportData, "orderFullYearAxis");
    },
    orderRank() {
      return wrapperArray(this.reportData, "orderRank");
    },
    userFullYear() {
      return wrapperArray(this.reportData, "userFullYear");
    },
    userFullYearAxis() {
      return wrapperArray(this.reportData, "userFullYearAxis");
    },
    userRank() {
      return wrapperArray(this.reportData, "userRank");
    }
  }
};

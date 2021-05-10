export default {
  inject: ["getReportData", "getWordCloudData", "getMapData"],
  computed: {
    //
    reportData() {
      console.log(this.getReportData);
      return this.getReportData();
    },
    salesToday() {
      return this.reportData && this.reportData.salesToday;
    },
    salesGrowthLastDay() {
      return this.reportData && this.reportData.salesGrowthLastDay;
    },
    salesGrowthLastMonth() {
      return this.reportData && this.reportData.salesGrowthLastMonth;
    },
    salesLastDay() {
        return this.reportData && this.reportData.salesLastDay;
      }
  }
};

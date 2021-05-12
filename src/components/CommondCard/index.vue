// 用于定义资源位，允许父组件动态修改资源位
<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <!-- 默认插槽 -->
      <slot></slot>
    </div>
    <!-- 线条写成单标签 -->
    <div class="line" />
    <div class="total">
      <!-- 具名插槽 -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    title: String,
    value: [String, Number]
  },
};
</script>
<style lang='scss' scoped>
// 公共组件的样式
.title {
  font-size: 12px;
  color: #999;
}

.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px; /*加大字母间的间距*/
}

.chart {
  height: 50px;
  //   background-color: red;
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total {
  font-size: 12px;
  color: #666;
}
</style>

// 全局样式
<style lang='scss'>
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}

.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid; /*默认是none*/
  margin: 0 0 3px 5px;
}

.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid; /*默认是none*/
  margin: 3px 0 0 5px;
}
</style>

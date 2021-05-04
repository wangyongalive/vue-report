<template>
  <commond-card title="累计销售额" value="$ 32,039,165">
    <!-- 默认插槽 -->
    <template>
      <div class="compare-wrappper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <!-- 具名插槽 -->
    <template v-slot:footer>
      <span>昨日销售额 </span>
      <span class="emphasis">$ 30,000,000</span>
    </template>
  </commond-card>
</template>

<script>
// 导入公共组件
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
};
</script>

<style lang="scss" scoped>
.compare-wrappper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    justify-content: flex-start; /*默认样式*/
    align-items: center;
    // background-color: yellow;
    //   height: 50%;
    font-size: 12px;
    margin-top: 3px;
    color: #666;

    // 改为全局
    // .increase {
    //   width: 0;
    //   height: 0;
    //   border-width: 3px;
    //   border-color: transparent transparent red transparent;
    //   border-style: solid; /*默认是none*/
    //   margin: 0 0 3px 5px;
    // }

    // .decrease {
    //   width: 0;
    //   height: 0;
    //   border-width: 3px;
    //   border-color: green transparent transparent transparent;
    //   border-style: solid; /*默认是none*/
    //   margin: 3px 0 0 5px;
    // }
  }
}

// span {
//   font-size: 12px;
// }

// emphasis改为全局
// .emphasis {
//   margin-left: 5px;
//   color: #333;
//   font-weight: 700;
// }
</style>

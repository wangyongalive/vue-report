<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <!-- 具名插槽 -->
      <template v-slot:header>
        <div class="memu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </template>

      <template>
        <div>22222</div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      radioSelect: "今日",
    };
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .memu-wrapper {
    display: flex;
  }
}
</style>

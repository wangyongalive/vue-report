<template>
  <div class="top-view">
    <!-- 采用element的布局 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: 20 }">
          <!-- 累计销售额 -->
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: 20 }">
          <!-- 累计订单量 -->
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: 20 }">
          <!-- 今日交易用户数 -->
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: 20 }">
          <!-- 累计用户数 -->
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "../TotalSales";
import TotalOrders from "../TotalOrders";
import TotalUsers from "../TotalUsers";
import TodayUsers from "../TodayUsers";

export default {
  components: {
    TotalSales,
    TotalOrders,
    TotalUsers,
    TodayUsers,
  },
};
</script>

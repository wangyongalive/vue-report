<template>
  <div class="home">
    <!-- 中间通过-连接(vue规范) -->
    <top-view/>
    <sale-view/>
    <bottom-view/>
    <map-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '../components/TopView'
import SaleView from '../components/SaleView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'

export default {
  name: 'Home',
  components: {
    TopView,
    SaleView,
    BottomView,
    MapView
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>

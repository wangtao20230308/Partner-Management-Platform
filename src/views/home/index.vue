<template>
  <div class="app-container">
    <div class="app-container-inner">
      <div ref="chartContainer" style="width: 600px; height: 400px;"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { testInterface } from '@/api/user';
import * as echarts from 'echarts';
 const chartContainer = ref<HTMLElement | null>(null);
 
    onMounted(() => {
      if (chartContainer.value) {
        const chart = echarts.init(chartContainer.value);
        const option = {
          // ECharts 图表配置
          title: {
            text: 'ECharts 示例'
          },
          tooltip: {},
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E', 'F']
          },
          yAxis: {},
          series: [{
            name: '合作方数量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
 
        chart.setOption(option);
      }
    });

 // test接口
      testInterface({distributionSite: '1' }).then(res => {
        console.log("res",res);
      }).finally(() => {
        console.log("123131231");
      })

</script>

<style scoped lang="scss">
@import "./index";
</style>

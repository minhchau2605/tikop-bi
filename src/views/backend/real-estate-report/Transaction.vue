<template>
  <!-- Page Heading -->
  <BasePageHeading>
    <template #extra>
      <BaseFilter @filterChange="fetch" :module-store="store"></BaseFilter>
    </template>
  </BasePageHeading>
  <!-- End Page Heading -->
  <!-- Page Content -->
  <div class="content">
    <BaseBlock content-full>
      <div class="row">
        <div class="col-lg-12">
          <BaseBlock title="Báo cáo tổng quan số lần nạp và rút của sản phẩm BĐS" content-full
                     content-class="text-center" class="text-center">
            <div class="py-3">
              <BarChart :chart-data="chartLinesBarsRadarData" />
            </div>
          </BaseBlock>
          <BaseBlock>
            <template #content>
              <div class="table-responsive overflow-auto">
                <select style="width: 200px; margin-bottom:10px " class="form-select me-sm-4">
                  <option selected>Đơn vị: tỷ đồng</option>
                </select>
                <table class="table table-sm table-responsive border text-center">
                  <thead>
                  <tr>
                    <th style="width: 10%" class="text-center" colspan="3"></th>
                    <th colspan="2">Tuần 38</th>
                    <th colspan="2">Tuần 39</th>
                    <th colspan="2">Tuần 40</th>
                    <th colspan="2">Tuần 41</th>
                  </tr>
                  <tr>
                    <th colspan="3">Sản phẩm</th>
                    <template v-for="(n, i) in 4">
                      <th>Số lần nạp</th>
                      <th>Số lần rút</th>
                    </template>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, key) in transaction" :key="key + '-transaction'">
                      <td colspan="3">
                        <router-link :to="{ path: '/real-estate-report/aum-detail', props: { filterType: 'product' } }">
                          {{ key }}
                        </router-link>
                      </td>
                      <template v-for="(n, i) in 4">
                        <td>{{ item["deposit_number"] }}</td>
                        <td>{{ item["withdraw_number"] }}</td>
                      </template>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </BaseBlock>
        </div>
      </div>
    </BaseBlock>
  </div>
  <!-- END Page Content -->
</template>
<script>
import { reactive } from "vue";
import { Chart, registerables } from "chart.js";
import { LineChart, BarChart } from "vue-chart-3";
import BaseFilter from "@/layouts/partials/Filter.vue";
import { useRealEstateReportStore } from "@/stores/modules/real-estate-report";

export default {
  components: {
    BarChart,
    BaseFilter
  },
  setup() {
    Chart.register(...registerables);
    Chart.defaults.color = "#818d96";
    Chart.defaults.font.weight = "600";
    Chart.defaults.scale.grid.color = "rgba(0, 0, 0, .05)";
    Chart.defaults.scale.grid.zeroLineColor = "rgba(0, 0, 0, .1)";
    Chart.defaults.scale.beginAtZero = true;
    Chart.defaults.elements.line.borderWidth = 2;
    Chart.defaults.elements.point.radius = 4;
    Chart.defaults.elements.point.hoverRadius = 6;
    Chart.defaults.plugins.tooltip.radius = 3;
    Chart.defaults.plugins.legend.labels.boxWidth = 15;

    const store = useRealEstateReportStore();
    // store.fetchAum();
    // const aum = store.aum;
    // Chart data
    const chartLinesBarsRadarData = reactive({
      labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      datasets: [
        {
          label: "Last Week",
          fill: true,
          backgroundColor: "rgba(171, 227, 125, .5)",
          borderColor: "rgba(171, 227, 125, 1)",
          pointBackgroundColor: "rgba(171, 227, 125, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(171, 227, 125, 1)",
          data: [15, 16, 20, 25, 23, 25, 32],
        },
        {
          label: "This Week",
          fill: true,
          backgroundColor: "rgba(0, 0, 0, .1)",
          borderColor: "rgba(0, 0, 0, .3)",
          pointBackgroundColor: "rgba(0, 0, 0, .3)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(0, 0, 0, .3)",
          data: [30, 32, 40, 45, 43, 38, 55],
        },
      ],
    });
    return {
      store,
      // aum,
      chartLinesBarsRadarData
    }
  },
  data() {
    return {
      transaction: {}
    }
  },
  methods: {
    fetch() {
      this.store.fetchTransaction();
      this.transaction = this.store.transaction;
    }
  }
}
</script>
<style>

</style>

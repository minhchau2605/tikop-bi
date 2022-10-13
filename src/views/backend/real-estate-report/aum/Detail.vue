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
          <BaseBlock title="Báo cáo chi tiết số tiền nạp rút và aum sản phẩm bất động sản" content-full
                     content-class="text-center" class="text-center">
            <div class="py-3">
              <BarChart :chart-data="chartLinesBarsRadarData" />
            </div>
          </BaseBlock>
          <BaseBlock>
            <template #content>
              <div class="table-responsive overflow-auto">
                <table class="table table-sm table-responsive border text-center">
                  <thead>
                    <tr>
                      <th>Ngày</th>
                      <th>Loại sản phẩm</th>
                      <th>Số tiền nạp</th>
                      <th>Số tiền rút</th>
                      <th>Aum</th>
                      <th>Số lần nạp</th>
                      <th>Số lần rút</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, key) in aumDetail" :key="key + '-aum'">
                      <td>{{ item["date"] }}</td>
                      <td>{{ key }}</td>
                      <td>{{ item["deposit"] }}</td>
                      <td>{{ item["withdraw"] }}</td>
                      <td>{{ item["aum"] }}</td>
                      <td>{{ item["deposit_number"] }}</td>
                      <td>{{ item["withdraw_number"] }}</td>
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
      aumDetail: {}
    }
  },
  methods: {
    fetch() {
      this.store.fetchAumDetail();
      this.aumDetail = this.store.aumDetail;
    }
  }
}
</script>

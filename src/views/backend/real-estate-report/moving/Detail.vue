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
          <BaseBlock title="Báo cáo chi tiết chuyển đổi"
                     content-class="text-center" class="text-center">
            <template #content>
              <div v-if="Object.keys(this.movingDetail).length" class="table-responsive overflow-auto">
                <table class="table table-sm table-responsive border">
                  <thead>
                    <tr>
                      <th>Ngày</th>
                      <th>Gói chuyển</th>
                      <th>Gói nhận</th>
                      <th>Số tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, key) in movingDetail" :key="key + '-moving'">
                      <td colspan="3">
                        <router-link :to="{ path: '/real-estate-report/aum-detail', props: { filterType: 'product' } }">
                          {{ key }}
                        </router-link>
                      </td>
                      <template v-for="(n, i) in 4">
                        <td>{{ item["old_user"]["deposit"] }}</td>
                        <td>{{ item["old_user"]["withdraw"] }}</td>
                        <td>123</td>
                        <td>456</td>
                        <td>789</td>
                      </template>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else class="mt-sm-4">Không có dữ liệu</div>
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
      movingDetail: {}
    }
  },
  methods: {
    fetch() {
      this.store.fetchMovingDetail();
      this.movingDetail = this.store.movingDetail;
    }
  }
}
</script>
<style>
/*thead, tbody { display: block; }*/

/*tbody {*/
/*  height: 180px;       !* Just for the demo          *!*/
/*  overflow-y: auto;    !* Trigger vertical scroll    *!*/
/*  overflow-x: auto;  !* Hide the horizontal scroll *!*/
/*}*/
</style>

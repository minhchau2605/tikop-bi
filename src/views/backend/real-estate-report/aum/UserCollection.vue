<template>
  <!-- Page Heading -->
  <BasePageHeading>
    <template #extra>
      <BaseFilter @filterChange="fetch" :module-store="store"></BaseFilter>
      <!--      <nav aria-label="breadcrumb">-->
      <!--        <ol class="breadcrumb breadcrumb-alt">-->
      <!--          <li class="breadcrumb-item">-->
      <!--            <a class="link-fx" href="javascript:void(0)">Tables</a>-->
      <!--          </li>-->
      <!--          <li class="breadcrumb-item" aria-current="page">Helpers</li>-->
      <!--        </ol>-->
      <!--      </nav>-->
    </template>
  </BasePageHeading>
  <!-- End Page Heading -->
  <!-- Page Content -->
  <div class="content">
    <BaseBlock content-full>
      <div class="row">
        <div class="col-lg-12">
          <BaseBlock title="Báo cáo tổng quan số tiền nạp rút và AuM sản phẩm bất động sản theo tập user" content-full
                     content-class="text-center" class="text-center">
            <div class="row">
              <div class="col-md-6">
                <BarChart :chart-data="chartLinesBarsRadarData" />
              </div>
              <div class="col-md-6">
                <BarChart :chart-data="chartLinesBarsRadarData" />
              </div>
            </div>
          </BaseBlock>
          <BaseBlock>
            <template #content>
              <div class="table-responsive overflow-auto text-center">
                <table v-if="Object.keys(this.aum).length" class="table table-sm table-responsive border">
                  <thead>
                  <tr class="text-decoration-underline">
                    <th colspan="3"></th>
                    <th colspan="5">
                      <router-link :to="{ path: '/real-estate-report/aum-detail', props: { filterType: 'product' } }">
                        Tuần 39 (19/9- 25/9)
                      </router-link>
                    </th>
                    <th colspan="5">
                      <router-link :to="{ path: '/real-estate-report/aum-detail', props: { filterType: 'product' } }">
                        Tuần 38 (12/9- 18/9)
                      </router-link>
                    </th>
                    <th colspan="5">
                      <router-link :to="{ path: '/real-estate-report/aum-detail', props: { filterType: 'product' } }">
                        Tuần 37 (5/9- 11/9)
                      </router-link>
                    </th>
                    <th colspan="5">
                      <router-link :to="{ path: '/real-estate-report/aum-detail', props: { filterType: 'product' } }">
                        Tuần 36 (1/9 - 4/9)
                      </router-link>
                    </th>
                  </tr>
                  <tr>
                    <th class="text-center" colspan="3"></th>
                    <template v-for="(n, i) in 4">
                      <th>Nạp</th>
                      <th>Rút</th>
                      <th>AuM</th>
                      <th>AuM lũy kế</th>
                      <th>% nắm giữ</th>
                    </template>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td colspan="3">Sản phẩm 1</td>
                    <template v-for="(n, i) in 4">
                      <td>123</td>
                      <td>456</td>
                      <td>789</td>
                      <td>123</td>
                      <td>456</td>
                    </template>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-decoration-underline">
                      <a href="#">Old User</a>
                    </td>
                    <template v-for="(item, key) in aum" :key="key + '-aum'">
                      <td>{{ item["old_user"]["deposit"] }}<span class="text-success">(+5%)</span></td>
                      <td>{{ item["old_user"]["withdraw"] }}<span class="text-success">(+5%)</span></td>
                      <td>123<span class="text-success">(-5%)</span></td>
                      <td>456<span class="text-danger">(-5%)</span></td>
                      <td>789<span class="text-danger">(-5%)</span></td>
                    </template>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-decoration-underline">
                      <a href="#">New User</a>
                    </td>
                    <template v-for="(item, key) in aum" :key="key + '-aum'">
                      <td>{{ item["old_user"]["deposit"] }}<span class="text-success">(+5%)</span></td>
                      <td>{{ item["old_user"]["withdraw"] }}<span class="text-success">(+5%)</span></td>
                      <td>123<span class="text-success">(+5%)</span></td>
                      <td>456<span class="text-danger">(-5%)</span></td>
                      <td>789<span class="text-danger">(-5%)</span></td>
                    </template>
                  </tr>
                  </tbody>
                </table>
                <span v-else>Không có dữ liệu</span>
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
      labels: ["19/09", "20/09", "21/09", "22/09", "23/09", "24/09", "25/09"],
      datasets: [
        {
          label: "Số tiền nạp",
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
          label: "Số tiền rút",
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
      aum: {}
    }
  },
  methods: {
    fetch() {
      this.store.fetchAumUserCollection();
      this.aum = this.store.aumUserCollection;
      console.log('this', this.store.aumUserCollection);
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

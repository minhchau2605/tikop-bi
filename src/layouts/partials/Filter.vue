<template>
    <div class="input-group input-group-sm">
      <select class="form-select me-sm-4" @change="selectTime">
        <option selected>Thời gian</option>
        <option v-for="option in defaultTimeOptions" :value="option.value">{{ option.label }}</option>
      </select>
      <select class="form-select me-sm-4" v-if="$route.name !== 'moving-detail'">
        <option selected>Sản phẩm</option>
        <option v-for="product in products" :value="product.key">{{ product.name }}</option>
      </select>
      <select class="form-select me-sm-4" v-if="$route.name !== 'moving-detail'">
        <option value="all_user" selected>All User</option>
        <option value="old_user">Old User</option>
        <option value="new_user">New User</option>
      </select>
      <select class="form-select me-sm-4" v-if="$route.name === 'moving-detail'">
        <option value="all_user" selected>Gói nhận</option>
        <option value="old_user">Gói 1</option>
        <option value="new_user">Gói 2</option>
      </select>
      <select class="form-select me-sm-4" v-if="$route.name === 'moving-detail'">
        <option value="all_user" selected>Gói chuyển</option>
        <option value="old_user">Gói 1</option>
        <option value="new_user">Gói 2</option>
      </select>
<!--      <VueSelect v-model="timeSelected" :options="defaultTimeOptions"-->
<!--                 placeholder="Thời gian">-->
<!--      </VueSelect>-->
<!--      <VueSelect v-model="productSelected" label="name" :reduce="(product) => product.id" :option="products"-->
<!--                 placeholder="Sản phẩm"></VueSelect>-->
    </div>
</template>

<script>
import moment from "moment";
import Swal from "sweetalert2";
import VueSelect from "vue-select";
import { useProductStore } from "@/stores/modules/product";
import { useTemplateStore } from "@/stores/template";
import { computed } from "vue";

export default {
  name: "Filter",
  components: {
    VueSelect
  },
  setup(props) {
    const productStore = useProductStore();
    const templateStore = useTemplateStore();
    productStore.fetchProduct();
    const moduleStore = props.moduleStore;
    const products = computed(() => productStore.products);
    const filters = computed(() => props.moduleStore.params);
    return {
      templateStore,
      productStore,
      moduleStore,
      products,
      filters
    };
  },
  props: {
    moduleStore: Object,
    filterType: String
  },
  data() {
    return {
      defaultTimeOptions: [
        {
          value: 1,
          label: "Tuần trước",
        },
        {
          value: 2,
          label: "Tháng trước",
        },
        {
          value: 3,
          label: "Năm trước",
        },
        {
          value: 99,
          label: "Tùy chọn",
        },
      ],
      timeSelected: null,
      productSelected: null,
    };
  },
  watch: {
    filters: {
      handler(val) {
        this.$emit("filterChange", val);
      },
      deep: true,
    },
  },
  // computed: {
  //   filters() {
  //     return this.useRealEstateReportStore.params;
  //   },
  // },
  mounted() {
    console.log('props', this.filterType)
    if (this.$route.query.filter_time_type) {
      this.timeSelected = this.$route.query.filter_time_type;
    } else {
      this.filter7days();
      this.moduleStore.setParams(this.filters);
      this.updateQueryString();
    }
  },
  methods: {
    filterNow() {
      this.filters.from_date = moment().format("Y-MM-DD");
      this.filters.to_date = moment().format("Y-MM-DD");
    },
    filter7days() {
      this.filters.from_date = moment().subtract(7, "days").format("Y-MM-DD");
      this.filters.to_date = moment().format("Y-MM-DD");
    },
    filter30days() {
      this.filters.from_date = moment().subtract(30, "days").format("Y-MM-DD");
      this.filters.to_date = moment().format("Y-MM-DD");
    },
    filter3months() {
      this.filters.from_date = moment().subtract(3, "months").format("Y-MM-DD");
      this.filters.to_date = moment().format("Y-MM-DD");
    },
    filter6months() {
      this.filters.from_date = moment().subtract(6, "months").format("Y-MM-DD");
      this.filters.to_date = moment().format("Y-MM-DD");
    },
    filter12months() {
      this.filters.from_date = moment().subtract(12, "months").format("Y-MM-DD");
      this.filters.to_date = moment().format("Y-MM-DD");
    },
    filterAllTime() {
      this.filters.from_date = "";
      this.filters.to_date = "";
    },
    selectTime(e) {
      let selectTime = e.target.value;
      if (!selectTime) {
        this.filterAllTime();
      } else if (selectTime == 0) {
        this.filterNow();
      } else if (selectTime == 1) {
        this.filter7days();
      } else if (selectTime == 2) {
        this.filter30days();
      } else if (selectTime == 3) {
        this.filter12months();
      } else if (selectTime == 4) {
        this.filter6months();
      } else if (selectTime == 99) {
        this.templateStore.sideOverlay({ mode: 'toggle' });
      }

      this.updateQueryString(selectTime);
    },
    updateQueryString(filterTimeType) {
      this.$router
        .replace({
          query: {
            ...this.filters,
            filter_time_type: filterTimeType,
            filter_type: this.filter_type ? this.filter_type : '',
          },
        })
        .catch((err) =>
          Swal.fire({
            icon: "warning",
            text: err,
          })
        );
    },
  },
};
</script>
<style lang="scss">
@import "vue-select/src/scss/vue-select";
@import "@/assets/scss/vendor/vue-select";
</style>

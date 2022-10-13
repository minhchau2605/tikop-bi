<template>
  <div class="content-side">
    <div class="row">
      <label class="form-label" for="example-flatpickr-default">Thời gian</label>
      <div class="col-md-6">
        <FlatPickr
          class="form-control"
          placeholder="Từ"
          v-model="flatPickrState.dateDefault"
        />
      </div>
      <div class="col-md-6">
        <FlatPickr
          class="form-control"
          placeholder="Đến"
          v-model="flatPickrState.dateDefault"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FlatPickr from "vue-flatpickr-component";
import {reactive} from "vue";
export default {
  components: {
    FlatPickr
  },
  setup() {
    const flatPickrState = reactive({
      // Initial values
      dateDefault: null,
      dateCustom: null,
      dateFriendly: null,
      dateRange: null,
      timeStandalone: null,
      timeStandalone24: null,
      timeDateTime: null,
      timeDateTime24: null,
      inlineDefault: null,
      inlineTime: null,

      // Configuration, get more form https://chmln.github.io/flatpickr/options/
      configCustom: { dateFormat: "d-m-Y" },
      configFriendly: { dateFormat: "F j, Y" },
      configRange: { mode: "range", minDate: "today" },
      configTimeStandalone: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
      },
      configTimeStandalone24: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
      },
      configDateTime: { enableTime: true },
      configDateTime24: { enableTime: true, time_24hr: true },
      configInlineDefault: { inline: true },
      configInlineTime: { inline: true, enableTime: true },
    });
    return {
     flatPickrState
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import "vue-select/src/scss/vue-select";
@import "@/assets/scss/vendor/vue-select";
@import "flatpickr/dist/flatpickr.css";
@import "@/assets/scss/vendor/flatpickr";
</style>

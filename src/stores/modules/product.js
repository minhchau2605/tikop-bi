import { defineStore } from "pinia";
import ReportService from "@/services/real-estate-report.js"

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    params: {},
    products: {}
  }),
  getters: {

  },
  actions: {
    async fetchProduct() {
      try {
        // const res = await ReportService.realEstateAum(this.params);
        this.products = [
          {
            'id': 1,
            'name': 'Panaroma 1'
          },
          {
            'id': 2,
            'name': 'Panaroma 2'
          }
        ]
      } catch (e) {
        console.error(e);
      }
    },
  },
  mutations: {

  }
});

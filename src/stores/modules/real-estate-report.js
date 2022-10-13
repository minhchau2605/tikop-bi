import { defineStore } from "pinia";
import ReportService from "@/services/real-estate-report"

export const useRealEstateReportStore = defineStore({
  id: "real-estate-report",
  state: () => ({
    params: {},
    aum: {},
    aumUserCollection: {},
    aumDetail: {},
    transaction: {},
    moving: {}
  }),
  getters: {
    getReportData(state, type) {
      if(type === 'aum') {
        return state.aum;
      }
      if(type === 'transaction') {
        return state.transaction;
      }
      if(type === 'moving') {
        return state.moving;
      }
    },
    getParams(state) {
      return state.params;
    }
  },
  actions: {
    async fetchAum() {
      try {
        // const res = await ReportService.realEstateAum(this.params);
        // this.aum = res.data;
        this.aum = {
          "Hiền test BDS 1": {
            "new_user": {
              "deposit": "8,000,000",
              "withdraw": "0"
            },
            "old_user": {
              "deposit": "95,000,000",
              "withdraw": "127,028,991"
            },
            "all_user": {
              "deposit": "103,000,000",
              "withdraw": "127,028,991"
            }
          },
          "Hiền test BDS": {
            "new_user": {
              "deposit": "8,000,000",
              "withdraw": "0"
            },
            "old_user": {
              "deposit": "95,000,000",
              "withdraw": "127,028,991"
            },
            "all_user": {
              "deposit": "103,000,000",
              "withdraw": "127,028,991"
            }
          },
          "test duyệt nạp": {
            "new_user": {
              "deposit": "0",
              "withdraw": "0"
            },
            "old_user": {
              "deposit": "5,000,000",
              "withdraw": "10,085,645"
            },
            "all_user": {
              "deposit": "5,000,000",
              "withdraw": "10,085,645"
            }
          },
          "Test jmeter": {
            "new_user": {
              "deposit": "0",
              "withdraw": "0"
            },
            "old_user": {
              "deposit": "6,000,000",
              "withdraw": "17,269,095"
            },
            "all_user": {
              "deposit": "6,000,000",
              "withdraw": "17,269,095"
            }
          },
          "thu test 1": {
            "new_user": {
              "deposit": "0",
              "withdraw": "0"
            },
            "old_user": {
              "deposit": "21,000,000",
              "withdraw": "21,000,000"
            },
            "all_user": {
              "deposit": "21,000,000",
              "withdraw": "21,000,000"
            }
          }
        };
      } catch (e) {
        console.error(e);
      }
    },
    async fetchAumUserCollection() {
      try {
        // const res = await ReportService.realEstateAum(this.params);
        // this.aumUserCollection = res.data;
        this.aumUserCollection = {
          "Hiền test BDS 1": {
            "new_user": {
              "deposit": "8,000,000",
              "withdraw": "0"
            },
            "old_user": {
              "deposit": "95,000,000",
              "withdraw": "127,028,991"
            },
            "all_user": {
              "deposit": "103,000,000",
              "withdraw": "127,028,991"
            }
          },
          "Hiền test BDS": {
            "new_user": {
              "deposit": "8,000,000",
              "withdraw": "0"
            },
            "old_user": {
              "deposit": "95,000,000",
              "withdraw": "127,028,991"
            },
            "all_user": {
              "deposit": "103,000,000",
              "withdraw": "127,028,991"
            }
          },
          "test duyệt nạp": {
            "new_user": {
              "deposit": "0",
              "withdraw": "0"
            },
            "old_user": {
              "deposit": "5,000,000",
              "withdraw": "10,085,645"
            },
            "all_user": {
              "deposit": "5,000,000",
              "withdraw": "10,085,645"
            }
          },
          "Test jmeter": {
            "new_user": {
              "deposit": "0",
              "withdraw": "0"
            },
            "old_user": {
              "deposit": "6,000,000",
              "withdraw": "17,269,095"
            },
            "all_user": {
              "deposit": "6,000,000",
              "withdraw": "17,269,095"
            }
          },
        };
      } catch (e) {
        console.error(e);
      }
    },
    async fetchAumDetail() {
      try {
        // const res = await ReportService.realEstateAum(this.params);
        // this.aumUserCollection = res.data;
        this.aumDetail = {
          "sp1": {
              "date": "27/01/2022",
              "deposit": "8,000,000",
              "withdraw": "0",
              "aum": "0",
              "deposit_number": "3",
              "withdraw_number": "3"
          }
        }
      } catch (e) {
        console.error(e);
      }
    },
    async fetchTransaction() {
      try {
        const res = await ReportService.realEstateTransaction(this.params);
        this.aum = res.data;
      } catch (e) {
        console.error(e);
      }
    },
    async fetchMoving() {
      try {
        const res = await ReportService.realEstateMoving(this.params);
        this.moving = res.data;
      } catch (e) {
        console.error(e);
      }
    },
    setParams(params, itemType = 3) {
      this.params.source_item_type = itemType;
      this.params = params;
    },
  },
  mutations: {

  }
});

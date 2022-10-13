import Service from "./service";
import { API_WH_URL } from "@/utils/constant";

class RealEstateReportService {
  constructor() {
    this.url = API_WH_URL;
  }
  realEstateAum(params = {}) {
    return Service.get(this.url + "/api/report/aum", params);
  }
  realEstateTransaction(params = {}) {
    return Service.get(this.url + "/api/report/transaction", params);
  }
  realEstateMoving(params = {}) {
    return Service.get(this.url + "/api/report/moving", params);
  }
}

export default new RealEstateReportService();

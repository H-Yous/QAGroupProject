import axios from "axios";

class BookingService {
  getPricingInformation() {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] =
      "http://localhost:3000";

    return axios.get("http://localhost:8080/pricing");
  }
}

export default new BookingService();

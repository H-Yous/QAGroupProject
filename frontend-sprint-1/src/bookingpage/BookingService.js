import axios from "axios";

class BookingService {
  getPricingInformation() {
    return axios.get("http://localhost:8080/pricing");
  }
}

export default new BookingService();

import axios from "axios";
export default axios.create({
    baseURL:"https://urlscan.io/api/v1",
    paramsSerializer: function paramsSerializer(params) {
        return "q=" + Object.entries(Object.assign({}, params)).
          map(([key, value]) => `${key}:${value}`).
          join('&');
      }
})
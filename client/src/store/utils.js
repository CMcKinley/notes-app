import axios from "axios";

// Store tools will be used to make http calls to the node api
export default class StoreTools {
  async base(url, body, method = "get", headers = {}) {
    let config = { url: `/api/v1/${url}`, method, headers };
    if (body) {
      config.data = body;
    }
    return axios(config);
  }
  // GET requests
  async get(url, headers = {}) {
    return this.base(url, null, "get", headers);
  }
  // PUT requests
  put(url, body, headers = {}) {
    return this.base(url, body, "put", headers);
  }
  // POST requests
  post(url, body, headers = {}) {
    return this.base(url, body, "post", headers);
  }
}

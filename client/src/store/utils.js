import { axios } from "axios";

export default class StoreTools {
  base(url, body, method = "get", headers = {}) {
    const config = { url: `api/v1/${url}`, method, headers };
    if (body) {
      config.body = body;
    }
    return axios(config);
  }

  get(url, headers = {}) {
    return this.base(url, null, "get", headers);
  }

  put(url, body, headers = {}) {
    return this.base(url, body, "put", headers);
  }

  post(url, body, headers = {}) {
    return this.base(url, body, "post", headers);
  }
}

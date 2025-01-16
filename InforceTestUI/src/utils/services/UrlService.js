import HttpClient from "../http/HttpClient";

export class UrlsService {
  static httpClient = new HttpClient({
    baseURL: "http://localhost:5205/urls",
  });

  static setAuthorizationToken(token) {
    this.httpClient.setAuthorizationToken(token);
  }

  static async getAllUrls() {
    return await this.httpClient.get("get-all");
  }

  static async getUrlById(urlId) {
    return await this.httpClient.get(`get-by-id/${urlId}`);
  }

  static async createUrl(model) {
    return await this.httpClient.post("create", model);
  }

  static async deleteUrl(urlId) {
    return await this.httpClient.delete(`delete/${urlId}`);
  }
}

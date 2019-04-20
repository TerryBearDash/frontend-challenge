import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {

  protected url = 'https://www.mocky.io/v2';
  queryString: string;

  constructor(
    private http: HttpClient
  ) { }

  private getHeaders() {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    let options = {
        headers: headers
    }
    return options;
  }

  private serialize = function(obj) {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  };

  get(endpoint: string, params?: any) {
    return params ? ( this.queryString = this.serialize(params) ) && ( this.http.get(`${this.url}/${endpoint}?${this.queryString}`, this.getHeaders() ) ) : ( this.http.get(`${this.url}/${endpoint}`, this.getHeaders()));
  }

  post(endpoint: string, body?: any) {
    return this.http.post(`${this.url}/${endpoint}`, body, this.getHeaders());
  }

  put(endpoint: string, body?: any) {
    return this.http.put(`${this.url}/${endpoint}`, body, this.getHeaders());
  }

  patch(endpoint: string, body?: any) {
    return this.http.patch(`${this.url}/${endpoint}`, body, this.getHeaders());
  }

  delete(endpoint: string, params?: any) {
    return params ? ( this.queryString = this.serialize(params) ) && ( this.http.delete(`${this.url}/${endpoint}?${this.queryString}`, this.getHeaders() ) ) : ( this.http.delete(`${this.url}/${endpoint}`, this.getHeaders()));
  }

}
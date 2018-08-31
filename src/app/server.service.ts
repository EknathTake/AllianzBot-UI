import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  getServer(value) {
    return this.http.get("http://10.204.253.41:8080/allianz-bot/search/document?q=" + value);
  }
}

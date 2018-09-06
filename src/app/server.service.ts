import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }

  getServer(value) {
    return this.http.get('http://10.204.253.41:8080/allianz-bot/search/document?q=' + value);
  }

  putLike(value) {
    return this.http.put('http://10.204.253.41:8080/allianz-bot/update/document', value, {headers: this.headers});
    //return this.getServer(value.question);
  }

  putDisLike(value) {
     return this.http.put('http://10.204.253.41:8080/allianz-bot/update/document', value, {headers: this.headers});
  }
}

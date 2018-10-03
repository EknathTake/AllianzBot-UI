import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

const baseUrl: string = 'http://localhost:8080/allianz-bot/';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getServer(value) {
    return this.http.get(baseUrl + 'search/document?q=' + value);
  }

  putLike(value) {
    return this.http.put(baseUrl + 'update/document', value, {headers: this.headers});
  }

  putDisLike(value) {
    return this.http.put(baseUrl + 'update/document', value, {headers: this.headers});
  }

  loadAssesment(topic) {
    return this.http.get(baseUrl + 'assesment/questions?topic=' + topic);
  }

  postUserChoiceAnswer(userChoiceAnswer) {
    return this.http.post(baseUrl + 'assesment/answer', userChoiceAnswer, {headers: this.headers});
  }

  finishAssesment() {
    return this.http.post(baseUrl + 'assesment/finished', {}, {headers: this.headers});
  }
}

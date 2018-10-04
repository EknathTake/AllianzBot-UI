import {Component, OnInit} from '@angular/core';
import {ServerService} from '../server.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-bot-home-screen',
  templateUrl: './bot-home-screen.component.html',
  styleUrls: ['./bot-home-screen.component.scss']
})
export class BotHomeScreenComponent implements OnInit {
  searchValue = '';
  answers = [{content: ''}];
  newDocument = {id: '', likes: 0, score: 0, answer: '', question: ''};

  constructor(private serverService: ServerService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
  }

  onGetServerSearch(value) {
    this.spinner.show();
    this.serverService.getServer(value)
      .subscribe(
        (response) => {
          this.spinner.hide();
          const jsonData = response.json();
          this.changeCurrent(jsonData);
        },
        (error) => {
          this.spinner.hide();
          console.log(error);
        }
      );
  }

  sendLike(oldDocument, query) {
    this.spinner.show();
    this.newDocument.id = oldDocument.id;
    this.newDocument.answer = oldDocument.answer;
    this.newDocument.question = query;
    console.log('before' + this.newDocument.likes);
    this.newDocument.likes = oldDocument.likes + 1234;
    console.log('after' + this.newDocument.likes);
    this.newDocument.score = oldDocument.score;
    this.serverService.putLike(this.newDocument)
      .subscribe(
        (response) => {
          this.spinner.hide();
          const value = response.json();
          this.changeCurrent(value);
        },
        (error) => {
          this.spinner.hide();
          console.log(error);
        }
      );
  }

  sendDisLike(oldDocument, query) {
    this.newDocument.id = oldDocument.id;
    this.newDocument.answer = oldDocument.answer;
    console.log('before' + this.newDocument.likes);
    this.newDocument.likes = oldDocument.likes - 1234;
    console.log('after' + this.newDocument.likes);
    this.newDocument.question = query;
    this.newDocument.score = oldDocument.score;
    this.serverService.putDisLike(this.newDocument)
      .subscribe(
        (response) => {
          const value = response.json();
          this.changeCurrent(value);
        },
        (error) => console.log(error)
      );
  }

changeCurrent(c) {
    this.answers = c.documents;
  }
}

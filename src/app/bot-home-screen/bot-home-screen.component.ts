import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ServerService} from '../server.service';
import {stringDistance} from 'codelyzer/util/utils';

@Component({
  selector: 'app-bot-home-screen',
  templateUrl: './bot-home-screen.component.html',
  styleUrls: ['./bot-home-screen.component.scss']
})
export class BotHomeScreenComponent implements OnInit {
  searchValue = '';
  showData = [];
  /*@Output() answerAdded = new EventEmitter<{ansContent: string}>();*/
  answers = [{content: 'just first answer test'}];

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
  }

  onGetServerSearch (value) {
    this.serverService.getServer(value)
      .subscribe(
        (response) => {
          const jsonData = response.json();
          this.changeCurrent(jsonData);
          },
              (error) => console.log(error)
      );
  }

  changeCurrent(c) {
    console.log(c);
    this.answers = c.documents;

  }

 /* answerAdded (c) {
    this.answers.push({
      content: c
  });*/

}

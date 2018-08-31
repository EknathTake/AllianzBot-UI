import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ServerService} from '../server.service';
import {stringDistance} from 'codelyzer/util/utils';
import {assertNumber} from '@angular/core/src/render3/assert';

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
  likeInfo = {id: String , hits: Number};

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
  }

  onGetServerSearch(value) {
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

  sendLike(id) {
    this.likeInfo.id  = id;
    this.likeInfo.hits = 1;
    this.serverService.putLike(this.likeInfo)
      .subscribe(
        (response) => {
          const value = response.json();
          console.log(value);
        },
        (error) => console.log(error)
      );
  }

  sendDisLike(id) {
    this.likeInfo.id  = id;
    this.likeInfo.hits = 1;
    this.serverService.putDisLike(this.likeInfo)
      .subscribe(
        (response) => {
          const value = response.json();
          console.log(value);
        },
        (error) => console.log(error)
      );
  }

}

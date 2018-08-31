import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot-search-result',
  templateUrl: './bot-search-result.component.html',
  styleUrls: ['./bot-search-result.component.scss']
})
export class BotSearchResultComponent implements OnInit {
  /*answers = [{content: 'just first answer test'}];*/
  constructor() { }

  ngOnInit() {
  }

  /*answerAdded(ansData: {ansContent: string}) {
    this.answers.push({
      content: ansData.ansContent;
    });
  }*/
}

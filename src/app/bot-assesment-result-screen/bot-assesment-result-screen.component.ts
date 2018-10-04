import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bot-assesment-result-screen',
  templateUrl: './bot-assesment-result-screen.component.html',
  styleUrls: ['./bot-assesment-result-screen.component.scss']
})
export class BotAssesmentResultScreenComponent implements OnInit {

  allianzBotExam = {
    startTime: '',
    finishTime: '',
    user: {
      userId: 0,
      username: '',
      password: ''
    },
    score: 0,
    topic: ''
  };

  constructor(private serverService: ServerService) {  }
  submitAssesment() {
    this.serverService.finishAssesment().subscribe((response) => {
      this.allianzBotExam = response.json();
      console.log('finishAssesment: ' + this.allianzBotExam);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.submitAssesment();
  }

}

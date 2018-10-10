import { Component, OnInit } from '@angular/core';
import {ServerService} from '../_services/server.service';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bot-assesment-result-screen',
  templateUrl: './bot-assesment-result-screen.component.html',
  styleUrls: ['./bot-assesment-result-screen.component.scss']
})
export class BotAssesmentResultScreenComponent implements OnInit {

  allianzBotExam = {
    startTime: {},
    finishTime: {},
    user: {
      userId: 0,
      username: '',
      password: ''
    },
    score: 0,
    topic: '',
    percentages: 0,
    totalMarks: 0,
    finalResult: ''
  };

  constructor(private serverService: ServerService, private spinner: NgxSpinnerService) {  }
  submitAssesment() {
    this.spinner.show();
    this.serverService.finishAssesment().subscribe((response) => {
      this.allianzBotExam = response.json();
      console.log('finishAssesment: ' + this.allianzBotExam);
      this.spinner.hide();
    }, (error) => {
      console.log(error);
      this.spinner.hide();
    });
  }

  sendMailToLead() {
    this.spinner.show();
    this.serverService.sendMailToLead(this.allianzBotExam).subscribe((response) => {
      console.log(response);
      this.spinner.hide();
    }, (error) => {
      console.log(error);
      this.spinner.hide();
    });
  }

  ngOnInit() {
    this.submitAssesment();
  }

}

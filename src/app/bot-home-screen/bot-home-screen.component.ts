import {Component, OnInit} from '@angular/core';
import {ServerService} from '../_services/server.service';
import {NgxSpinnerService} from 'ngx-spinner';
import { PagerService } from '../_services/pager.service';

@Component({
  selector: 'app-bot-home-screen',
  templateUrl: './bot-home-screen.component.html',
  styleUrls: ['./bot-home-screen.component.scss']
})
export class BotHomeScreenComponent implements OnInit {
  searchValue = '';
  answers = [{
    documents: [],
    error: ''
  }];
  newDocument = {
    id: '',
    likes: 0,
    score: 0,
    answer: '',
    question: '',
    allianzBotTestCenterData: {
      team: '',
      testCaseId: '',
      autoStatus: '',
      requirementsId: '',
      riskClass: '',
      testSetId: '',
      testLabPath: '',
      executionDate: '',
      executionStatus: '',
      failedRunCount: '',
      defectIdStr: '',
      failedStep: '',
      failedLog: '',
      screenShotPath: '',
      failureCategory: '',
      defectId: 0,
      errorCount: 0
    }
  };

  updateScoreResponse = {
    allianzBotDocument: {},
    status: {
      timestamp: '',
      statusCode: 0,
      message: ''
    }
  }

   // pager object
   pager: any = {};

   // paged items
   pagedItems: any[];

  constructor(private serverService: ServerService,
     private spinner: NgxSpinnerService,
     private pagerService: PagerService) {
  }

  ngOnInit() {
  }

  onGetServerSearch(value) {
    this.spinner.show();
    this.serverService.getServer(value).subscribe(
        (response) => {
          this.spinner.hide();
          const jsonData = response.json();
          this.changeCurrent(jsonData);
          // initialize to page 1
          this.setPage(1);
        },
        (error) => {
          this.spinner.hide();
          console.log(error);
        });
      this.spinner.hide();
  }

  sendLike(oldDocument, query) {
    console.log('comes here');
    this.spinner.show();
    this.newDocument.id = oldDocument.id;
    this.newDocument.answer = oldDocument.answer;
    this.newDocument.question = query;
    if (oldDocument.allianzBotTestCenterData != null) {
      this.newDocument.allianzBotTestCenterData.autoStatus = oldDocument.allianzBotTestCenterData.autoStatus;
      this.newDocument.allianzBotTestCenterData.team = oldDocument.allianzBotTestCenterData.team;
      this.newDocument.allianzBotTestCenterData.testCaseId = oldDocument.allianzBotTestCenterData.testCaseId;
      this.newDocument.allianzBotTestCenterData.requirementsId = oldDocument.allianzBotTestCenterData.requirementsId;
      this.newDocument.allianzBotTestCenterData.riskClass = oldDocument.allianzBotTestCenterData.riskClass;
      this.newDocument.allianzBotTestCenterData.testSetId = oldDocument.allianzBotTestCenterData.testSetId;
      this.newDocument.allianzBotTestCenterData.testLabPath = oldDocument.allianzBotTestCenterData.testLabPath;
      this.newDocument.allianzBotTestCenterData.executionDate = oldDocument.allianzBotTestCenterData.executionDate;
      this.newDocument.allianzBotTestCenterData.executionStatus = oldDocument.allianzBotTestCenterData.executionStatus;
      this.newDocument.allianzBotTestCenterData.failedRunCount = oldDocument.allianzBotTestCenterData.failedRunCount;
      this.newDocument.allianzBotTestCenterData.defectIdStr = oldDocument.allianzBotTestCenterData.defectIdStr;
      this.newDocument.allianzBotTestCenterData.failedStep = oldDocument.allianzBotTestCenterData.failedStep;
      this.newDocument.allianzBotTestCenterData.failedLog = oldDocument.allianzBotTestCenterData.failedLog;
      this.newDocument.allianzBotTestCenterData.screenShotPath = oldDocument.allianzBotTestCenterData.screenShotPath;
      this.newDocument.allianzBotTestCenterData.failureCategory = oldDocument.allianzBotTestCenterData.failureCategory;
      this.newDocument.allianzBotTestCenterData.defectId = oldDocument.allianzBotTestCenterData.defectId;
      this.newDocument.allianzBotTestCenterData.errorCount = oldDocument.allianzBotTestCenterData.errorCount;
    }
    console.log('before' + oldDocument.likes);
    this.newDocument.likes = oldDocument.likes + 1;
    console.log('after' + this.newDocument.likes);
    this.newDocument.score = oldDocument.score;
    this.serverService.putLike(this.newDocument)
      .subscribe(
        (response) => {
          this.spinner.hide();
          this.updateScoreResponse = response.json();
        },
        (error) => {
          this.spinner.hide();
          console.log(error);
        }
      );
      this.spinner.hide();
      console.log('comes here too');
  }

  sendDisLike(oldDocument, query) {
    this.newDocument.id = oldDocument.id;
    this.newDocument.answer = oldDocument.answer;
    console.log('before' + this.newDocument.likes);
    this.newDocument.likes = oldDocument.likes - 1;
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
      this.spinner.hide();
  }

changeCurrent(c) {
    this.answers = c.documents;
}
setPage(page: number) {
  // get pager object from service
  this.pager = this.pagerService.getPager(this.answers.length, page);

  // get current page of items
  this.pagedItems = this.answers.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}

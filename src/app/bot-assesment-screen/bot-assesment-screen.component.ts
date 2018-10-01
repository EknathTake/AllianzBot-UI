import {Component, OnInit} from '@angular/core';
import {ServerService} from '../server.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bot-assesment-screen',
  templateUrl: './bot-assesment-screen.component.html',
  styleUrls: ['./bot-assesment-screen.component.scss']
})
export class BotAssesmentScreenComponent implements OnInit {
  questions = {
    questionId: 0,
    question: '',
    objectives: [{
      objective: '',
      isChecked: false
    }],
    isMultiAnswer: false,
    userAnswer: '',
    topic: ''
  };
  totalQuestions: number;
  currentIndex = 0;

  constructor(private serverService: ServerService, private spinner: NgxSpinnerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.onLoadAssesment(params['topic']));
  }

  onLoadAssesment(topic) {
    this.serverService.loadAssesment(topic)
      .subscribe(
        (response) => {
          this.spinner.show();
          const jsonData = response.json();
          this.changeCurrent(jsonData);
          this.spinner.hide();
        },
        (error) => {
          this.spinner.hide();
          console.log(error);
        }
      );
  }

  loadNextQuestionAt(index: number) {
    if (index < this.totalQuestions - 1) {
      this.currentIndex = index + 1;
    }
    console.log('currentIndex :' + this.currentIndex);
  }

  loadPreviousQuestionAt(index: number) {
    if (index > 0) {
      this.currentIndex = index - 1;
    }
    console.log('currentIndex :' + this.currentIndex);
  }

  changeCurrent(c) {
    this.totalQuestions = c.length;
    this.questions = c;
  }

  changeSelectedState(curIndex, arrIndex) {
    if (this.questions[curIndex].objectives[arrIndex].checked) {
      this.questions[curIndex].objectives[arrIndex].checked = false;
    } else {
      this.questions[curIndex].objectives[arrIndex].checked = true;
    }
    console.log(this.questions[curIndex].objectives[arrIndex].checked);
  }

}

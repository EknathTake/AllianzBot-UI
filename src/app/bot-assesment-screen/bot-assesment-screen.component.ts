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
      checked: false
    }],
    isMultiAnswer: false,
    userAnswer: '',
    topic: ''
  };
  totalQuestions: number;
  currentIndex = 0;
  objectives = [{
    objective: '',
    checked: false
  }];

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
    this.postUserChoiceAnswer();

    if (index < this.totalQuestions - 1) {
      this.currentIndex = index + 1;
    }
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

  changeSelectedState(curIndex, arrIndex, isRadioButton) {
    if (isRadioButton) {
      this.objectives = this.questions[curIndex].objectives;
      for (let i = 0; i < this.objectives.length; i++) {
        if (arrIndex === i) {
          this.objectives[i].checked = true;
         // this.questions[curIndex].userAnswer =
        } else {
          this.objectives[i].checked =  false;
        }
      }
    } else {
      if (this.questions[curIndex].objectives[arrIndex].checked) {
        this.questions[curIndex].objectives[arrIndex].checked = false;
      } else {
        this.questions[curIndex].objectives[arrIndex].checked = true;
      }
    }
    console.log(this.questions);
  }

  postUserChoiceAnswer() {
    console.log('posting succesfully :' + this.questions[this.currentIndex]);
    this.serverService.postUserChoiceAnswer(this.questions[this.currentIndex]).subscribe((response) =>{
      const value = response.json();
      console.log(value);
    });
    console.log('posted succesfully :' + this.questions[this.currentIndex]);
  }

  finishAssesment() {
    this.postUserChoiceAnswer();
    this.serverService.finishAssesment().subscribe((response) => {
      const val = response.json();
      console.log(val);
    });
  }
}

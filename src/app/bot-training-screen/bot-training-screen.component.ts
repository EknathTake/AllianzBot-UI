import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-bot-training-screen',
  templateUrl: './bot-training-screen.component.html',
  styleUrls: ['./bot-training-screen.component.scss']
})
export class BotTrainingScreenComponent implements OnInit {
  public topic: string;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.route.params.subscribe(params => {
      this.topic = params['topic'];
      //alert(this.topic);
    });
  }

  ngOnInit() {
  }

  loadDocument() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('http://www.allianz-bot.com:8080/allianz-bot/allianz-bot/documents/' + this.topic + '.pdf');
  }
}

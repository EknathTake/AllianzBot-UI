import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bot-login-screen',
  templateUrl: './bot-login-screen.component.html',
  styleUrls: ['./bot-login-screen.component.scss']
})
export class BotLoginScreenComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor() { }

  ngOnInit() {
  }

}

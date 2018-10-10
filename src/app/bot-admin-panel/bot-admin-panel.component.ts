import { Component, OnInit } from '@angular/core';
import {ServerService} from '../_services/server.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-bot-admin-panel',
  templateUrl: './bot-admin-panel.component.html'
})
export class BotAdminPanelComponent implements OnInit {

  constructor(private service: ServerService, private spinner: NgxSpinnerService) { }

  ngOnInit() { }

  loadAssesment() {
    this.spinner.show();
    this.service.loadAssesmentInSolr().subscribe((response) => {
      console.log('success loadAssesmentInSolr' + response);
      this.spinner.hide();
    }, (error) => {
      console.log('error loadAssesmentInSolr' + error);
      this.spinner.hide();
    });
  }
  
  loadDocuments() {
    this.spinner.show();
    this.service.loadDocumentsInSolr().subscribe((response) => {
      console.log('success loadDocumentsInSolr' + response);
      this.spinner.hide();
    }, (error) => {
      console.log('error loadDocumentsInSolr' + error);
      this.spinner.hide();
    });
  }

}

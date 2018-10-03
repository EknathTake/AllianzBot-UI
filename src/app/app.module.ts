import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotHomeScreenComponent } from './bot-home-screen/bot-home-screen.component';
import { BotSearchResultComponent } from './bot-search-result/bot-search-result.component';
import { HeaderComponent } from './bot-header-screen/header.component';
import { HttpModule } from '@angular/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { BotPageNotFoundScreenComponent } from './bot-page-not-found-screen/bot-page-not-found-screen.component';
import { BotTrainingScreenComponent } from './bot-training-screen/bot-training-screen.component';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule
} from '@angular/material';
import { BotAssesmentScreenComponent } from './bot-assesment-screen/bot-assesment-screen.component';
import { BotAssesmentResultScreenComponent } from './bot-assesment-result-screen/bot-assesment-result-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    BotHomeScreenComponent,
    BotSearchResultComponent,
    HeaderComponent,
    BotPageNotFoundScreenComponent,
    BotTrainingScreenComponent,
    BotAssesmentScreenComponent,
    BotAssesmentResultScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgxSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotHomeScreenComponent } from './bot-home-screen/bot-home-screen.component';
import { BotSearchResultComponent } from './bot-search-result/bot-search-result.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule, Routes} from '@angular/router';
import { BotPageNotFoundScreenComponent } from './bot-page-not-found-screen/bot-page-not-found-screen.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: BotHomeScreenComponent
  },
  {
    path: '**',
    component: BotPageNotFoundScreenComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BotHomeScreenComponent,
    BotSearchResultComponent,
    HeaderComponent,
    BotPageNotFoundScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgxSpinnerModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BotHomeScreenComponent} from './bot-home-screen/bot-home-screen.component';
import {BotTrainingScreenComponent} from './bot-training-screen/bot-training-screen.component';
import {BotAssesmentScreenComponent} from './bot-assesment-screen/bot-assesment-screen.component';
import {BotPageNotFoundScreenComponent} from './bot-page-not-found-screen/bot-page-not-found-screen.component';

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
    path: 'training/:topic',
    component: BotTrainingScreenComponent
  },
  {
    path: 'assesment/:topic',
    component: BotAssesmentScreenComponent
  },
  {
    path: '**',
    component: BotPageNotFoundScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

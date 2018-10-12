import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BotHomeScreenComponent} from './bot-home-screen/bot-home-screen.component';
import {BotTrainingScreenComponent} from './bot-training-screen/bot-training-screen.component';
import {BotAssesmentScreenComponent} from './bot-assesment-screen/bot-assesment-screen.component';
import {BotPageNotFoundScreenComponent} from './bot-page-not-found-screen/bot-page-not-found-screen.component';
import {BotAssesmentResultScreenComponent} from './bot-assesment-result-screen/bot-assesment-result-screen.component';
import {BotAdminPanelComponent} from './bot-admin-panel/bot-admin-panel.component';
import { BotLoginScreenComponent } from './bot-login-screen/bot-login-screen.component';
import { BotRegistrationScreenComponent } from './bot-registration-screen/bot-registration-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: BotLoginScreenComponent
  },
  {
    path: 'register',
    component: BotRegistrationScreenComponent
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
    path: 'assesment/finished/result',
    component: BotAssesmentResultScreenComponent
  },
  {
    path: 'admin/training',
    component: BotAdminPanelComponent
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

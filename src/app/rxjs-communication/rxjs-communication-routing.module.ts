import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CheckMessagesComponent } from './check-messages/check-messages.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'check-messages', component: CheckMessagesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsCommunicationRoutingModule { }

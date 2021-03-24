import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RxjsCommunicationRoutingModule } from './rxjs-communication-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { CheckMessagesComponent } from './check-messages/check-messages.component';


@NgModule({
  declarations: [HomeComponent, SidebarRightComponent, CheckMessagesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RxjsCommunicationRoutingModule
  ]
})
export class RxjsCommunicationModule { }

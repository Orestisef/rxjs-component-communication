import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-check-messages',
  templateUrl: './check-messages.component.html'
})
export class CheckMessagesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionBehavior: Subscription;
  subscriptionReplay: Subscription;
  
  message: Array<string> = [];
  messageBehavior: Array<string> = [];
  messageReplay: Array<string> = [];

  constructor(private subjectService: SubjectsService) { } 

  ngOnInit(): void {
    this.subscription = this.subjectService.getMessage().subscribe(resp=>{
      console.log('response:' + resp);
      this.message.push(resp);
    })

    this.subscriptionBehavior = this.subjectService.getMessageBehavior().subscribe(
      resp=>{
        this.messageBehavior.push(resp);
      })

    this.subscriptionReplay = this.subjectService.getMessageReplay().subscribe(
      resp=>{
        this.messageReplay.push(resp);
      })
  }

  ngOnDestroy() {
		this.subscription.unsubscribe();
    this.subscriptionBehavior.unsubscribe();			
    this.subscriptionReplay.unsubscribe();							
	}
}

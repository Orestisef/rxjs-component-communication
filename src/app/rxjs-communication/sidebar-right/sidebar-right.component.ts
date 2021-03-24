import { Component, OnInit } from '@angular/core';

import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html'
})
export class SidebarRightComponent implements OnInit {
  myMessage: string = '';
  
  constructor(private subjectService: SubjectsService) { }

  ngOnInit(): void {
  }

  getTheMessage(){
    if(this.myMessage.length) {
      this.subjectService.sendMessage(this.myMessage);
      this.myMessage = '';
    }
  }
}

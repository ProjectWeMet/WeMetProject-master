import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDashboardService } from 'src/app/Service/user-dashboard.service';

@Component({
  selector: 'app-my-work-card',
  templateUrl: './my-work-card.component.html',
  styleUrls: ['./my-work-card.component.css']
})
export class MyWorkCardComponent implements OnInit {

  @Input () myWorkId:number|undefined;
  @Input () titel: string|undefined;
  @Input () description: string|undefined;
  @Input () link: string|undefined;
  @Input () completionDate:string|undefined;
  @Input () skill: string|undefined;
  @Input () imageName: string|undefined;
  @Input () userId: number|undefined;
 
  
  
  constructor(public UserService:UserDashboardService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  @Input() programId: any;
  private activities;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.listForProgram(this.programId).then(
      result => this.activities = result
    );
  }
  
}

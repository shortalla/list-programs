import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../activity.service';
import { ActivityModel } from '../../activity.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  @Input() private programId: number;
  private activities: ActivityModel[];

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.activityService.listForProgram(this.programId).then(
      result => this.activities = result.map(
        data => ActivityModel.fromJson(data)
      )
    );
  }
  
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivityModel } from '../../models/activity.model';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {
  @Input() private activity: ActivityModel;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {}

  delete() {
    this.activityService.delete(this.activity.id);
  }
}

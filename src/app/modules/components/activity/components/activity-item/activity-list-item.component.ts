import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../activity.service';
import { ActivityModel } from '../../activity.model';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {
  @Input() private activity: ActivityModel;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    console.log(this.activity);
  }

  delete() {
    this.activityService.delete(this.activity.id);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../activity.service';
import { ActivityModel } from '../../activity.model';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {
  @Input() private activity;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {}

  delete() {
    this.activityService.delete(this.activity.id);
  }
}

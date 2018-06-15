import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivityModel } from '../../models/activity.model';
import { Store } from '@ngrx/store';
import { State } from '../../store/activity.reducer';
import * as actions from '../../store/activity.actions';
import * as programActions from '../../../program/store/program.actions';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {
  @Input() private activity: ActivityModel;

  constructor(private activityService: ActivityService,
              private store: Store<State>) { }

  ngOnInit() {}

  delete() {
    // /Should dispatch delete event here

    // this.store.dispatch(new actions.Delete({
    //   id: this.activity.id
    // }));
    this.activityService.delete(this.activity.id);
    this.store.dispatch(new programActions.LoadList());
  }
}

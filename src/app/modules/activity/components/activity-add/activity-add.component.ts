import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { Store } from '@ngrx/store';
import * as actions from '../../store/activity.actions';
import { State } from '../../store/activity.reducer';
import { ActivityModel } from '../../models/activity.model';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.scss']
})

export class ActivityAddComponent implements OnInit {
  @Input() private programId: number;
  private activityForm: FormGroup;
  private message: string;

  constructor(private formBuilder: FormBuilder,
              private activityService: ActivityService,
              private store: Store<State>) {}

  ngOnInit() {
    this.initForm();
  }

  /**
   * Initialize the form
   */
  initForm() {
    this.activityForm = this.formBuilder.group({
      name: [null, Validators.required],
      startDate: [null],
      endDate: [null],
    });
  }

  /**
   * Add the activity specified in the form to the program
   */
  addActivity() {
    const form = this.activityForm.value;
    const activity = new ActivityModel(
      form.name,
      form.startDate,
      form.endDate
    );

    // Should dispatch create event here
    this.store.dispatch(new actions.Create({
      programId: this.programId,
      name: form.name,
      startDate: form.startDate,
      endDate: form.endDate
    }));

    // this.activityService.add(
    //   this.programId,
    //   activity
    // ).then(
    //   success => {
    //     this.message = `Success! ${form.name} was created`;
    //     this.initForm();
    //     setTimeout(() => this.message = undefined, 1000);
    //   },
    //   error => {
    //     this.message = `Error! ${form.name} was not created`;
    //   }
    // );
  }

  errorClass(controls) {
    return {
      'add-activity-form__message-shown' : !controls['name'].valid && controls['name'].touched
    }
  }

  successClass() {
    return {
      'add-activity-form__message-shown' : Boolean(this.message)
    }
  }
}

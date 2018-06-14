import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../activity.service';
import { Store } from '@ngrx/store';
import * as actions from '../../activity.actions';
import * as fromAction from '../../activity.reducer';

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
              private store: Store<fromAction.State>) {}

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
    const activity = {
      id: null,
      name: form.name,
      startDate: form.startDate,
      endDate: form.endDate,
    };
    this.store.dispatch(new actions.Create(activity));

    this.activityService.add({
      programId: this.programId,
      name: form.name,
      startDate: form.startDate,
      endDate: form.endDate
    }).then(
      success => {
        this.message = `Success! ${form.name} was created`;
        this.initForm();
        setTimeout(() => this.message = undefined, 1000);
      }
    );
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

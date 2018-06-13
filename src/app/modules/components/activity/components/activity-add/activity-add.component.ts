import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../activity.service';
import { ActivityModel } from '../../activity.model';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.scss']
})

export class ActivityAddComponent implements OnInit {
  @Input() private programId: number;
  private activityForm: FormGroup;
  private name: string = '';
  private startDate: Date = null;
  private endDate: Date = null;

  constructor(private formBuilder: FormBuilder,
              private activityService: ActivityService) {}

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
    this.name = form.name;
    this.startDate = form.startDate;
    this.endDate = form.endDate;
    this.activityService.add(
      this.programId,
      new ActivityModel(
        this.name,
        this.startDate,
        this.endDate
      )
    );
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivityAddComponent } from './components/activity-add/activity-add.component';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { CoreModule } from '../../../core/core.module';
import { ActivityService } from './activity.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    ActivityAddComponent, 
    ActivityItemComponent, 
    ActivityListComponent
  ],
  providers: [
    ActivityService
  ],
  exports: [
    ActivityAddComponent, 
    ActivityItemComponent, 
    ActivityListComponent
  ],
})
export class ActivityModule { }

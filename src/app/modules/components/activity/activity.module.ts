import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivityAddComponent } from './components/activity-add/activity-add.component';
import { ActivityListItemComponent } from './components/activity-item/activity-list-item.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { CoreModule } from '../../../core/core.module';
import { ActivityService } from './activity.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { StoreModule } from '@ngrx/store';
import { activityReducer } from './activity.reducer';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forFeature('activity', activityReducer),
  ],
  declarations: [
    ActivityAddComponent, 
    ActivityListItemComponent, 
    ActivityListComponent
  ],
  providers: [
    ActivityService
  ],
  exports: [
    ActivityAddComponent, 
    ActivityListItemComponent, 
    ActivityListComponent
  ],
})
export class ActivityModule { }

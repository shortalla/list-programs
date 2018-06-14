import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivityAddComponent } from './components/activity-add/activity-add.component';
import { ActivityListItemComponent } from './components/activity-item/activity-list-item.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityService } from './services/activity.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { activityReducer } from './store/activity.reducer';
import { ActivityEffects } from './store/activity.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forFeature('activity', activityReducer),
    EffectsModule.forFeature([ActivityEffects])
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

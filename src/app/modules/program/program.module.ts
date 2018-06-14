import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { ProgramListItemComponent } from './components/program-list-item/program-list-item.component';
import { ActivityModule } from '../activity/activity.module';
import { ProgramService } from './services/program.service';
import { programReducer } from './store/program.reducer';
import { ProgramEffects } from './store/program.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    ActivityModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    StoreModule.forFeature('program', programReducer),
    EffectsModule.forFeature([ProgramEffects])
  ],
  declarations: [
    ProgramListComponent,
    ProgramListItemComponent,
  ],
  providers: [
    ProgramService
  ],
  exports: [
    ProgramListComponent,
    ProgramListItemComponent,
  ]
})
export class ProgramModule { }

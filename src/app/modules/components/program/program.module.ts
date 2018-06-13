import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { CoreModule } from '../../../core/core.module';
import { ProgramListItemComponent } from './components/program-list-item/program-list-item.component';
import { ActivityModule } from '../activity/activity.module';
import { ProgramService } from './program.service';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ActivityModule,
  ],
  declarations: [
    ProgramListComponent,
    ProgramListItemComponent,
    ProgramDetailsComponent
  ],
  providers: [
    ProgramService
  ],
  exports: [
    ProgramListComponent,
    ProgramListItemComponent,
    ProgramDetailsComponent
  ]
})
export class ProgramModule { }

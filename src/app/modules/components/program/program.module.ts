import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgramListComponent } from './components/program-list/program-list.component';
import { CoreModule } from '../../../core/core.module';
import { ProgramListItemComponent } from './components/program-list-item/program-list-item.component';
import { ActivityModule } from '../activity/activity.module';
import { ProgramService } from './program.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ActivityModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    FlexLayoutModule
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './components/list-page.component';
import { ProgramModule } from '../../modules/program/program.module';

@NgModule({
  imports: [
    CommonModule,
    ProgramModule
  ],
  declarations: [
    ListPageComponent
  ],
  exports: [
    ListPageComponent
  ]
})
export class ListPageModule { }

import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../program.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})

export class ProgramListComponent implements OnInit {
  private programs: any;

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.programs = this.programService.list();
  }
}

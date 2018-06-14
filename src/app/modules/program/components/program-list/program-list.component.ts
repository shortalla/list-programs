import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { ProgramModel } from '../../models/program.model';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})

export class ProgramListComponent implements OnInit {

  constructor(private programService: ProgramService) { }

  ngOnInit() { }

  public programs(): ProgramModel[] {
    return this.programService.list;
  }
}

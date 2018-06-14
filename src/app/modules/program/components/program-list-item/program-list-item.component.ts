import { Component, OnInit, Input } from '@angular/core';
import { ProgramModel } from '../../models/program.model';

@Component({
  selector: 'app-program-list-item',
  templateUrl: './program-list-item.component.html',
  styleUrls: ['./program-list-item.component.scss']
})

export class ProgramListItemComponent implements OnInit {
  @Input() private program: ProgramModel;

  constructor() { }

  ngOnInit() {}

}

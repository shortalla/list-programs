import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { ProgramModel } from '../../models/program.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProgramsState, getProgramList } from '../../store/program.reducer';
import * as actions from '../../store/program.actions';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})

export class ProgramListComponent implements OnInit {
  private programs$: Observable<ProgramModel[]>;

  constructor(private programService: ProgramService,
              private store: Store<ProgramsState>) { }

  ngOnInit() {
    this.programs$ = this.store.select(getProgramList);
    this.store.dispatch(new actions.LoadList());
  }
}

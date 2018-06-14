import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/api/api.service';
import 'rxjs/add/operator/map';
import { ProgramModel } from '../models/program.model';

/**
 * Service for handling events related to programs
 */
@Injectable()
export class ProgramService {
  /**
   * The complete list of programs
   */
  private _list: ProgramModel[];
  
  get list(): ProgramModel[] {
    return this._list;
  }

  constructor(private apiService: ApiService) {
    this.apiService.listPrograms().subscribe(
      data => this._list = data.map(result => ProgramModel.fromJson(result))
    );
  }
}

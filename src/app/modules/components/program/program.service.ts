import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/api/api.service';
import 'rxjs/add/operator/map';

/**
 * Service for handling events related to programs
 */
@Injectable()
export class ProgramService {
  
  constructor(private apiService: ApiService) {}

  /**
   * The complete list of programs
   */
  public list() {
    return this.apiService.listPrograms();
  }
}

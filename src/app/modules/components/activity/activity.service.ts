import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/api/api.service';
import { ActivityModel } from './activity.model';

/**
 * Service for handling events related to activities
 */
@Injectable()
export class ActivityService {
  private _list: Object[];

  get list(): Object[] {
    return this._list;
  }

  constructor(private apiService: ApiService) {
    this.loadActivities();
  }

  /**
   * Initialize the activities list
   */
  private loadActivities(): void {
    this.apiService.listActivities().subscribe(
      data => data.map(result => ActivityModel.fromJson(result)),
      error => console.error(error),
    );
  }
  
  /**
   * List the activities for a single program
   * 
   * @param programId The identifier of the program
   */
  listForProgram(programId: number): Promise<any> {
    return this.apiService.listProgramActivities(programId).toPromise();
  }
  
  /**
   * Add a new activity to a specific program.
   * 
   * @param programId The identifier of the program
   * @param activity The activity model
   */
  add(programId: number, activity: ActivityModel) {
    return this.apiService.addActivity(programId, activity);
  }

  /**
   * Delete a specific activity
   * 
   * @param activityId The identifier of the activity
   */
  delete(activityId: number) {
    return this.apiService.deleteActivity(activityId);
  }
}

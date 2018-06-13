import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

/**
 * Service for interactions with API endpoints
 */
@Injectable()
export class ApiService {
  private _apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    this._apiUrl = environment.apiUrl;
  }

  /**
   * The complete list of programs
   */
  public listPrograms(): Observable<any> {
    return this.httpClient.get(
      `${this._apiUrl}workflowlevel1/`
    );
  }

  /**
   * The complete list of activities
   */
  public listActivities(): Observable<any> {
    return this.httpClient.get(
      `${this._apiUrl}workflowlevel2/`
    );
  }

  /**
   * The list of activities for a particular program
   * 
   * @param programId The identifier of the program
   */
  public listProgramActivities(programId: number): Observable<any> {
    return this.httpClient.get(
      `${this._apiUrl}workflowlevel2/?workflowlevel1__id=${programId}`
    );
  }

  /**
   * Create a new activity for a particular program
   * 
   * @param activity The activity model
   */
  public addActivity(programId: number, activity: any) {
    const body = {
      workflowlevel1: `${this._apiUrl}workflowlevel1/${programId}/`,
      name: activity.name,
      start_date: moment(activity.startDate).toJSON(),
      end_date: moment(activity.endDate).toJSON()
    };
    return this.httpClient.post(
      `${this._apiUrl}workflowlevel2/`,
      body
    ).toPromise().then(
      success => console.log('success', success),
      error => console.log('error', error)
    );
  }

  /**
   * Delete a particular activity
   * 
   * @param activityId The identifier of the activity
   */
  public deleteActivity(activityId: any) {
    return this.httpClient.delete(
      `${this._apiUrl}workflowlevel2/${activityId}/`
    ).toPromise().then(
      success => console.log('success', success),
      error => console.log('error', error)
    );
  }
}
import * as moment from 'moment';

/**
 * Model for a single activity
 */
export class ActivityModel {
  /**
   * The identifier of the activity
   */
  public id: number;
  
  /**
   * The name of the activity
   */
  public name: string;
  /**
   * The expected start date
   */
  public startDate: Date;
  
  /**
   * The expected end date
   */
  public endDate: Date;

  constructor(name: string,
              startDate: Date,
              endDate: Date) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  public static fromJson(json): ActivityModel {
    const startDate = json.expected_start_date ? moment(json.expected_start_date).toDate() : undefined;
    const endDate = json.expected_end_date ? moment(json.expected_end_date).toDate() : undefined;
    const model = new ActivityModel(
      json.name,
      startDate,
      endDate
    );
    model.setId(json.id);
    return model;    
  }
  
  /**
   * Set the identifier of the activity
   */
  public setId(id: number) {
    this.id = id;
  }

  /**
   * Whether the activity has time set
   */
  public isTimed(): boolean {
    return Boolean(this.startDate && this.endDate);
  }
}
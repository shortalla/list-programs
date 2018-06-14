import * as moment from 'moment';

/**
 * Model for a single activity
 */
export class ActivityModel {
  public id: number;

  public name: string;
  
  public startDate: Date;

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
    return new ActivityModel(
      json.name,
      startDate,
      endDate
    );
  }

    /**
     * Whether the activity has time set
     */
    public isTimed(): boolean {
      return Boolean(this.startDate && this.endDate);
    }
}
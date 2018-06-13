import * as moment from 'moment';

/**
 * Model for a single activity
 */
export class ActivityModel {
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
        const startDate = json.start_date ? moment(json.start_date).toDate() : undefined;
        const endDate = json.start_date ? moment(json.end_date).toDate() : undefined;
        return new ActivityModel(
            json.name,
            startDate,
            endDate
        );
    }
}
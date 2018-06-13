import * as moment from 'moment';

/**
 * Model for a single program
 */
export class ProgramModel {
    public id: number;

    public name: string;
    
    public startDate: Date;

    public endDate: Date;

    constructor(id: number,
                name: string,
                startDate: Date,
                endDate: Date) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public static fromJson(json): ProgramModel {
        const startDate = json.start_date ? moment(json.start_date).toDate() : undefined;
        const endDate = json.start_date ? moment(json.end_date).toDate() : undefined;
        return new ProgramModel(
            json.id,
            json.name,
            startDate,
            endDate
        );
    }
}
/**
 * Model for a single program
 */
export class ProgramModel {
  /**
   * The identifier of the program
   */
  public id: number;

  /**
   * The name of the program
   */
  public name: string;

  constructor(id: number,
              name: string) {
    this.id = id;
    this.name = name;
  }

  public static fromJson(json): ProgramModel {
    return new ProgramModel(
      json.id,
      json.name
    );
  }
}
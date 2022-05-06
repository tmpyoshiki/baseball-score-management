export default class Field {
  private fieldId: number;
  private fieldName: string;

  constructor(fieldId: number, fieldName: string) {
    this.fieldId = fieldId;
    this.fieldName = fieldName;
  }

  public getTeamId(): number {
    return this.fieldId;
  }
  public getTeamName(): string {
    return this.fieldName;
  }
}

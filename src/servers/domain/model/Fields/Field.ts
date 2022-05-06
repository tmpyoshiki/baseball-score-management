export default class Field {
  private fieldId: number;
  private fieldName: string;

  constructor(fieldId: number, fieldName: string) {
    this.fieldId = fieldId;
    this.fieldName = fieldName;
  }

  public getFieldId(): number {
    return this.fieldId;
  }
  public getFieldName(): string {
    return this.fieldName;
  }
}

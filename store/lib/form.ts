import { makeAutoObservable } from "mobx";
class FormField {
  value: any;
  error: string = "";
  validator: (value: any, form: any) => ValidStatus;
  constructor(args?: Partial<FormField>) {
    Object.assign(this, args);
    makeAutoObservable(this);
  }
  onChange(value: any) {
    this.value = value;
  }
}

interface ValidStatus {
  success: boolean;
  error: string;
}

export class Form {
  fields: Record<string, FormField>;
  constructor(fields: Record<string, Partial<FormField>>) {
    this.fields = Object.keys(fields).reduce(
      (acc: Record<string, FormField>, key: string) => {
        acc[key] = new FormField(fields[key]);
        return acc;
      },
      {}
    );
    makeAutoObservable(this);
  }
  getValues() {
    return Object.keys(this.fields).reduce(
      (acc: Record<string, any>, key: string) => {
        acc[key] = this.fields[key].value;
        return acc;
      },
      {}
    );
  }
  validateFields() {
    const values = this.getValues()
    const hasError = Object.keys(this.fields).every((key: string) => {
      const field = this.fields[key];
      const { success, error } = field.validator?.(field.value, values) || {
        success: true
      }
      if (!success) {
        field.error = error;
        return false
      }
      return true
    });
    return {
        success: !hasError,
        values
    }
  }
}

import { FieldValidationResult } from "@/common/validations/validation.model";
import {
  INVALID_ALIAS_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
} from "./new-account.validation.const";
import {
  buildValidationFailedResult,
  buildValidationSucceededResult,
  isStringValueInformed,
} from "@/common/validations";

export const validateTypeField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(INVALID_ALIAS_MESSAGE);
  }

  return buildValidationSucceededResult();
};

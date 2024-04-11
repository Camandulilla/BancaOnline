import { FormValidationResult } from "@/common/validations/validation.model";
import { AccountVM, AccountErrors } from "../create-account.vm";
import {
  validateNameField,
  validateTypeField,
} from "./new-account-field.validation";

export const validateForm = (
  account: AccountVM
): FormValidationResult<AccountErrors> => {
  const fieldValidationResults = [
    validateTypeField(account.type),
    validateNameField(account.name),
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};

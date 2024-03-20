import {
  CredentialsFromErrors,
  createEmptyCredentialsFormErrors,
} from "./login.vm";

interface ValidationResult {
  succeeded: boolean;
  errors: CredentialsFromErrors;
}

export const validateForm = (
  credentials: CredentialsFromErrors
): ValidationResult => {
  let validationResult: ValidationResult = {
    succeeded: true,
    errors: createEmptyCredentialsFormErrors(),
  };

  if (!credentials.user.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      user: "Debe informar el campo usuario",
    };
  }

  if (!credentials.password.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      password: "Debe informar el campo password",
    };
  }

  return validationResult;
};

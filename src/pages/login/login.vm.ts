export interface Credentials {
  user: string;
  password: string;
}

export const createEmptyCredentials = (): Credentials => ({
  user: "",
  password: "",
});

export interface CredentialsFromErrors {
  user: string;
  password: string;
}

export const createEmptyCredentialsFormErrors = (): CredentialsFromErrors => ({
  user: "",
  password: "",
});

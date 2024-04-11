export interface AccountVM {
  type: string;
  name: string;
}

export const createEmptyAccount = (): AccountVM => ({
  type: "",
  name: "",
});

export interface AccountErrors {
  type: string;
  name: string;
}

export const createEmptyAccountErrors = (): AccountErrors => ({
  type: "",
  name: "",
});

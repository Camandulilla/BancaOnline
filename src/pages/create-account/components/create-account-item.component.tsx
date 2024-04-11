import React from "react";
import {
  AccountVM,
  AccountErrors,
  createEmptyAccount,
  createEmptyAccountErrors,
} from "../create-account.vm";
import classes from "./create-account-item.component.module.css";
import { validateForm } from "../validations/new-account-form.validation";

interface Props {
  accountList: AccountVM[];
  onSave: (newAccount: AccountVM) => void;
}

const SELECT_NONE = "";
const SELECT_CURRENTE_ACCOUNT = "1";
const SELECT_SAVINGS_ACCOUNT = "2";
const SELECT_PAYROLL_ACCOUNT = "3";

export const CreateAccountComponent: React.FC<Props> = (props) => {
  const { onSave } = props;

  const [account, setAccount] = React.useState<AccountVM>(createEmptyAccount());

  const [errors, setErrors] = React.useState<AccountErrors>(
    createEmptyAccountErrors()
  );

  React.useEffect(() => {
    setAccount({
      ...account,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onSave(account);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              name="type"
              onChange={handleFieldChange}
              className={classes.small}
            >
              <option value={SELECT_NONE}>Seleccionar</option>
              <option value={SELECT_CURRENTE_ACCOUNT}>Cuenta Corriente</option>
              <option value={SELECT_SAVINGS_ACCOUNT}>Cuenta de Ahorro</option>
              <option value={SELECT_PAYROLL_ACCOUNT}>Cuenta de Nómina</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              type="text"
              name="name"
              className={classes.large}
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button className={classes.button} type="submit">
          GUARDAR
        </button>
      </form>
    </div>
  );
};

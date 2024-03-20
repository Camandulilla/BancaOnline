import React from "react";
import {
  Credentials,
  CredentialsFromErrors,
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );

  const [errors, setErrors] = React.useState<CredentialsFromErrors>(
    createEmptyCredentialsFormErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Con esto evitamos que el post del submit se vaya al servidor.
    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);

    if (validationResult.succeeded) {
      onLogin(credentials);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          name="user" //coincide con el nombre que hemos asignado en el view model
          onChange={handleFieldChange}
        />
        {errors.user && <p>{errors.user}</p>}
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="text"
          id="password"
          name="password" //coincide con el nombre que hemos asignado en el view model
          onChange={handleFieldChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Acceder</button>
    </form>
  );
};

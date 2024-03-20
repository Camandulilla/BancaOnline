import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components";
import { useNavigate } from "react-router-dom";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { appRoutes } from "@/core/router";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate(); //Esto es lo que nos permite navegar una vez validado el login

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials);
    isValidLogin(apiCredentials).then((isValid) => {
      if (isValid) {
        navigate(appRoutes.accountList);
      } else {
        alert(
          "Usuario o clave no correctas. PISTA user: admin@email.com / password: test"
        );
      }
    });
  };

  return (
    <div>
      <h1>Acceso</h1>
      <LoginFormComponent onLogin={handleSubmit} />
    </div>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import {
  AccountListPage,
  LoginPage,
  MovementListPage,
  TransferPage,
} from "@/pages";
import { CreateAccountPage } from "@/pages/create-account";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />} />
        <Route path={appRoutes.accountList} element={<AccountListPage />} />
        <Route path={appRoutes.editAccount} element={<CreateAccountPage />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

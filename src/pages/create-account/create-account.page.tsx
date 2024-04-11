import React from "react";
import { AccountVM } from "./create-account.vm";
import { AppLayout } from "@/layouts";
import { getAccountList, saveAccount } from "./api/create-account.api";
import classes from "./create-account.page.module.css";
import { CreateAccountComponent } from "./components/create-account-item.component";
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi,
} from "./new-account.mapper";

export const CreateAccountPage: React.FC = () => {
  const [account, setAccount] = React.useState<AccountVM[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) => {
      setAccount(result);
    });
  }, []);

  React.useEffect(() => {
    getAccountList().then((result) => {
      const accountListVm = result.map(mapAccountFromApiToVm);

      setAccount(accountListVm);
    });
  }, []);

  const handleCreateAccount = (accountInfo: AccountVM) => {
    const createAccount = mapTransferFromVmToApi(accountInfo);

    saveAccount(createAccount).then((result) => {
      if (result) {
        alert("Cuenta creada con éxito");
      } else {
        alert("Error al crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <CreateAccountComponent
          accountList={account}
          onSave={handleCreateAccount}
        />
      </div>
    </AppLayout>
  );
};

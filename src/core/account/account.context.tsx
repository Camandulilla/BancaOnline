import React from "react";

interface Context {
  alias: string;
  setAlias: (alias: string) => void;

  iban: string;
  setIban: (iban: string) => void;

  id: string;
  setId: (id: string) => void;
}

const noUseAlias = "no use alias account";
const noUseIban = "no use iban account";
const noUseId = "no use id account";

const AccountContext = React.createContext<Context>({
  alias: noUseAlias,
  setAlias: () => {},

  iban: noUseIban,
  setIban: () => {},

  id: noUseId,
  setId: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AccountProvider: React.FC<Props> = (props) => {
  const { children } = props;

  const [accountAlias, setAccountAlias] = React.useState<string>("");
  const [accountIban, setAccountIban] = React.useState<string>("");
  const [accountId, setAccountId] = React.useState<string>("");

  return (
    <AccountContext.Provider
      value={{
        alias: accountAlias,
        setAlias: setAccountAlias,
        iban: accountIban,
        setIban: setAccountIban,
        id: accountId,
        setId: setAccountId,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => React.useContext(AccountContext);

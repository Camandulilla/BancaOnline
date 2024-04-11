import Axios from "axios";
import { Account, Create } from "./create-account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<Account[]> =>
  Axios.get<Account[]>(url).then(({ data }) => data);

export const saveAccount = (account: Create): Promise<Account> =>
  Axios.post<Account>(url, account).then(({ data }) => data);

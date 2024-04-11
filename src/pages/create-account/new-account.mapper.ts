import * as apiModel from "./api/create-account.api-model";
import * as viewModel from "./create-account.vm";

export const mapAccountFromApiToVm = (
  account: apiModel.Account
): viewModel.AccountVM => ({
  type: account.type,
  name: account.name,
});

export const mapTransferFromVmToApi = (
  account: viewModel.AccountVM
): apiModel.Create => ({
  type: account.type,
  name: account.name,
});

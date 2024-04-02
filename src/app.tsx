import React from "react";

import "./style.css";
import { Router } from "./core/router";
import { ProfileProvider } from "@/core/profile";
import { AccountProvider } from "@/core/account";

export const App: React.FC = () => {
  return (
    <ProfileProvider>
      <AccountProvider>
        <Router />
      </AccountProvider>
    </ProfileProvider>
  );
};

import { appRoutes } from "@/core/router";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./account-list-add-account.component.module.css";

const AddAccountPage: React.FC = () => {
  return (
    <>
      <Link to={appRoutes.editAccount} className={classes.link}>
        <button>AGREGAR NUEVA CUENTA</button>
      </Link>
    </>
  );
};

export default AddAccountPage;

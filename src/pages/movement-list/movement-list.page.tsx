import { AppLayout } from "@/layouts";
import React from "react";
import { MovementsVm } from "./movement-list.vm";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { useAccountContext } from "@/core/account";
import classes from "./movement-list.page.module.css";
import { MovementsCalculator } from "./components/movement-list-total.component";
import { getMovements } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementsVm[]>([]);
  const { alias, iban, id } = useAccountContext();

  React.useEffect(() => {
    if (!id) return;

    getMovements(id).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.infoMoney}>
            <h6>SALDO DISPONIBLE</h6>
            <MovementsCalculator movements={movementList} />
          </div>
        </div>
        <div className={classes.infoAccount}>
          <h3>{`Alias: ${alias}`}</h3>
          <h3>{`IBAN: ${iban}`}</h3>
        </div>
      </div>
      <MovementListTableComponent movementList={movementList} />
    </AppLayout>
  );
};

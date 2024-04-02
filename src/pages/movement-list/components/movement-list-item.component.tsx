import React from "react";
import { MovementsVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
  movementItem: MovementsVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  const getClass = (value: number) => {
    return value < 0
      ? `${classes.dataCell} ${classes.alignRight} ${classes.negativeAmount}`
      : `${classes.dataCell} ${classes.alignRight}`;
  };

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>
        {movementItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        {movementItem.transaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span className={getClass(movementItem.amount)}>
        {movementItem.amount}
      </span>
      <span className={getClass(movementItem.balance)}>
        {movementItem.balance}
      </span>
    </div>
  );
};

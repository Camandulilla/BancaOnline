import React, { useEffect, useState } from "react";
import { MovementsVm } from "../movement-list.vm";

interface Props {
  movements: MovementsVm[];
}

const calculateBalance = (movements: MovementsVm[]) => {
  if (movements.length === 0) {
    return 0; // Si no hay movimientos, el saldo es 0
  }

  const lastMovement = movements[movements.length - 1]; // Último movimiento del array
  let currentBalance = lastMovement.balance; // Balance del último movimiento

  // Iterar sobre los movimientos excepto el último
  for (let i = movements.length - 2; i >= 0; i--) {
    const movement = movements[i];
    currentBalance += movement.amount; // Aplicar el importe al saldo
  }

  return currentBalance;
};

export const MovementsCalculator: React.FC<Props> = (props) => {
  const { movements } = props;
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const calculatedBalance = calculateBalance(movements);
    setTotal(calculatedBalance);
  }, [movements]);

  return (
    <>
      <p>{total} €</p>
    </>
  );
};

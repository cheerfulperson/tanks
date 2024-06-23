import { ReactElement } from "react";
import classNames from "classnames";

import { Vehicle } from "data_layer/queries/useVehiclesQuery";
import { Nations, NationsIcons } from "constants/nations";
import { TanksTiers } from "constants/tanksTiers";
import { TanksTypesIcons } from "constants/tanksTypes";
import { formatNumber } from "utils/formatNumber";
import styles from "./Row.module.scss";

interface RowProps {
  vehicle: Vehicle;
}

/**
 * Renders a row in the VehiclesTable component.
 *
 * @param {RowProps} props - The props object containing the vehicle data.
 * @returns {ReactElement} The rendered row component.
 */
export const Row = ({ vehicle }: RowProps): ReactElement => {
  const NationIcon = NationsIcons[vehicle.nation as Nations];
  const TypeIcon = TanksTypesIcons[vehicle.type];
  const price = vehicle.price_credit || vehicle.price_gold;

  return (
    <div className={styles.rowContainer} data-testid={'row-item'}>
      <div
        className={classNames(styles.row, {
          [styles.premium]: vehicle.is_premium,
        })}
      >
        <div className={styles.tier}>{TanksTiers[vehicle.tier]}</div>
        <img src={vehicle.images.contour_icon} alt="" />
        <TypeIcon />
        <div className={styles.name}>{vehicle.name}</div>
        <div className={styles.price}>{price ? formatNumber(price) : "-"}</div>
        <div className={styles.price}>
          {vehicle.prices_xp
            ? formatNumber(Object.values(vehicle.prices_xp)[0])
            : "-"}
        </div>
        <NationIcon className={styles.endCol} />
      </div>
    </div>
  );
};

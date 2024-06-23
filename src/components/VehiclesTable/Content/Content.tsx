import { ReactElement } from "react";

import { Vehicle } from "data_layer/queries/useVehiclesQuery";
import { tank1Image } from "assets";
import { Loader } from "components/UI";
import { Row } from "./Row";
import { HeadRow } from "./Row/HeadRow";
import styles from "./Content.module.scss";

interface ContentProps {
  vehicles: Vehicle[];
  limit: number;
  loading: boolean;
}

/**
 * Renders the content of the VehiclesTable component.
 *
 * @param {Object[]} vehicles - An array of vehicle objects.
 * @param {boolean} loading - A flag indicating whether the data is loading.
 * @returns {ReactElement} The rendered content.
 */
export const Content = ({ vehicles, loading }: ContentProps): ReactElement => {
  return (
    <div className={styles.container}>
      {!!vehicles.length && (
        <>
          <HeadRow />
          {vehicles.map((vehicle) => (
            <Row key={vehicle.tank_id} vehicle={vehicle} />
          ))}
        </>
      )}
      {vehicles.length === 0 && !loading && (
        <div className={styles.emptyContainer}>
          <img src={tank1Image} alt="" className={styles.tank1Image} />
          <p>No vehicles found</p>
        </div>
      )}
      {loading && (
        <div className={styles.emptyContainer}>
          <Loader />
        </div>
      )}
    </div>
  );
};

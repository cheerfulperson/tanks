import { ReactElement } from "react";
import classNames from "classnames";

import styles from "./Row.module.scss";

/**
 * Renders the header row of the VehiclesTable component.
 * @returns The rendered header row.
 */
export const HeadRow = (): ReactElement => {
  return (
    <div className={classNames(styles.row, styles.headRow)}>
      <div className={styles.tier}>Tier</div>
      <div />
      <div />
      <div>Name</div>
      <div className={styles.price}>Price</div>
      <div className={styles.price}>Price XP</div>
      <div>Nation</div>
    </div>
  );
};

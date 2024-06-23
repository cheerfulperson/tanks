import { ReactElement } from "react";

import styles from "./Loader.module.scss";

/**
 * Renders a loader component.
 *
 * @returns The loader component.
 */
export const Loader = (): ReactElement => {
  return (
    <div className={styles.loader} />
  );
}

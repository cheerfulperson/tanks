import { ReactElement } from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";

import { AppRoutes } from "constants/appRoutes";
import { Vehicles } from "views/Vehicles/Vehicles";
import styles from "./Router.module.scss";

export const Router = (): ReactElement => {
  return (
    <div className={styles.layout}>
      <ReactRoutes>
        <Route element={<Vehicles />} path={AppRoutes.allPages} />
      </ReactRoutes>
    </div>
  );
};

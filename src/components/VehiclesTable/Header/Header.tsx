import { ReactElement } from "react";

import { Input } from "components/UI";
import { OnFiltersChangeFn } from "types/views/vehicles";
import styles from "./Header.module.scss";

interface HeaderProps {
  search?: string;
  onFiltersChange: OnFiltersChangeFn;
}

/**
 * Renders the header component of the VehiclesTable.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onFiltersChange - The function to handle filters change.
 * @param {string} props.search - The search value.
 * @returns {ReactElement} The rendered header component.
 */
export const Header = ({
  onFiltersChange,
  search,
}: HeaderProps): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input
          onChange={(search) => {
            onFiltersChange({ search, page: 1 });
          }}
          placeholder="Search..."
          value={search || ""}
        />
      </div>
    </div>
  );
};

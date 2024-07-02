import { ReactElement, useCallback, useState } from "react";
import { debounce } from "lodash";

import { Input } from "components/UI";
import { OnFiltersChangeFn } from "types/views/vehicles";
import { Logo } from "components/icons";
import { normalizeDiacriticString } from "utils/normalizeDiacriticString";
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
  const [searchValue, setSearchValue] = useState(search);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchChange = useCallback(
    debounce((search: string) => {
      onFiltersChange({ search, page: 1 });
    }, 500),
    []
  );

  const handleChange = useCallback(
    (value: string) => {
      const newValue = normalizeDiacriticString(value).toLowerCase();
      setSearchValue(value);
      handleSearchChange(newValue);
    },
    [handleSearchChange]
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo className={styles.icon} />
        <Input
          onChange={handleChange}
          placeholder="Search..."
          value={searchValue || ""}
        />
      </div>
    </div>
  );
};

import classNames from "classnames";
import { ReactElement, useMemo } from "react";

import { Button, Select } from "components/UI";
import { ChevronRight, ChevronLeft } from "components/icons";
import { OnFiltersChangeFn } from "types/views/vehicles";
import { LimitsPerPageOptions } from "constants/limitsPerPage";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  totalCount: number;
  limit: number;
  page: number;
  onFiltersChange: OnFiltersChangeFn;
}

const visiblePages = 5;
const halfDisplayPages = Math.floor(visiblePages / 2);

/**
 * Renders a pagination component for navigating through pages.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.limit - The number of items to display per page.
 * @param {Function} props.onFiltersChange - The callback function to handle filter changes.
 * @param {number} props.page - The current page number.
 * @param {number} props.totalCount - The total number of items.
 * @returns {ReactElement} The pagination component.
 */
export const Pagination = ({
  limit,
  onFiltersChange,
  page,
  totalCount,
}: PaginationProps): ReactElement => {
  const totalPages = Array.from(
    { length: Math.ceil(totalCount / limit) },
    (_, i) => i + 1
  );
  const isFirstPages = page - halfDisplayPages <= 0;
  const isLastPages = page >= totalPages.length - halfDisplayPages;

  const displayPages = useMemo(() => {
    if (isFirstPages) {
      return totalPages.slice(0, visiblePages);
    }
    if (isLastPages) {
      return totalPages.slice(-visiblePages);
    }
    return totalPages.slice(
      page - halfDisplayPages - 1,
      page + halfDisplayPages
    );
  }, [isFirstPages, isLastPages, page, totalPages]);

  const nextPage = () => {
    if (page < totalPages.length) {
      onFiltersChange({ page: page + 1 });
    }
  };

  const prevPage = () => {
    if (page > 1) {
      onFiltersChange({ page: page - 1 });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <Button onClick={prevPage}>
          <ChevronLeft />
        </Button>
        <div className={styles.numbers} data-testid="pagination-items">
          {!isFirstPages ||
            (!totalPages.length && <span className={styles.dots}>...</span>)}
          {displayPages.map((pageNumber) => (
            <Button
              className={classNames(styles.number, {
                [styles.active]: page === pageNumber,
              })}
              key={pageNumber}
              onClick={() => onFiltersChange({ page: pageNumber })}
            >
              {pageNumber}
            </Button>
          ))}
          {!isLastPages && <span className={styles.dots}>...</span>}
        </div>
        <Button onClick={nextPage}>
          <ChevronRight />
        </Button>
      </div>
      <div className={styles.selectContainer} data-testid="select-container">
        <Select
        openMenuOnClick
          value={LimitsPerPageOptions.find(
            (option) => option.value === limit.toString()
          )}
          options={LimitsPerPageOptions}
          onChange={(data) => {
            if (data) {
              onFiltersChange({ limit: parseInt(data.value), page: 1 });
            }
          }}
          menuPlacement="top"
        />
      </div>
    </div>
  );
};

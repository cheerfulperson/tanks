import { useMemo } from "react";
import cn from "classnames";
import ReactSelect, { ClassNamesConfig, GroupBase, Props } from "react-select";

import styles from "./Select.module.scss";

type OptionType = {
  label: string;
  value: string;
};

export const Select = <
  IsMulti extends boolean = false,
  Group extends GroupBase<OptionType> = GroupBase<OptionType>
>(
  props: Props<OptionType, IsMulti, Group>
) => {
  const classNames = useMemo<
    ClassNamesConfig<OptionType, IsMulti, Group>
  >(() => {
    return {
      container(props) {
        return cn(props.className, styles.container);
      },
      control(props) {
        return cn(props.className, styles.control);
      },
      indicatorSeparator() {
        return styles.indicatorSeparator;
      },
      singleValue(props) {
        return cn(props.className, styles.singleValue);
      },
      menu(props) {
        return cn(props.className, styles.menu);
      },
      option(props) {
        return cn(props.className, styles.option, {
          [styles.option_selected]: props.isSelected,
        });
      },
    };
  }, []);

  return (
    <ReactSelect
      {...props}
      classNames={classNames}
    />
  );
};

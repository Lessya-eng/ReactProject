import * as React from "react";
import { memo } from "react";
import "./index.css";
import { SortCardBtn } from "../../atoms/SortCardBtn";
import { FilterByInputs } from "../../atoms/FilterByInputs";
import { ISettingSort } from "../../../types"
import { SortingByFilter } from "../../molecules/SortingByFilter";
import { Title } from "../../atoms/Title";

interface ISortCard {
  onClick: (field: string) => void;
  sortSettings: ISettingSort[];
}

export const SortCard = memo(({ onClick, sortSettings }: ISortCard) => {
  return (
    <div className={"sort-card-wrapper"}>
      <Title title={"Sort by"} />
      <SortingByFilter sortSettings={sortSettings} onClick={onClick} />
      <FilterByInputs />
      <SortCardBtn />
    </div>
  )
});

import * as React from "react";
import { memo } from "react";
import "./index.css";
import { SortCardBtn } from "../../atoms/SortCardBtn";
import { FilterByInputs } from "../../molecules/FilterByInputs";
import { ISettingSort } from "../../../types"
import { SortingByFilter } from "../../molecules/SortingByFilter";
import { Title } from "../../atoms/Title";

interface ISortCard {
  onClick: (field: string) => void;
  sortSettings: ISettingSort[];
  searchValue: string;
  onChangeHandler: (text: string) => void;
}

export const SortCard = memo(({ onClick, sortSettings, searchValue, onChangeHandler }: ISortCard) => {
  return (
    <div className={"sort-card-wrapper"}>
      <Title title={"Sort by"} />
      <SortingByFilter sortSettings={sortSettings} onClick={onClick} />
      <Title title={"Filter"} />
      <FilterByInputs
        searchValue={searchValue}
        onChangeHandler={onChangeHandler} />
      <SortCardBtn />
    </div>
  )
});

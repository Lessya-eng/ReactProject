import * as React from "react";
import { memo } from "react";
import { ISettingSort } from "../../../types"
import { ButtonByFilter } from "../../atoms/ButtonByFilter";

interface ISortingByFilter {
  onClick: (field: string) => void;
  sortSettings: ISettingSort[];
}

export const SortingByFilter = memo(({ onClick, sortSettings }: ISortingByFilter) => {
  return (
    <div>
      {
        sortSettings?.map((setting) => (
          <ButtonByFilter {...setting} onClick={onClick} />
        ))
      }
    </div>
  );
});

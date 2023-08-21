import { useContext } from "react";
import { FilterContext } from "../contexts/filter-contexts";

export function useFilter() {
  return useContext(FilterContext)
}
"use client"

import { createContext, useState } from "react";
import { FilterType } from "../types/filter-typees";
import { PriorityTypes } from "../types/priority-types";


export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  setSearch: (value: string) => { },
  setPage: (value: number) => { },
  setType: (value:  FilterType) => { },
  priority: PriorityTypes.NEWS,
  setPriority: (value: PriorityTypes ) => {}
})

interface ProviderProps {
  children: React.ReactNode
}


export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState(FilterType.ALL)
  const [priority, setPriority] = useState(PriorityTypes.NEWS)

  return (
    <FilterContext.Provider
      value={{ search, page, type, setSearch, setPage, setType, priority,setPriority }}>
      {children}
    </FilterContext.Provider>
  )
}
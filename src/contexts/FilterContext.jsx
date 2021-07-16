import React, { createContext, useState } from 'react'

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterKey, setFilterKey] = useState("All");
  const [filterText, setFilterText] = useState("Filter by Region")


  const filterList = (key, text) => {
    setFilterKey(key);
    setFilterText(text);
  }

  return (
    <FilterContext.Provider value={{filterList, filterKey, filterText}}>
      {children}
    </FilterContext.Provider>
  )
}
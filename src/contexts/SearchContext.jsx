import React, { createContext, useState } from 'react'

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <SearchContext.Provider value={{searchTerm, updateSearchTerm}}>
      {children}
    </SearchContext.Provider>
  )
}
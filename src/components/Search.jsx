import React, { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext.jsx';
import styled from 'styled-components'

const InputWrapper = styled.form`
  background: ${({ theme }) => theme.element};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 6px;
  color: ${({ theme }) => theme.input};
  width: 450px;
  padding: 15px 20px;
  height: 50px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 520px) {
    width: 100%;
  }
`
const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;

const InputElement = styled.input`
  color: inherit;
  width: 100%;
  height: 100%;
  outline: 0;
  border: none;
  box-shadow: none;
  background: transparent;
  font-weight: 600;
  font-size: inherit;
  font-family: inherit;

  &:focus,
  &:active,
  &:hover,
  &:visited {
    outline: 0;
    border: none;
    box-shadow: none;
    background: transparent;
  }

  &::placeholder {
    font-weight: 600;
    color: inherit;
    font-family: inherit;
  }
`

const Search = ({theme}) => {

  const { searchTerm, updateSearchTerm } = useContext(SearchContext);
  return (
    <InputWrapper>
      <SearchIconWrapper><ion-icon name="search"></ion-icon></SearchIconWrapper>
      <InputElement placeholder="Search for a country..." value={searchTerm} onChange={updateSearchTerm}/>
    </InputWrapper>
  )
}

export default Search
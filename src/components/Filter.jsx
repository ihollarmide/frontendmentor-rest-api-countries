import React, { useContext, useState } from 'react'
import { FilterContext } from '../contexts/FilterContext'
import styled from 'styled-components'

const filterFields = [
  {
    id: 1,
    key: "All",
    text: "Filter by Region"
  },
  {
    id: 2,
    key: "Africa",
    text: "Africa"
  },
  {
    id: 3,
    key: "Americas",
    text: "America"
  },
  {
    id: 4,
    key: "Asia",
    text: "Asia"
  },
  {
    id: 5,
    key: "Europe",
    text: "Europe"
  },
  {
    id: 6,
    key: "Oceania",
    text: "Oceania"
  }
]

const FilterWrapper = styled.div`
  background: ${({ theme }) => theme.element};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
  height: 50px;
  width: 180px;
  font-size: 13px;
  font-weight: 600;
  padding: 16px 12px 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`

const FilterDropdown = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.element};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 6px;
  color: ${({ theme }) => theme.text};
  padding: 5px 0 10px;
`

const FilterElement = styled.p`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 !important;

  @media only screen and (min-width: 1100px) {
    transition: background-color .2s;

    &:hover {
      background-color: ${({ theme }) => theme.body};
    }
  }
`

const Filter = ({ theme }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const {filterList, filterText} = useContext(FilterContext);

  return (
    <FilterWrapper onClick={toggleDropdown}>
      <span>{filterText}</span>

      {
        showDropdown ? <ion-icon name="chevron-up"></ion-icon> : <ion-icon name="chevron-down"></ion-icon>
      }

      {
        showDropdown && (
          <FilterDropdown>
            {
              filterFields.map(filterField => (
                <FilterElement key={filterField.id} onClick={() => filterList(filterField.key, filterField.text)}>{filterField.text}</FilterElement>
              ))
            }
          </FilterDropdown>
        )
      }
      
    </FilterWrapper>
  )
}

export default Filter
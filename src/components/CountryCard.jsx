import React from 'react'
import styled from 'styled-components'

const Country = styled.article`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border-radius: 6px;
`

const FlagWrapper = styled.section.attrs(props => ({
  style: {
    backgroundImage: `url(${props.flag})`,
  },
}))`width: 100%;
  min-height: 176.69px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`

const Info = styled.section`
  padding: 20px 20px 35px;

  @media only screen and (max-width: 550px) {
    padding-top: 25px;
  }
`

const Name = styled.h2`
  text-transform: capitalize;
  color: inherit;
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 10px;
`

const Field = styled.div`
  display: flex;
  margin-bottom: 7px;
  text-transform: capitalize;
`

const Label = styled.h4`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0;
`


const Value = styled.p`
  padding-left: 5px;
  font-size: 14px;
  margin-bottom: 0;
  font-weight: 300;
`



const CountryCard = ({theme, flag, name, population, region, capital}) => {
  return (
    <Country>
      <FlagWrapper flag={flag} />
      <Info>
        <Name>{name}</Name>
        <Field>
          <Label>Population:</Label>
          <Value>{population.toLocaleString()}</Value>
        </Field>
        <Field>
          <Label>Region:</Label>
          <Value>{region}</Value>
        </Field>
        <Field>
          <Label>Capital: </Label>
          <Value>{capital}</Value>
        </Field>
      </Info>

    </Country>
  )
}

export default CountryCard
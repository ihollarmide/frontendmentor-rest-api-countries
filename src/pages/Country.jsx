import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import CountryWrapper from '../components/CountryWrapper'

const BackLink = styled(Link)`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border-radius: 6px;
  width: 130px;
  padding: 10px 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 60px;

  @media only screen and (max-width: 520px) {
    margin-top: 5px;
    margin-bottom: 45px;
  }
`
const BackLinkText = styled.span`
  padding-left: 10px;
  color: inherit;
  font-weight: 600;
`

const Country = ({theme}) => {
  const { country } = useParams();

  console.log(country)
  return (
    <>
      <BackLink to="/countries">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <BackLinkText>Back</BackLinkText>
      </BackLink>

      <CountryWrapper theme={theme} country={country} />
    </>
  )
}

export default Country
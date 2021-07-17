import React from 'react'
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid';

const Main = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`

const Flag = styled.img`
  width: 45%;
  height: 430px;

  @media only screen and (max-width: 900px) {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 70px;
  }

  @media only screen and (max-width: 520px) {
    margin-bottom: 50px;
  }
`

const Summary = styled.article`
  width: 45%;

  @media only screen and (max-width: 1024px) {
    width: 52%;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Name = styled.h2`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 35px;
  text-transform: capitalize;

  @media only screen and (max-width: 520px) {
    margin-bottom: 30px;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 520px) {
    display: block;
  }
`

const InfoOne = styled.section`
  max-width: 250px;
  min-width: 180px;

  @media only screen and (max-width: 900px) {
    max-width: unset;
    min-width: unset;
  }

  @media only screen and (max-width: 520px) {
    margin-bottom: 50px;
  }
`;

const InfoTwo = styled.section`
  max-width: 250px;
  min-width: 180px;

  @media only screen and (max-width: 900px) {
    max-width: unset;
    min-width: unset;
  }
`;

const Field = styled.div`
  display: flex;
  margin-bottom: 7px;
  text-transform: capitalize;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 520px) {
    margin-bottom: 16px;
  }
`

const Label = styled.h4`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0;
  padding-right: 5px;
`

const Value = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0;

  ${({ lowercase }) =>
    lowercase &&
    css`
      text-transform: lowercase;
    `
  }
`

const Border = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 60px;

  @media only screen and (max-width: 520px) {
    margin-top: 50px;
  }
`
const BorderLabel = styled.h4`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0;
  margin-right: 15px;
  margin-bottom: 20px;

  @media only screen and (max-width: 520px) {
    margin-bottom: 30px;
  }
`
const BorderCountriesWrapper = styled.div`
`
const BorderButton = styled(Link)`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 7px 15px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: inline-block;
  text-align: center;
  margin-bottom: 15px;

  &:not(:last-of-type) {
    margin-right: 10px;
  }
  

  @media only screen and (max-width: 520px) {
    min-width: 90px;
    width: 90px;
  }

  @media only screen and (max-width: 340px) {
    min-width: 80px;
    width: 80px;
  }
`

const CountryDetails = ({ theme, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders }) => {

  return (
    <Main>
      <Flag src={flag} alt={name} />

      <Summary>
        <Name>{name}</Name>
        <Info>
          <InfoOne>
            <Field>
              <Label>Native Name:</Label>
              <Value>{nativeName}</Value>
            </Field>
            <Field>
              <Label>Population:</Label>
              <Value>{population.toLocaleString()}</Value>
            </Field>
            <Field>
              <Label>Region:</Label>
              <Value>{region}</Value>
            </Field>
            <Field>
              <Label>Sub Region:</Label>
              <Value>{subregion ? subregion : <>Nil</>}</Value>
            </Field>
            <Field>
              <Label>Capital:</Label>
              <Value>{capital ? capital : <>Nil</>}</Value>
            </Field>
          </InfoOne>

          <InfoTwo>
            <Field>
              <Label>Top Level Domain:</Label>
              <Value lowercase>{topLevelDomain.join(", ")}</Value>
            </Field>
            <Field>
              <Label>Currencies:</Label>
              <Value>
                {
                  Array.prototype.map.call(currencies, function(currency) { return currency.name; }).join(", ")
                }
              </Value>
            </Field>
            <Field>
              <Label>Languages:</Label>
              <Value>
                {
                  Array.prototype.map.call(languages, function(language) { return language.name; }).join(", ")
                }
              </Value>
            </Field>
          </InfoTwo>
        </Info>

        {
          borders.length >= 1 && (
            <>
              <Border>
                <BorderLabel>Border Countries:</BorderLabel>
                <BorderCountriesWrapper>
                  {
                    borders.map(border => (
                      <BorderButton key={nanoid()} to={border}>{border}</BorderButton>
                    ))
                  }
                </BorderCountriesWrapper>
              </Border>
            </>
          )
        }
      </Summary>
    </Main>
  )
}

export default CountryDetails
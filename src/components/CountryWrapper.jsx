import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import CountryDetails from '../components/CountryDetails.jsx'

const Wrapper = styled.div`
  
`

const Placeholder = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-content: center;
  justify-content: center;
`

const PlaceholderText = styled.p`
  font-size: 35px;
  color: inherit;
  font-weight: 800;
`


const CountryWrapper = ({ theme, country }) => {

  const [countryData, setCountryData ] = useState([]);
  const [countryBorders, setCountryBorders] = useState([]);
  const [error, setError] = useState(null);
  
  const apiUrl = 'https://restcountries.eu/rest/v2';
  

  const fetchCountry = () => {
    axios
    .get(`${apiUrl}/name/${country}?fullText=true`)
    .then((response) => {
      const fetchedData = response.data;
      const borders = fetchedData[0].borders;

      borders.map(
        border => {
          axios
          .get(`${apiUrl}/alpha/${border}`)
          .then((response) => {
            const fetchedCountry = response.data;
            setCountryBorders(countryBorders => [...countryBorders, fetchedCountry.name])
          })
          .catch((error) => {console.log(error)})
        }
      )
      setCountryData(fetchedData[0]);

    })
    .catch((error) => {
      console.log(error)
      setError(error)
    });
  }

  useEffect(() => {
    fetchCountry();

    return () => {
      setCountryData([]);
      setCountryBorders([]);
    };
  }, [country]);



  if (error) return <Placeholder><PlaceholderText>{error.message}</PlaceholderText></Placeholder>;

  if (!countryData || countryData.length === 0) return <Placeholder><PlaceholderText>Loading...</PlaceholderText></Placeholder>

  return (
    <Wrapper>
      <HelmetProvider>

        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${countryData.name} | Where in the world?`}</title>
          <meta name={`Summary about ${countryData.name}`}  content={`Some information about ${countryData.name} like the native name, population, region, subregion, capital and currencies`} />
        </Helmet>

        
        
        <CountryDetails 
          theme={theme} 
          name={countryData.name} 
          population={countryData.population} 
          region={countryData.region} 
          subregion={countryData.subregion} 
          capital={countryData.capital} 
          nativeName={countryData.nativeName} 
          flag={countryData.flag} 
          topLevelDomain={countryData.topLevelDomain} 
          currencies={countryData.currencies} 
          languages={countryData.languages} 
          borders={countryBorders} 
        />

      </HelmetProvider>
    </Wrapper>
  )
}

export default CountryWrapper
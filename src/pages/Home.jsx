import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext.jsx';
import { FilterContext } from '../contexts/FilterContext.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useRouteMatch } from "react-router-dom";
import axios from 'axios'
import { nanoid } from 'nanoid'
import styled from 'styled-components'
import Search from '../components/Search.jsx'
import Filter from '../components/Filter.jsx'
import CountryCard from '../components/CountryCard.jsx'

const DisplayController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 60px;

  @media only screen and (max-width: 1440px) {
    grid-gap: 50px;
  }

  @media only screen and (max-width: 1350px) {
    column-gap: 30px;
    row-gap: 50px;
  }

  @media only screen and (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }

  @media only screen and (max-width: 700px) {
    grid-gap: 30px;
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 35px
  }
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

const Home = ({theme}) => {
  let match = useRouteMatch();
  const { searchTerm } = useContext(SearchContext);
  const { filterKey } = useContext(FilterContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParam] = useState(["capital", "name"]);

  const [countries, setCountries ] = useState([]);

  const apiUrl = 'https://restcountries.eu/rest/v2'

  const fetchCountries = () => {
    axios
    .get(`${apiUrl}/all`)
    .then((response) => {
      const allCountries = response.data;
      setCountries(allCountries);
      // setIsLoaded(true);
    })
    .catch((error) => {
      console.log(error)
      // setIsLoaded(true);
      setError(error)
    });
  }

  useEffect(() => {
    fetchCountries();

    return () => {
      setCountries([]);
    };
  }, [])

  const searchCountries = countries => {
    return countries.filter((country) => {
      if (country.region == filterKey) {
        return searchParam.some((newCountry) => {
          return (
            country[newCountry]
              .toString()
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) > -1
          );
        });
      } else if (filterKey == "All") {
        return searchParam.some((newCountry) => {
          return (
            country[newCountry]
              .toString()
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) > -1
          );
        });
      }
    });
  }

  if (error) return <Placeholder><PlaceholderText>{error.message}</PlaceholderText></Placeholder>;

  if (!countries || countries.length === 0) return <Placeholder><PlaceholderText>Loading...</PlaceholderText></Placeholder>

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Countries | Where in the world?</title>
        <meta name="Countries in the world" content="Short Information about Countries" />
      </Helmet>
      
      <DisplayController>
        <Search theme={theme} />
        <Filter theme={theme} />
      </DisplayController>
      <Grid>
        {
          searchCountries(countries).map(country => (
            <Link key={nanoid()} to={`country/${country.name}`}>
              <CountryCard
                flag={country.flag} 
                name={country.name} 
                population={country.population} 
                capital={country.capital} 
                region={country.region}
              />
            </Link>
          ))
        }
      </Grid>
    </HelmetProvider>
  )
  
}

export default Home
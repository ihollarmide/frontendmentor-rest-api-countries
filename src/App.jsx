import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'
import { lightTheme, darkTheme } from './theme/theme'
import  { useDarkMode } from './components/useDarkMode.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Country from './pages/Country.jsx';

const Wrapper = styled.main`
  max-width: 1340px;
  margin: 0 auto;
  padding: 40px 0 25px;

  @media only screen and (max-width: 1440px) {
    padding: 40px 30px 25px;
  }

  @media only screen and (max-width: 340px) {
    padding: 20px;
  }
`


function App() {
  const [theme, toggleTheme, mountedComponent] = useDarkMode();;

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Wrapper>
          <Switch>
            <Route path="/country/:country">
              <Country theme={theme}/>
            </Route>
            <Route exact path="/countries">
              <Home theme={theme}/>
            </Route>
            <Route exact path="/">
              <Redirect to="/countries" />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
    
  )
}

export default App

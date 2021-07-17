import React from 'react'
import ReactDOM from 'react-dom'
import { SearchProvider } from './contexts/SearchContext.jsx';
import { FilterProvider } from './contexts/FilterContext.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <FilterProvider>
        <Router>
          <App />
        </Router>
      </FilterProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

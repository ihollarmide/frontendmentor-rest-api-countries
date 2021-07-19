import React from 'react';
import { Link } from 'react-router-dom';
import { func, string } from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.header`
  background: ${({ theme }) => theme.element};
  box-shadow: ${({ theme }) => theme.boxShadow};
`

const Element = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1440px) {
    padding: 20px 30px;
  }

  @media only screen and (max-width: 340px) {
    padding: 20px;
  }
`

const TitleLink = styled(Link)`
  font-weight: 800;
  font-size: 24px;
  transition: all .2s;

  @media only screen and (min-width: 1100px) {
    &:hover {
    transform: scale(1.05);
    }
  }

  @media only screen and (max-width: 520px) {
    font-size: 18px;
  }
`

const Switcher = styled.button`
  outline: 0;
  cursor: pointer;
  border: none;
  color: inherit;
  background: transparent;
  display: flex;
  font-family: inherit;
  align-items: center;
`

const SwitcherText = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-left: 5px;
  font-weight: 600;
`

const Header = ({ theme, toggleTheme }) => {
  return (
    <Wrapper>
      <Element>
        <TitleLink to="/countries" >Where in the world?</TitleLink>
        <Switcher onClick={toggleTheme}>
          {
            theme === "light" ? <ion-icon name="moon-outline"></ion-icon> : <ion-icon name="moon"></ion-icon>
          }
          <SwitcherText>Dark Mode</SwitcherText>
        </Switcher>
      </Element>
    </Wrapper>
  )
}

Header.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Header;
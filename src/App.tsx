import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import usePersistedState from './utils/usePersistedState'

import GlobalStyles from './styles/global'

import light from './styles/themes/Light'
import dark from './styles/themes/Dark'

import Header from './components/Header'
import Main from './components/Main'

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('@theme-switcher/current-theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles />

      <Header toggleTheme={toggleTheme} />

      <Main>
        <h1>Theme Switcher - with React, Typescript and Styles Components</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae nisi excepturi, veritatis at aut dignissimos cupiditate sint asperiores reprehenderit mollitia tenetur est, amet ut ducimus expedita rem hic a!</p>
      </Main>

    </ThemeProvider>
  );
}

export default App;

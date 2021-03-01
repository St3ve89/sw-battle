import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Home } from '../../pages/home';
import { Results } from '../../pages/results';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes/light';
import GlobalStyle from '../../styles/global';
import { Header } from '../header';
import { dark } from '../../styles/themes/dark';
import usePersistedState from '../../hooks/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', light);
  const [results, setResults] = useState<any[]>([]);

  const addResult = (newResult: any) => {
    setResults([...results, newResult]);
  };

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Route exact path={ROUTES.HOME}>
          <Home addResult={addResult} />
        </Route>
        <Route exact path={ROUTES.RESULTS}>
          <Results results={results} />
        </Route>
      </Router>
    </ThemeProvider>
  );
};

export { App };

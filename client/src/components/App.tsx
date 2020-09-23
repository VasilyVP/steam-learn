import React from 'react'
import { CssBaseline, Container, ThemeProvider, createMuiTheme } from '@material-ui/core'
import MenuSection from './MenuSection'
import UserInfo from './UserInfo'

function App() {
  const theme = createMuiTheme({
    palette: {
      //  type: themeState,
      /*
        background: {
          paper: '#80d8ff'
        },
        */
      primary: {
        main: '#455a64'
      },
      secondary: {
        main: '#263238'
      }
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuSection />
        <Container>
          <UserInfo />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/styles/Global'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  const theme = {
    colors: {
      primary: 'hsl(322, 100%, 66%)',
      accent: 'hsl(321, 100%, 78%)',
      error: 'hsl(0, 100%, 63%)',
      footer: 'hsl(192, 100%, 9%)',
      pale_blue: 'hsl(207, 100%, 98%)',
      white: 'hsl(255, 255%, 255%)',
    },
    font: {
      heading: 'Poppins',
      body: 'Open Sans'
    },
    size: {
      mobileS: '320px',
      mobileM: '375px',
      mobileL: '425px',
      tablet: '768px',
      laptop: '1024px',
      laptopL: '1440px',
      desktop: '2560px'
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App

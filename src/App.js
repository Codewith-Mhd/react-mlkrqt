import React from 'react';
import { ThemeProvider } from 'styled-components';
import Container from './components/styles/Container.styled';
import Header from './components/Header';
import { content } from './components/Contents';
import Card from './components/Card';
import Footer from "./components/Footer";
import GlobalStyle from './components/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#000',
    footer: '#003333',
  },
  mobile: '768px',
};

export default function App() {
  console.log(content);
  return (
    // provider is a global style
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>

      <Footer />
      </>
    </ThemeProvider>
  );
}

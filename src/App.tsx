import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/header'
import Skills from './components/Skill'
import Projects from './components/Projects'
//import NavBar from './components/navbarr'
import Footer from './components/footer'
import './components/style.css'
export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className="container">
      
        <Header />
        <Skills />
        <Projects />
        <Footer/>
      </Container>
    </React.Fragment>
  );
}
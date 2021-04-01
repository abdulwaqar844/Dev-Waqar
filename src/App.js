import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/header'
import Skills from './components/Skill'
import Projects from './components/Projects'
import NavBar from './components/navbarr'
import './components/style.css'
export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lr" className="container">
        <NavBar/>
        <Header />
        <Skills />
        <Projects />
      </Container>
    </React.Fragment>
  );
}
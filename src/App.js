import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Menu from './components/menu'
export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
      <Menu />
      </Container>
    </React.Fragment>
  );
}
import React from 'react';
import { Container, CssBaseline, Grid } from '@mui/material';
import './styles.js';
import useStyles from './styles.js';
import SideNav from './Component/SideNav.js';
import Posts from './Component/Posts.js';
import Friends from './Component/Friends.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <SideNav></SideNav>
          </Grid>
          <Grid item xs={4}>
            <Posts></Posts>
          </Grid>
          <Grid item xs={4}>
            <Friends></Friends>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;

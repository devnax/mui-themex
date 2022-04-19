import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {withThemex, useThemex, toggleTheme, isDarkMode} from '../.'
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline"

import { Button, Box, Typography } from '@mui/material';



const Child = () => {
  return <Box p={3} mt={2} borderRadius={3} bgcolor="background.paper">
    <Button onClick={toggleTheme}>Child</Button>
  </Box>
}

const _App = ({theme}) => {
  
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Child />
        <Typography variant="subtitle2">Nice</Typography>
        <Box p={3} mt={2} borderRadius={3} bgcolor="background.paper">
          <Button onClick={toggleTheme}>Hello</Button>
        </Box>
        <Box p={3} mt={2} borderRadius={3} bgcolor="background.paper">
          <Button onClick={toggleTheme}>Hello</Button>
        </Box>
        <Box p={3} mt={2} borderRadius={3} bgcolor="background.paper">
          <Button onClick={toggleTheme}>Hello</Button>
        </Box>
        <Box p={3} mt={2} borderRadius={3} bgcolor="background.paper">
          <Button onClick={toggleTheme}>Hello</Button>
        </Box>
        <Box p={3} mt={2} borderRadius={3} bgcolor="background.paper">
          <Button onClick={toggleTheme}>Hello</Button>
        </Box>
      </ThemeProvider>
  );
};

const App = withThemex(_App, 'dark', () => ({palette: {mode: 'dark'}}))



ReactDOM.render(<App />, document.getElementById('root'));

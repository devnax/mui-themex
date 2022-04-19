
## Use

```js
import {withThemex, useThemex, toggleTheme, isDarkMode} from 'mui-themex'
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline"
import { Button, Box } from '@mui/material';


const Child = () => {
  return <Box bgcolor="background.paper">
    <Button onClick={toggleTheme}>Toggle Theme</Button>
  </Box>
}

const App = ({theme}) => {
  
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Child />
        <Box bgcolor="background.paper">
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </Box>
      </ThemeProvider>
  );
};

export default withThemex(App, 'light', (theme) => ({}))


```
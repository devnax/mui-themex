
## Use

```js
import {withThemex, useThemex, toggleTheme, isDarkMode} from 'mui-themex'
import {ThemeProvider} from '@mui/material/styles';
import { Button, Box } from '@mui/material';


const Child = () => {
  return <Box bgcolor="background.paper">
    <Button onClick={toggleTheme}>Toggle Theme</Button>
  </Box>
}

const _App = ({theme}) => {
  
  return (
      <ThemeProvider theme={theme}>
        <Child />
        <Box bgcolor="background.paper">
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </Box>
      </ThemeProvider>
  );
};

const App = withThemex(_App)


```
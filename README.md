
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




### WithThemex

```js

withThemex(ComponentType, defaultMode, customize)
```

##### ComponentType
```React component```

##### defaultMode
```
Callback or 'dark' | 'light'

callback: () => 'dark' | 'light'
```

##### customize
```
Customize the theme.

argument type: callback | object

callback: (oldTheme) => material ui theme object
object: material ui theme object

```

### AutoSave
Just add Property in the customize option

```js
{
  autoSave: true
}
```

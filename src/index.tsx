import {useState, useMemo, createElement, ReactElement} from 'react';
import {useTheme, createTheme, ThemeOptions} from '@mui/material/styles';
import palette, {darkPalette, lightPalette} from './palette'
import components from './components'
import typography from './typography'


interface Options {
   mode: 'light' | 'dark';
   theme: ThemeOptions;
   dispatch: Function | null;
}

const options: Options = {
   mode: 'light',
   theme: {},
   dispatch: null
}

export const isDarkMode = () => {
   return options.mode === 'dark'
}

export const toggleTheme = () => {
   options.dispatch && options.dispatch()
}

export const useThemex = useTheme

export const withThemex = (Comp: (props: any) => ReactElement, defaultMode?: 'light' | 'dark', customizeTheme?: (t: ThemeOptions) => ThemeOptions) => {
   return (props: any) => {

      const [observe, setMode] = useState(0)

      useMemo(() => {
         let customize: ThemeOptions = {}

         if(!options.dispatch){
            options.mode = defaultMode || 'light'
            options.theme = createTheme({
               palette: {
                  ...palette,
                  ...(options.mode === 'dark' ? darkPalette : lightPalette)
               }
            })

            customize = customizeTheme ? customizeTheme(options.theme) : {}
            options.dispatch = () => {
               options.mode = options.mode === 'light' ? 'dark' : 'light'
               setMode(Math.random())
            }
         }

         options.theme = createTheme(options.theme, {
            ...(customize || {}),
            palette: {
               mode: options.mode,
               ...customize?.palette,
               ...(options.mode === 'dark' ? darkPalette : lightPalette)
            }
         })

         options.theme = createTheme(options.theme, {
            typography: typography(options.theme),
            components: components(options.theme)
         })
      }, [observe])

      return createElement(Comp, {...props, theme: options.theme})
   }
}

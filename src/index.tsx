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

export const withThemex = (Comp: (props: any) => ReactElement, customizeTheme?: (t: ThemeOptions) => ThemeOptions) => {
   return (props: any) => {

      const [observe, setMode] = useState(0)
      const oTheme = useTheme()

      useMemo(() => {
         if(!options.dispatch){
            const customize = customizeTheme && customizeTheme(oTheme)
            options.theme = createTheme(oTheme, {
               palette: {
                  ...palette,
                  ...(customize?.palette || {})
               },
               typography: {
                  ...typography(oTheme),
                  ...(customize?.typography || {})
               },
               components: {
                  ...components(oTheme),
                  ...(customize?.components || {})
               }
            })
            options.dispatch = () => {
               options.mode = options.mode === 'light' ? 'dark' : 'light'
               setMode(Math.random())
            }
         }

         options.theme = createTheme(options.theme, {
            palette: {
               mode: options.mode,
               ...(options.mode === 'dark' ? darkPalette : lightPalette)
            }
         })
      }, [observe])

      return createElement(Comp, {...props, theme: options.theme})
   }
}

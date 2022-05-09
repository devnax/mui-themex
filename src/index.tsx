import {useState, useMemo, createElement, ReactElement} from 'react';
import {useTheme, createTheme, ThemeOptions} from '@mui/material/styles';
import palette, {darkPalette, lightPalette} from './palette'
import components from './components'
import typography from './typography'

export type Mode = 'light' | 'dark'
export type CompType = <T>(props: T) => ReactElement
export type DefaultModeType = (() => Mode) | Mode

interface ThemeOptionType extends ThemeOptions{
   autoSave?: boolean
}
export type CustomizeThemeType = ((t: ThemeOptions) => ThemeOptionType) | ThemeOptionType

export interface OptionsType {
   mode: Mode;
   theme: ThemeOptions;
   dispatch: Function | null;
}

const isServer = typeof window === "undefined"
let lStorage: any = null;
if(!isServer){
   lStorage = window.localStorage
}

const options: OptionsType = {
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



export const withThemex = (Comp: CompType, defaultMode?: DefaultModeType, customizeTheme?: CustomizeThemeType) => {
   return (props: any) => {

      const [observe, setMode] = useState(0)

      useMemo(() => {
         let customize: ThemeOptionType = {}

         if(!options.dispatch){
            if(typeof defaultMode === 'function'){
               options.mode = defaultMode()
            }else{
               options.mode = defaultMode || 'light'
            }

            options.theme = createTheme({
               palette: {
                  ...palette,
                  ...(options.mode === 'dark' ? darkPalette : lightPalette)
               }
            })

            if(typeof customizeTheme === 'function'){
               customize = customizeTheme(options.theme) || {}
            }else{
               customize = customizeTheme || {}
            }
            
            if(customize.autoSave){
               const t: any = lStorage?.getItem('themex')
               if(t === 'light' || t === 'dark'){
                  options.mode = t
               }
            }
            
            options.dispatch = () => {
               options.mode = options.mode === 'light' ? 'dark' : 'light'
               if(customize.autoSave){
                  lStorage?.setItem('themex', options.mode)
               }
               setMode(Math.random())
            }
         }

         options.theme = createTheme({
            ...options.theme,
            ...(customize || {}),
            palette: {
               mode: options.mode,
               ...palette,
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

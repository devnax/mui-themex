import React, {Component, ComponentType} from 'react';
import {useTheme, createTheme, ThemeOptions} from '@mui/material/styles';
import palette, {darkPalette, lightPalette} from './palette'
import components from './components'
import typography from './typography'

export type Mode = 'light' | 'dark'
export type DefaultModeType = (() => Mode) | Mode

interface ThemeOptionType extends ThemeOptions{
   autoSave?: boolean
}
export type CustomizeThemeType = ((t: ThemeOptions) => ThemeOptionType) | ThemeOptionType

export interface OptionsType {
   mode: Mode;
   theme: ThemeOptions;
   dispatch: Function | null;
   customize: ThemeOptionType
}

const isServer = typeof window === "undefined"
let lStorage: any = null;
if(!isServer){
   lStorage = window.localStorage
}

const options: OptionsType = {
   mode: 'light',
   theme: {},
   dispatch: null,
   customize: {}
}
export const useThemex = useTheme

export const isDarkMode = () => {
   return options.mode === 'dark'
}

export const toggleTheme = () => {
   options.dispatch && options.dispatch()
}


interface Props{
   theme: ThemeOptions
}


interface ThemexRootProps{
   Comp: ComponentType<Partial<Props>>;
   defaultMode?: DefaultModeType;
   customizeTheme?: CustomizeThemeType;
}

class ThemexRoot extends Component<ThemexRootProps>{
   state = {
      rand: 0
   }
   
   constructor(props: ThemexRootProps){
      super(props)

      const {defaultMode, customizeTheme} = props

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

         options.customize = (typeof customizeTheme === 'function' ? customizeTheme(options.theme) : customizeTheme) || {}
         
         if(options.customize.autoSave){
            const t: any = lStorage?.getItem('themex')
            if(t === 'light' || t === 'dark'){
               options.mode = t
            }
         }

         options.theme = createTheme({
            ...options.theme,
            ...(options.customize || {}),
            palette: {
               mode: options.mode,
               ...palette,
               ...options.customize?.palette,
               ...(options.mode === 'dark' ? darkPalette : lightPalette)
            }
         })

         options.theme = createTheme(options.theme, {
            typography: typography(options.theme),
            components: components(options.theme)
         })
      }

      
   }

   componentDidMount(){
      options.dispatch = () => {
         options.mode = options.mode === 'light' ? 'dark' : 'light'
         if(options.customize.autoSave){
            lStorage?.setItem('themex', options.mode)
         }

         options.theme = createTheme({
            ...options.theme,
            ...(options.customize || {}),
            palette: {
               mode: options.mode,
               ...palette,
               ...options.customize?.palette,
               ...(options.mode === 'dark' ? darkPalette : lightPalette)
            }
         })

         options.theme = createTheme(options.theme, {
            typography: typography(options.theme),
            components: components(options.theme)
         })
         
         this.setState({rand: Math.random()})
      }
   }

   render(){
      const {Comp} = this.props
      return <Comp {...this.props} theme={options.theme}/>
   }
}


export const withThemex = (Comp: ComponentType<Partial<Props>>, defaultMode?: DefaultModeType, customizeTheme?: CustomizeThemeType) => {

   const C = <P extends {}>(props: P) => {
      return <ThemexRoot 
         Comp={Comp}
         defaultMode={defaultMode}
         customizeTheme={customizeTheme}
         {...props}
      />
   }

   return C
}
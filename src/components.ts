import Button from './override/Button'
import InputLabel from './override/InputLabel'
import InputBased from './override/InputBased'
import ListItem from './override/ListItem'
import Chip from './override/Chip'
import ListItemText from './override/ListItemText'
import ListItemIcon from './override/ListItemIcon'
import Menu from './override/Menu'
import FormHelperText from './override/FormHelperText'
import Tooltip from './override/Tooltip'

const components = (theme: any) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        padding: 0,
        margin: 0,
        fontFamily: "'Inter', sans-serif",
        fontSize: 15,
        height: '100%',
        backgroundColor: theme.palette.background.default,
        '& a':{
          textDecoration: "none"
        },
        '& input:-webkit-autofill, & select:-webkit-autofill' : {
          WebkitBoxShadow: `0 0 0px 1000px ${theme.palette.background.paper} inset!important`,
        }
      }
    }
  },

  MuiButton: Button(),
  MuiInputLabel: InputLabel(theme),
  MuiInputBase: InputBased(theme),
  MuiFormHelperText: FormHelperText(),
  MuiListItem: ListItem(),
  MuiListItemText: ListItemText(theme),
  MuiListItemIcon: ListItemIcon(theme),
  MuiChip: Chip(theme),
  MuiMenu: Menu(theme),
  MuiTooltip: Tooltip(theme),
})

export default components
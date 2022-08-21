import { alpha } from '@mui/material/styles';

const InputBased = (theme: any) => ({
    styleOverrides: {
        root: {
            borderRadius: '8px!important',
            '&.MuiFilledInput-root': {
                border: '1px solid transparent',
            },  
            '&.MuiFilledInput-root input': {
                padding: '10px 14px',
                lineHeight: 0
            },
            "&::before": {
                borderBottom: "none!important"
            },
            "&::after": {
                borderBottom: "none!important"
            },
            '&.Mui-focused': {
                transition: 'box-shadow .1s',
            },
            
            
        }
    },
    
    variants: [
        {
            props: {color: 'primary'},
            style: {
                '&.Mui-focused': {
                    borderColor: theme.palette.primary.main,
                    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 4px`,
                }
            }
        },
        {
            props: {color: 'secondary'},
            style: {
                '&.Mui-focused': {
                    boxShadow: `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 4px`,
                }
            }
        },
        {
            props: {color: 'success'},
            style: {
                '&.Mui-focused': {
                    boxShadow: `${alpha(theme.palette.success.main, 0.25)} 0 0 0 4px`,
                }
            }
        },
        {
            props: {color: 'error'},
            style: {
                '&.Mui-focused': {
                    boxShadow: `${alpha(theme.palette.error.main, 0.25)} 0 0 0 4px`,
                }
            }
        },
        {
            props: {error: true},
            style: {
                '&.Mui-focused': {
                    boxShadow: `${alpha(theme.palette.error.main, 0.25)} 0 0 0 4px`,
                }
            }
        },
        {
            props: {color: 'warning'},
            style: {
                '&.Mui-focused': {
                    boxShadow: `${alpha(theme.palette.warning.main, 0.25)} 0 0 0 4px`,
                }
            }
        },
        {
            props: {paper: true},
            style: {
                '&.Mui-focused': {
                    boxShadow: `red 0 0 0 3px`,
                }
            }
        }
    ]
})

export default InputBased
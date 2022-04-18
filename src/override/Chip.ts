import {alpha} from '@mui/material/styles'

const Clip = (theme: any) => ({
    styleOverrides: {
        root: {
            fontSize: 13,
            borderRadius: 8,
            lineHeight: '24px',
            fontWeight: 600
        }
    },
    defaultProps: {
        size: 'small'
    },
    variants: [
        {
            props: {color: 'primary', variant: 'filled'},
            style: {
                background: alpha(theme.palette.primary.main, .1),
                color: theme.palette.primary.light
            }
        },
        {
            props: {color: 'secondary', variant: 'filled'},
            style: {
                background: alpha(theme.palette.secondary.main, .1),
                color: theme.palette.secondary.light
            }
        },
        {
            props: {color: 'success', variant: 'filled'},
            style: {
                background: alpha(theme.palette.success.main, .1),
                color: theme.palette.success.light
            }
        },
        {
            props: {color: 'info', variant: 'filled'},
            style: {
                background: alpha(theme.palette.info.main, .1),
                color: theme.palette.info.light
            }
        },
        {
            props: {color: 'warning', variant: 'filled'},
            style: {
                background: alpha(theme.palette.warning.main, .1),
                color: theme.palette.warning.light
            }
        },
        {
            props: {color: 'error', variant: 'filled'},
            style: {
                background: alpha(theme.palette.error.main, .1),
                color: theme.palette.error.light
            }
        },
    ]
})

export default Clip
const InputLabel = (theme: any) => ({
    styleOverrides: {
        root: {
            borderRadius: '4px',
            transition: 'all .1s',
            fontWeight: 400,
            opacity: .7,
            '&.MuiInputLabel-shrink': {
                color: "#fff"
            },
            '&.Mui-focused': {
                opacity: 1,
                background: theme.palette.background.default,
            }
        }
    }
})

export default InputLabel
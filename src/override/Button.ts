const Button = () => ({
    styleOverrides: {
        root: {
            boxShadow: 'none',
            borderRadius: '6px',
            textTransform: 'initial',
            fontWeight: 500,
            fontSize: 15,
            minWidth: 'auto',
            '&:hover': {
                boxShadow: 'none',
            }
        }
    }
})

export default Button
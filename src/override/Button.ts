const Button = () => ({
    styleOverrides: {
        root: {
            boxShadow: 'none',
            borderRadius: '6px',
            textTransform: 'initial',
            fontWeight: 500,
            fontSize: 15,
            minWidth: 'auto',
            fontFamily: "'Inter', sans-serif",
            '&:hover': {
                boxShadow: 'none',
            }
        }
    }
})

export default Button
const Menu = (theme: any) => ({
    styleOverrides: {
        root: {
            '& .MuiList-root': {
                backgroundColor: theme.palette.background.paper,
                padding: 4
            },
            '& .MuiMenuItem-root': {
                borderRadius: 5
            }
        }
    }
})

export default Menu
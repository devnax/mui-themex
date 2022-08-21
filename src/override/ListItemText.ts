const ListItemText = (theme: any) => ({
    styleOverrides: {
        root: {
            color: theme.palette.text.main,
            '& span': {
                fontWeight: 500,
                fontSize: 15
            }
        }
    }
})

export default ListItemText
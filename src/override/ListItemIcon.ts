const ListItemIcon = (theme: any) => ({
    styleOverrides: {
        root: {
            minWidth: 40,
            color: theme.palette.grey[500],
            '& svg': {
                fontSize: '1.6rem',
            }
        }
    }
})

export default ListItemIcon
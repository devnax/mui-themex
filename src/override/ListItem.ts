const ListItem = () => ({
    styleOverrides: {
        root: {
            borderRadius: 4,
            padding: '2px 10px',
            marginBottom: 2,
            '&:hover': {
                backgroundColor: 'rgba(0,0,0,.05)'
            }
        }
    }
})

export default ListItem
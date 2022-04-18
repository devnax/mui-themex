const Tooltip = (theme: any) => ({
   styleOverrides: {
      tooltip: {
         zIndex: 99999,
         fontSize: 13,
         padding: '6px 12px',
         boxShadow: theme.shadows[5],
         fontWeight: 600,
         backgroundColor: theme.palette.common.black
       },
       arrow: {
         '&::before': {
            backgroundColor: theme.palette.common.black
         }
       }
   }
})

export default Tooltip
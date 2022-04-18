import {Theme} from '@mui/material/styles'

const DataGrid = ({palette}: Theme) => ({
   styleOverrides: {
       root: {
         '& .MuiDataGrid-cellContent': {
           color: palette.text.secondary
         }
       }
   }
})

export default DataGrid
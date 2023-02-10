import { Box, useTheme} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", flex:0.5},
        {field: "registrarId", headerName: "Registrar ID", flex:0.5},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"}, // this will grow depending on the width
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Number", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {field: "address", headerName: "Address", flex: 1},
        {field: "city", headerName: "City", flex: 1},
        {field: "zipCode", headerName: "Zip Code", flex: 1},
    ]

    return (
        <Box m="20px">
            <Header title="Contacts" subtitle="Manage Contact Information"></Header>
            <Box m="40px 0 0 0" height="75vh" 
            // this allows you to change the mui style by changing their code
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    border: "none"
                },
                "& .name-column--cell": { // defined earluer
                    color: colors.greenAccent[500],
                },
                "& .MuiDataGrid-columnHeaders": { // defined earluer
                    textEmphasis: "bold",
                    borderBottom: "none"
                }, 
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[500],
                },
                "& .MuiTablePagination-root": {
                    verticalAlign: "bottom",
                    textAlign: "bottom",
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                }
                
            }}
            >
                <DataGrid 
                rows = {mockDataContacts}
                columns = {columns}
                density="compact"
                components={{ Toolbar: GridToolbar }} // this will allow the columns, filters, denristy and export function
                ></DataGrid>
            </Box>
        </Box>
    )
}

export default Contacts;
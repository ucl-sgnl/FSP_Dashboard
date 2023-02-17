import { Box, useTheme} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { fspCatalogue } from "../../data/catalogue";

const Catalogue = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "COSPARID", headerName: "ID", flex:0.5},
        {field: "Name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"}, // this will grow depending on the width
        {field: "Type", headerName: "Type", headerAlign: "left", align: "left"},
        {field: "PAYLOAD_OPERATION_STATUS", headerName: "Status", flex: 1},
        {field: "OWNER", headerName: "Owner", flex: 1},
        {field: "LAUNCH_DATE", headerName: "Launch Date", flex: 1}
    ]

    return (
        <Box m="20px">
            <Header title="Contacts" subtitle="Manage Contact Information"></Header>
            <Box m="40px 0 0 0" height="90vh" 
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
                getRowId={(row) => row.COSPARID}
                rows = {fspCatalogue}
                columns = {columns}
                density="compact"
                rowsPerPageOptions={[50, 100, 200, 1000]}
                components={{ Toolbar: GridToolbar }} // this will allow the columns, filters, denristy and export function
                ></DataGrid>
            </Box>
        </Box>
    )
}

export default Catalogue;
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { FSPBoxsore } from "../../data/2023FSPBoxscore";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const Boxscore = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "Country", headerName: "Name", flex: 1, cellClassName: "name-column--cell", align: "center",  headerAlign: 'center'}, // this will grow depending on the width
        {field: "Payloads_OnOrbit", headerName: "On Orbit Paylods", type: "Number", flex: 1, align: "center",  headerAlign: 'center'},
        {field: "Payloads_Decayed", headerName: "Decayed Payloads", type: "Number", flex: 1, align: "center",  headerAlign: 'center'},
        {field: "Payloads_Total", headerName: "Total Payloads", type: "Number", flex: 1, align: "center",  headerAlign: 'center'},
        {field: "Debris_OnOrbit", headerName: "On Orbit Debris", type: "Number", flex: 1, align: "center",  headerAlign: 'center'},
        {field: "Debris_Decayed", headerName: "Decayed Debris", type: "Number", flex: 1, align: "center",  headerAlign: 'center'},
        {field: "Debris_Total", headerName: "Total Debris", type: "Number", flex: 1, align: "center",  headerAlign: 'center'},
        {field: "All_ObOrbit", headerName: "On Orbit Total ", type: "Number", flex: 1, align: "center", headerAlign: 'center'},
        {field: "All_Decayed", headerName: "Decayed Total", type: "Number", flex: 1, align: "center",  headerAlign: 'center'},
        {field: "All_Total", headerName: "Total", type: "Number", flex: 1, align: "center",  headerAlign: 'center'},
        // use the below code to customise the cells
        // {
        // renderCell: ({row : { access }}) => {
        //     return (
        //         <Box width="60%"
        //         m="0 auto"
        //         p="5px"
        //         display="flex"
        //         justifyContent="center"
        //         backgroundColor={
        //             access === "admin" 
        //             ? colors.greenAccent[500] 
        //             : colors.redAccent[500]
        //         }
        //         borderRadius="4px">
        //             {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
        //             {access === "user" && <LockOpenOutlinedIcon />}
        //             {access === "manager" && <SecurityOutlinedIcon />}
        //             <Typography 
        //             variant="h6" 
        //             back={colors.greenAccent[100]} 
        //             sx={{ ml: "5px" }}>{access}</Typography>
        //         </Box>
        //     )
        // }},
    ]

    return (
        <Box m="20px">
            <Header title="Team" subtitle="Manage your team members"></Header>
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
                "& .MuiCheckbox-root": {
                    color:`${colors.greenAccent[400]} !important`,
                }
            }}
            >
                <DataGrid
                getRowId={(row) => row.Country}
                rows = {FSPBoxsore}
                columns = {columns}
                checkboxSelection = {true}
                ></DataGrid>
            </Box>
        </Box>
    )
}

export default Boxscore;
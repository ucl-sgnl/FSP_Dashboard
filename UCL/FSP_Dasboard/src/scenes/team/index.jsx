import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"}, // this will grow depending on the width
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Number", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {field: "access", headerName: "Role", flex: 1, headerAlign: "center", align: "center",
        renderCell: ({row : { access }}) => {
            return (
                <Box width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                    access === "admin" 
                    ? colors.greenAccent[500] 
                    : colors.redAccent[500]
                }
                borderRadius="4px">
                    {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                    {access === "user" && <LockOpenOutlinedIcon />}
                    {access === "manager" && <SecurityOutlinedIcon />}
                    <Typography 
                    variant="h6" 
                    back={colors.greenAccent[100]} 
                    sx={{ ml: "5px" }}>{access}</Typography>
                </Box>
            )
        }},
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
                }
            }}
            >
                <DataGrid
                rows = {mockDataTeam}
                columns = {columns}
                ></DataGrid>
            </Box>
        </Box>
    )
}

export default Team;
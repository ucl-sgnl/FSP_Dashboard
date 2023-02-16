import { Box, useTheme } from "@mui/system";
import { Link } from 'react-router-dom';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { tokens } from "../../theme";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SatelliteAltOutlinedIcon from '@mui/icons-material/SatelliteAltOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SettingsOverscanOutlinedIcon from '@mui/icons-material/SettingsOverscanOutlined';
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";
import { useState } from "react";

const ExpandButton = ({to}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Button component={Link}  to={to} variant="h5" fontWeight="600" color= {colors.grey[100]}>
            <SettingsOverscanOutlinedIcon />
        </Button>
    )
}

const YearSelection = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [alignment, setAlignment] = useState('web');
    const [year, createDashboard] = useState('2019'); // start on 2019

    // set possible years for the dashboard
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        // need to update the createDashboard state with the year of the button
    };

    return (
        <Box margin="20px">
            <Box margin="20px" sx={{display: "flex", justifyContent: "space-between"}}>
                {/* <Header title="FSP Overview" subtitle="Welcome to your dashboard"></Header> */}
                    <ToggleButtonGroup
                        backgroundColor= {colors.greenAccent[400]}
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="2019">2019</ToggleButton>
                        <ToggleButton value="2023">2023</ToggleButton>
                        <ToggleButton value="2043">2043</ToggleButton>
                    </ToggleButtonGroup>
                    <Button sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px",}}>
                        <FileDownloadOutlinedIcon sx={{ mr: "10px"}}/>
                        Download Reports
                    </Button>
            </Box>
            <Dashboard year={year}></Dashboard>
        </Box>

    );
    
}


const Dashboard = ({ year }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    console.log(year)

    let data;
    if (year === "2019") {
        data = ["20, 646", "7, 243", "13, 403", "8, 167", "2, 780", "645"]
    } else if (year === "2023") {      
        data = ["22, 646", "2, 243", "60, 403", "800, 167", "2, 780", "11"]
    } else if (year === "2043") {
        data = ["24, 646", "1, 243", "90, 403", "10, 167", "20, 780", "122"]
    }

    return (
    <Box m="20px"> 
        {/* Grids and charts */}
        <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows = "140px"
        gap="20px">
            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="All Objects" subtitle={data[1]} icon={<WorkspacesOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="1"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="Launched Payloads" subtitle="7, 243" icon={<RocketLaunchOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.35" increase="35%"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="Total Debris" subtitle="13, 403" icon={<DeleteOutlineOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.64" increase="64%"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="Total Decayed" subtitle="8, 167" icon={<WhatshotOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.40" increase="40%"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="Starlink" subtitle="2, 780" icon={<SatelliteAltOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.13" increase="13%"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="OneWeb" subtitle="645" icon={<SatelliteAltOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.03" increase="3%"></StatBox>
            </Box>

            {/* Row 2 */}
            <Box gridColumn= "span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
                <Box mt="20px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="600" color= {colors.grey[100]}>Total Satellites Launches</Typography>
                    <ExpandButton to="/enlarger/line" />
                </Box>
                <Box height="250px">
                    <LineChart></LineChart>
                </Box>
            </Box>

            <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
                <Box mt="20px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="600" color= {colors.grey[100]}>2019-2023</Typography>
                    <ExpandButton to="/enlarger/bar" />
                </Box>
                <Box height="250px">
                    <BarChart></BarChart>
                </Box>
            </Box>

            {/* Row 3 */}
            <Box gridColumn="span 5" gridRow="span 2" backgroundColor={colors.primary[400]}>
                <Box mt="20px" p="0 20px" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="600" color= {colors.grey[100]}>2019-2023</Typography>
                    <ExpandButton to="/enlarger/pie"/>
                </Box>
                <Box height="250px">
                    <PieChart></PieChart>
                </Box>
            </Box>
        </Box>

        {/* <Box gridColumn="span 6" backgroundColor={colors.primary[400]}>
            <Box mt="20px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>Boxscore of objects on orbit in 2023</Typography>
            </Box>
            <Box>
                <Boxscore></Boxscore>
            </Box>
        </Box>  */}
    </Box>)
}

export default YearSelection;
import { Box, IconButton, useTheme } from "@mui/system";
import { Link } from 'react-router-dom';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import Team from "../Boxscore";
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
import MapView from "../../components/MapView";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { Pie } from "@nivo/pie";

const ExpandButton = ({to}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log(to)

    return (
        <Button component={Link}  to={to} variant="h5" fontWeight="600" color= {colors.grey[100]}>
            <SettingsOverscanOutlinedIcon />
        </Button>
    )
}

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="FSP Overview" subtitle="Welcome to your dashboard"></Header>
            <Box>
                <Button sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontsize: "14px", fontWeight: "bold", padding: "10px 20px", alignContent: "right"}}>
                    <FileDownloadOutlinedIcon sx={{ mr: "10px"}}/>
                    Download Reports
                </Button>
            </Box>
        </Box>

        
        {/* Grids and charts */}
        <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows = "140px"
        gap="20px">
            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="All Objects" subtitle="20, 646" icon={<WorkspacesOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="1"></StatBox>
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
                    <ExpandButton to="/line" />
                </Box>
                <Box height="250px">
                    <LineChart></LineChart>
                </Box>
            </Box>

            <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
                <Box mt="20px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="600" color= {colors.grey[100]}>2019-2023</Typography>
                    <ExpandButton to="/bar" />
                </Box>
                <Box height="250px">
                    <BarChart></BarChart>
                </Box>
            </Box>

            {/* Row 3 */}
            <Box gridColumn="span 5" gridRow="span 2" backgroundColor={colors.primary[400]}>
                <Box mt="20px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="600" color= {colors.grey[100]}>2019-2023</Typography>
                    <ExpandButton to="/pie" />
                </Box>
                <Box height="250px">
                    <PieChart></PieChart>
                </Box>
            </Box>
        </Box>
    </Box>)
}

export default Dashboard;
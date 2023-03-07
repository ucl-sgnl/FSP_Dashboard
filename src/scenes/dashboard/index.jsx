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
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";   
import StatBox from "../../components/StatBox";
import { LaunchByYear, YearlyStats, ObjectBreakDown } from "../../data/leoData";
import { useState } from "react";
import ScatterChart from "../../components/ScatterChart";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const ExpandButton = ({to}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Button component={Link}  to={to} variant="h5" fontWeight="600" color= {colors.grey[100]}>
            <SettingsOverscanOutlinedIcon />
        </Button>
    )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  };

const YearSelection = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [alignment, setAlignment] = useState('2019');
    const [year, createDashboard] = useState('2019'); // start on 2019

    // set possible years for the dashboard
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    // logic for the modals
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        <ToggleButton value= "2019" onClick={e => createDashboard("2019")}>2019</ToggleButton>
                        <ToggleButton value= "2023" onClick={e => createDashboard("2023")}>2023</ToggleButton>
                        <ToggleButton value= "2043" onClick={e => createDashboard("2043")}>2043</ToggleButton>
                    </ToggleButtonGroup>
                    <Button onClick={handleOpen} sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px",}}>
                        <AccountTreeOutlinedIcon sx={{ mr: "10px"}}/>
                        Create new CLUE
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}
                            component="form"
                            noValidate
                            autoComplete="off">
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Create new CLUE
                            </Typography>
                            <div>
                            <TextField
                                margin="10px"
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Upload Satellite"
                                />
                                <TextField
                                disabled
                                id="outlined-required"
                                label="Simulation Name"
                                />
                                <TextField
                                id="outlined-password-input"
                                label="ID"
                                type="password"
                                autoComplete="current-password"
                                />
                                <TextField
                                id="outlined-read-only-input"
                                label="End Year Date"
                                defaultValue="2030"
                                InputProps={{
                                    readOnly: true,
                                }}
                                />
                                <TextField
                                id="outlined-number"
                                label="Number of Monte Carlo Runs"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            </div>
                            <div margin="10px" width="50%">
                                <Button onClick={handleClose}
                                sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px",}}>
                                    <AccountTreeOutlinedIcon sx={{ mr: "10px"}}/>
                                    Run Simulation
                                </Button>
                            </div>   
                        </Box>
                    </Modal>
                    <Button sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px",}}>
                        <FileDownloadOutlinedIcon sx={{ mr: "10px"}}/>
                        Download Report
                    </Button>
            </Box>
            <Dashboard year={year}></Dashboard>
        </Box>
    );
}


const Dashboard = ({ year }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    let metaInfo = YearlyStats[year];
    
    return (
    <Box m="20px"> 
        {/* Grids and charts */}
        <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows = "140px"
        gap="20px">
            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="All Objects" subtitle={metaInfo["allObjects"]} icon={<WorkspacesOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="1"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="Launched Payloads" subtitle={metaInfo["activeSatellites"]} icon={<RocketLaunchOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.35" increase="35%"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="Total Debris" subtitle={metaInfo["debrisObjects"]} icon={<DeleteOutlineOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.64" increase="64%"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title="Total Decayed" subtitle={metaInfo["totalDecayed"]} icon={<WhatshotOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.40" increase="40%"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title={ year === "2043" ? "USA" : "Starlink"} subtitle={year === "2043" ? metaInfo["USA"]: metaInfo["Starlink"]} icon={<SatelliteAltOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.13" increase="13%"></StatBox>
            </Box>

            <Box gridColumn="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                <StatBox title={ year === "2043" ? "China" : "Oneweb"} subtitle={year === "2043" ? metaInfo["China"]: metaInfo["OneWeb"]}  icon={<SatelliteAltOutlinedIcon sx={{color: colors.grey[100], fontSize: "50px"}}/>} progress="0.03" increase="3%"></StatBox>
            </Box>

            {/* Row 2 */}
            <Box gridColumn= "span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
                <Box mt="20px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="600" color= {colors.grey[100]}>Total Satellites Launches</Typography>
                    <ExpandButton to="/enlarger/line" />
                </Box>
                <Box height="250px">
                    <LineChart data={LaunchByYear} maxYear={year}></LineChart>
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
            <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]}>
                <Box mt="20px" p="0 20px" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="600" color= {colors.grey[100]}>Launch By Altitude</Typography>
                    <ExpandButton to="/enlarger/scatter"/>
                </Box>
                <Box height="400px">
                    <ScatterChart maxYear={year.toString()}></ScatterChart>
                </Box>
            </Box>

            <Box gridColumn="span 5" gridRow="span 3" backgroundColor={colors.primary[400]}>
                <Box mt="20px" p="0 20px" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight="600" color= {colors.grey[100]}>Type of Debris</Typography>
                    <ExpandButton to="/enlarger/pie"/>
                </Box>
                <Box height="400px">
                    {/* <MapView isDashboard={true}></MapView> */}
                    <PieChart data={ObjectBreakDown} year={year}></PieChart>
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
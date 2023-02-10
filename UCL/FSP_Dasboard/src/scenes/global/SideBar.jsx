import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineIcon from '@mui/icons-material/Timeline';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import DataArrayOutlinedIcon from '@mui/icons-material/DataArrayOutlined';
import { Bar } from '@nivo/bar';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <MenuItem 
        active={selected === title} 
        style={{color: colors.grey[100]}} 
        onClick={() => setSelected(title)}
        icon={icon} // this should be icon = {icon} but it's not working
        >
            <Typography>{title}</Typography>
            <Link to={to}></Link>
        </MenuItem>
    )
}

const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false); // represents the state of the sidebar
    const [selected, setSelected] = useState("Dashboard"); // what is currently selected

    return( 
        <Box 
        sx={{
            "& .pro-sidebar": {
                background:`${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
              padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
              color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
              color: "#6870fa !important",
            }
        }}
        >
              <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                {/* LOGO AND MENU ICON */}
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <HomeOutlinedIcon /> : undefined}
                    style={{
                    margin: "10px 0 20px 0",
                    color: colors.grey[100],
                    }}
                >
                    {/* What does it show when it is collapsed */}
                    {!isCollapsed && (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        ml="15px"
                    >
                        <Typography variant="h3" color={colors.grey[100]}>
                        SGNL
                        </Typography>
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <HomeOutlinedIcon />
                        </IconButton>
                    </Box>
                    )}
                </MenuItem>

                {!isCollapsed && (
                    <Box mb="25px">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={`../../assets/indigo.png`}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                        >
                        Indigo
                        </Typography>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                        Admin
                        </Typography>
                    </Box>
                    </Box>
                )}

                    {/* Menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>

                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        Data
                        </Typography>

                        <Item 
                        title="Dashboard" 
                        to="/" 
                        icon={<DataArrayOutlinedIcon/>} 
                        selected={selected} 
                        setSelected={setSelected} />

                        <Item 
                        title="Manage Team" 
                        to="/team" 
                        icon={<PeopleOutlinedIcon />} 
                        selected={selected} 
                        setSelected={setSelected} />

                        <Item 
                        title="Contacts Information" 
                        to="/contacts" 
                        icon={<ContactsOutlinedIcon />} 
                        selected={selected} 
                        setSelected={setSelected} />

                        <Item 
                        title="Invoices + Balances" 
                        to="/invoices" 
                        icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />

                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        People
                        </Typography>

                        <Item 
                        title="Profile Form" 
                        to="/form" 
                        icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />

                        <Item 
                        title="Calender" 
                        to="/calender" 
                        icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        
                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        Charts
                        </Typography>
                        <Item 
                        title="Bar Chart" 
                        to="/bar" 
                        icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />

                        <Item 
                        title="Pie Chart" 
                        to="/pie" 
                        icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        
                        <Item 
                        title="Line Chart" 
                        to="/line" 
                        icon={<TimelineIcon />} selected={selected} setSelected={setSelected} />

                        <Item 
                        title="Mapping" 
                        to="/mapping" 
                        icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />

                        <Item 
                        title="FAQ Page" 
                        to="/faq" 
                        icon={<LiveHelpOutlinedIcon />} selected={selected} setSelected={setSelected} />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );

}

export default SideBar;
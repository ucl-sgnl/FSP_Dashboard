import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import DataArrayOutlinedIcon from '@mui/icons-material/DataArrayOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
                maxHeight: "100vh",
                overflow: "auto", 
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
              <ProSidebar collapsed={isCollapsed} breakPoint="md">
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
                        Menu
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
                        src={`../../assets/SGNL_logo_WhiteonAlpha.png`}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Typography
                        variant="h4"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                        >
                        Satellite Geodesy & Navigation Laboratory
                        </Typography>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                        University College London
                        </Typography>
                    </Box>
                    </Box>
                )}

                    {/* Menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        {isCollapsed && (
                            <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                            >
                            FSP
                            </Typography>
                        )}

                        {!isCollapsed && (
                            <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                            >
                            Future Space Populations
                            </Typography>
                        )}
             
                        <Item 
                        title="Overview" 
                        to="/" 
                        icon={<DataArrayOutlinedIcon/>} 
                        selected={selected} 
                        setSelected={setSelected} />

                        <Item 
                        title="Orbital View" 
                        to="https://ucl-sgnl.bitbucket.io/fspviz/fspviz.html" 
                        icon={<PublicOutlinedIcon/>} 
                        selected={selected} 
                        setSelected={setSelected} />

                        <Item 
                        title="Catalogue" 
                        to="/catalogue" 
                        icon={<DnsOutlinedIcon />} 
                        selected={selected} 
                        setSelected={setSelected} />

                        <Item 
                        title="Box Score" 
                        to="/boxscore" 
                        icon={<DnsOutlinedIcon />} 
                        selected={selected} 
                        setSelected={setSelected} />

                        <Item 
                        title="Upcoming Launches" 
                        to="/calender" 
                        icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
                
                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        About
                        </Typography>

                        <Item 
                        title="About Us"
                        to="/about" 
                        icon={<BookOutlinedIcon />} selected={selected} setSelected={setSelected} />

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
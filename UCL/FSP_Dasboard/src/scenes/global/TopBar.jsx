import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';


const TopBar = () => {
    // pass the different themes depending if it is light or dark mode
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
    <Box display="flex" justifyContent="space-between" p={2}>
        {/* Search bar */}
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"/>
            <IconButton type="button" sx = {{ p: 1}}>
                <SearchIcon />
            </IconButton>
        </Box>


        {/* Icons */}
        <Box display="flex" justifyContent="right">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />) : (<LightModeOutlinedIcon />)}
            </IconButton>

            <IconButton>
                <NotificationsActiveOutlinedIcon />
            </IconButton>

            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>

            <IconButton>
                 <PersonOutlineOutlinedIcon/>
            </IconButton>
        </Box>

    </Box>); // box is similar to a div, but it has more features, you can write css straight onto box
}

export default TopBar;
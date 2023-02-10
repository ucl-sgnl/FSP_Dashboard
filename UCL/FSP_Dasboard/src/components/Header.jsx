import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mb="30px">
            <Typography variant="h3" 
            color={colors.greenAccent[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
            >{title}</Typography>
            
            <Typography 
            variant="subtitle1"
            color={colors.greenAccent[500]}
            >{subtitle}</Typography>
        </Box>
    )
}

export default Header;
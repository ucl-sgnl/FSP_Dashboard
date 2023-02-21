import { Typography, Box, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from "../theme";
import Button from "@mui/material/Button";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Header = ({title, subtitle, enlarger = false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mb="30px">
            {/* Eventually include a dynamic title */}
            {/* <Typography variant="h3" 
            color={colors.greenAccent[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
            >{title}</Typography> */}

            {enlarger && 
                <Button component={Link} to={'/'} sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontsize: "14px", fontWeight: "bold", padding: "10px 20px", alignContent: "right"}}>
                    <ArrowBackOutlinedIcon sx={{ mr: "10px"}}/>
                    Dashboard
                </Button>
            }
        </Box>
    )
}

export default Header;
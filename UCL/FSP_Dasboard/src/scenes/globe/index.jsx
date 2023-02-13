import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Viewer } from "resium";


const Globe = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
        <Viewer />
    </Box>
  );
}

export default Globe;
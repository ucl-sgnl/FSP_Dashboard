import { Box, useTheme } from "@mui/system";
import LineChart from "../../components/LineChart";
import { tokens } from "../../theme";
import { LaunchByYear, YearlyStats, ObjectBreakDown } from "../../data/leoData";
import { TLEAccuracy } from "../../data/TLA_accuracy";
import Header from "../../components/Header";




const TimeSeries = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box height= "75vh">
                <LineChart data={TLEAccuracy} TLE={true}/>
            </Box>
        </Box>
    )
}

export default TimeSeries;
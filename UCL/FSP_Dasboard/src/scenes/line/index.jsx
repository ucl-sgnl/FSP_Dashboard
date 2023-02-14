import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";


const Line = () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Pie Chart Interactive Page" />
            <Box height= "75vh">
                <LineChart years2019_2023={true}/>
            </Box>
        </Box>
    )
}

export default Line;
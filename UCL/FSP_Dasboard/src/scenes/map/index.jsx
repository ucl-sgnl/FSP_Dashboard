import { Box } from "@mui/material";
import Header from "../../components/Header";
import MapView from "../../components/MapView";


const Map = () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Pie Chart Interactive Page" />
            <Box height= "75vh">
                <MapView />
            </Box>
        </Box>
    )
}

export default Map;
import { Box } from "@mui/material";
import Header from "../../components/Header";
import MapView from "../../components/MapView";
import EnlargedItem from "../enlargeditem";


const Map = () => {
    return (
        <EnlargedItem graphComponent={<MapView />}>
        </EnlargedItem>
    )
}

export default Map;
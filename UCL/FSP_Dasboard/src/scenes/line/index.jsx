import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import MapView from "../../components/MapView";
import { useParams } from "react-router-dom";
import EnlargedItem from "../enlargeditem";

const Line = () => {
    let { graph } = useParams();
    let props;

    if (graph == "line") {
        props = <LineChart />
    } else if (graph == "bar") {
        props = <BarChart />
    } else if (graph == "pie") {
        props = <PieChart />
    } else if (graph == "map") {
        props = <MapView />
    }
    
    return (
        <EnlargedItem graphComponent={props}>
        </EnlargedItem>
    )
}

export default Line;
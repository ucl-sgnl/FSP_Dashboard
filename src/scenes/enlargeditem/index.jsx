import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import MapView from "../../components/MapView";
import ScatterChart from "../../components/ScatterChart";
import { useParams } from "react-router-dom";

const EnlargedItem = () => {

    // this will come from the route /enlargeditem/:graph
    // then we can use the graph variable to determine which graph to render
    let { graph } = useParams();
    let props;

    console.log(graph);
    if (graph === "line") {
        props = <LineChart enlarger={true} />
    } else if (graph === "bar") {
        props = <BarChart />
    } else if (graph === "pie") {
        props = <PieChart />
    } else if (graph === "map") {
        props = <MapView />
    } else if (graph === "scatter") {
        props = <ScatterChart />
    }

    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Pie Chart Interactive Page" enlarger={true}/>
            <Box height= "75vh">
                    <>
                        {props}  
                    </>
            </Box>
        </Box>
    )
}

export default EnlargedItem;
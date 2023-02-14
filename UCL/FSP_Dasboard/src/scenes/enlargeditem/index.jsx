import { Box } from "@mui/material";
import Header from "../../components/Header";
import line from "../line";
import Button from "@mui/material/Button";

const EnlargedItem = ({ graphComponent }) => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Pie Chart Interactive Page" enlarger={true}/>
            <Box height= "75vh">
                    <>
                        {graphComponent}  
                    </>
            </Box>
        </Box>
    )
}

export default EnlargedItem;
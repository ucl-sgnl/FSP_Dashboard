import { Box } from "@mui/system";
import Header from "../../components/Header";
import Team from "../team";

const Dashboard = () => {
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>
        </Box>
    </Box>)
}

export default Dashboard;
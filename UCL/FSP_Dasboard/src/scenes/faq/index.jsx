import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">What is the purpose of this website?</Typography>
                </AccordionSummary>
                <AccordianDetails>
                    <Typography>Absolutely Everything!</Typography>
                </AccordianDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">What is the purpose of this website?</Typography>
                </AccordionSummary>
                <AccordianDetails>
                    <Typography>Absolutely Everything!</Typography>
                </AccordianDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">What is the purpose of this website?</Typography>
                </AccordionSummary>
                <AccordianDetails>
                    <Typography>Absolutely Everything!</Typography>
                </AccordianDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">What is the purpose of this website?</Typography>
                </AccordionSummary>
                <AccordianDetails>
                    <Typography>Absolutely Everything!</Typography>
                </AccordianDetails>
            </Accordion>
        </Box>
    )
};

export default FAQ;
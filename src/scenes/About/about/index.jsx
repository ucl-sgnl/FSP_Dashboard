import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Header from "../../../components/Header";



const AboutUs = () => {

    return(
        <Box m="20px" justifyContent="center" alignItems="center">
            <Box sx={{flexGrow: 1}} m="25px">
                <Header m="20px" subtitle={"About us"}>
                </Header>
                <Typography variant="h5" paragraph={true}>
                SGNL are a research grouped based at University College London (UCL). Our focus ranges from individual RSO, constellation analysis and environmental level prediction and democratisation.
                This can range from determining the motion of a tectonic plate, to helping a blind pedestrian navigate across a city, or to predicting the trajectory of a space vehicle thousands of kilometres above the surface of the earth moving at several kilometres per second.
                </Typography>
                <Typography variant="h5" paragraph={true}>
                Our methods include developing new hardware, exploiting GNSS signals (Global Navigation Satellite System) in novel ways and mathematical modelling of forces on space vehicles induced by the space environment. We design and conduct experiments. We simulate complex systems operating in space. We have several distinctive, niche capabilities that have led to successful long-term research relationships with NASA, the European Space Agency, the Ordnance Survey and the UK Hydrographic Office.
                </Typography>
                <Typography variant="h5" paragraph={true}>
                Key projects include intelligent positioning for cities using 3D city models, designing a navigation system for Mars for the European Space Agency, novel navigation systems for ambulances using multiple environment sensors, and orbit determination models (used as operational standards) for the principal missions used by NASA to measure sea level change from space. We like to think we embrace UCL’s values by doing impactful work that benefits many, many people.
                </Typography>
            </Box>
             
            <Box sx={{flexGrow: 1, flexWrap: 'wrap'}} m="25px">
                <Header m="20px" subtitle={"Meet the Team"} >
                </Header>
                <Grid container spacing={2} minHeight={160} display="flex">
                    <Grid xs display="flex" flexWrap={"wrap"} justifyContent="space-around">
                        <Card sx={{ maxWidth: 345}} m="20px">
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="300"
                                image="../../assets/marek.jpeg"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Dr. Marek Ziebart
                                </Typography>
                                <Typography variant="body1" color="text.primary" paragraph={true}>
                                Marek Ziebart is Professor of Space Geodesy at University College London. His primary area of expertise is the modelling of photon forces on space vehicles. Models and principles developed by Ziebart and his group are used as operational standards for several missions by NASA Jet Propulsion Laboratory, NASA Goddard Space Flight Centre, MIT, US Air Force and ESA. He was the principal investigator on an ESA project to design a navigation and communication system for Mars (joint with Bae Systems). He was a member of the NASA-CNES ocean surface topography science working team, and serves on the governing board of the IGS (International GNSS Service). 
                                </Typography>
                                <Typography variant="body1" color="text.primary" paragraph={true}>
                                More recently he has acted as a scientific adviser to NATO, US Air Force Space Command and the UK government.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="300"
                                image="../../assets/santosh.jpg"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Dr. Santosh Bhattarai
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                 Santosh Bhattarai is a lecturer in space geodesy in the Department of Civil, Environmental and Geomatic Engineering (CEGE) at University College London (UCL) with research interests in astrodynamics and space debris dynamics for orbit prediction and orbit determination, and also, in various aspects of global navigation satellite systems (GNSS) and related technologies. He was awarded a PhD in Global Navigation Satellite Systems from UCL in 2015, a BSc in Mathematics and Physics from the University of York in 2009, and is a Fellow of the Higher Education Academy since 2020. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="300"
                                    image="../../assets/charles.jpg"
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Charles Constant
                                    </Typography>
                                    <Typography variant="body1" color="text.primary" paragraph={true}>
                                    Following a year as a professional cyclist, Charles completed a BSc in Physical Geography at the University of Reading. He then completed a second undergraduate degree in Engineering (Civil) at UCL, and a masters degree in Environmental Data Science and Machine Learning at Imperial College London.
                                    </Typography>

                                    <Typography variant="body1" color="text.primary" paragraph={true}>
                                    His research focuses on flight dynamics of satellite mega-constellations. Charles is particularly interested in using high-fidelity aerodynamic force models to reverse engineer atmospheric density models, and to improve the quality of spacecraft conjunction analyses.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="300"
                                    image="../../assets/indigo.png"
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Indigo Brownhall
                                    </Typography>
                                    <Typography variant="body1" color="text.primary" paragraph={true}>
                                    Indigo has a professional background in Software Engineering and GIS, he is PhD is focused on Future Space Populations and the democratisation of satellite data to empower the next generation. His research is currently whether Virtual Reality can be used to inform the general public and students to understand the potential issues of no regulation in space. 
                                    </Typography>

                                    <Typography variant="body1" color="text.primary" paragraph={true}>
                                    He was award the GANT Award for achieving the overall top marks for MSc Geospatial Sciences (GIS and Computing) at UCL, and has an undergraduate form Durahm University. Alongside this, he is a Project Manager of the AI/ML smart planning tool InformedDECISION and is the outreach lead of the chartity, GIS-E.     
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )


}

export default AboutUs;
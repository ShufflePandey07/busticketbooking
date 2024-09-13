import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import React from "react";
import AboutUs from "../aboutus/About";
import OurServices from "../OurServices/OurServices";
import WhyChooseUs from "../whyus/WhyChooseUs";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage:
      'url("https://images.hdqwalls.com/wallpapers/bus-retro-56.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  heroContent: {
    color: "white",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  busImage: {
    position: "absolute",
    right: "5%",
    bottom: "10%",
    maxWidth: "40%",
    zIndex: 2,
  },
  form: {
    backgroundColor: "white",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    marginTop: "-40px",
    position: "relative",
    zIndex: 3,
    boxShadow: theme.shadows[5],
  },
  purpleButton: {
    backgroundColor: "#8e24aa",
    color: "white",
    "&:hover": {
      backgroundColor: "#6a1b9a",
    },
  },
}));

const BusBookingPage = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <Box>
      <Box className={classes.hero}>
        <div className={classes.overlay} />
        <Container className={classes.heroContent}>
          <Typography variant="h2" component="h1" gutterBottom>
            Reserve Your
            <br />
            Bus Tickets
            <br />
            Now
          </Typography>
          <Typography variant="h6" paragraph>
            Find and book your bus tickets with just a few clicks. We
            <br />
            offer a wide range of bus routes and schedules to suit
            <br />
            your needs.
          </Typography>
          <Button
            variant="contained"
            className={classes.purpleButton}
            size="large"
          >
            Reserve Seat Now
          </Button>
        </Container>
        {/* <img src="/src/bus3.png" alt="Bus" className={classes.busImage} /> */}
      </Box>
      <Container>
        <Box className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="From"
                variant="outlined"
                placeholder="Select a location"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label="To"
                variant="outlined"
                placeholder="Select a location"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DatePicker
                label="Choose Date"
                inputVariant="outlined"
                value={selectedDate}
                onChange={setSelectedDate}
                format="MM/dd/yyyy"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                className={classes.purpleButton}
                size="large"
              >
                Check Availability
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <AboutUs />;
      <WhyChooseUs />;
      <OurServices />;
    </Box>
  );
};

export default BusBookingPage;

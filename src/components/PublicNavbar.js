import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import logo from "../images/tosub.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    // backgroundColor: theme.palette.primary.main,
    background: "#fff",
  },
  logo: {},
}));

const PublicNavbar = () => {
  const classes = useStyles();
  return (
    <AppBar classes={{ root: classes.appBar }} elevation={0}>
      <Grid container justify="center">
        <img
          alt="arrow to sub"
          src={logo}
          style={{ height: "15vh", width: "auto" }}
          className={classes.logo}
        ></img>
      </Grid>

      {/* <Typography variant="h4">Transcript to Subtitle</Typography> */}
    </AppBar>
  );
};
export default PublicNavbar;

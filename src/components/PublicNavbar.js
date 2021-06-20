import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import logo from "../images/tosub.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.dark,
  },
}));

const PublicNavbar = () => {
  const classes = useStyles();
  return (
    <AppBar classes={{ root: classes.appBar }}>
      <img
        alt="arrow to sub"
        src={logo}
        style={{ height: "60px", width: "200px" }}
      ></img>
      {/* <Typography variant="h4">Transcript to Subtitle</Typography> */}
    </AppBar>
  );
};
export default PublicNavbar;

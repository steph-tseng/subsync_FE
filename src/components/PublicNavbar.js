import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.dark,
  },
}));

const PublicNavbar = () => {
  const classes = useStyles();
  return (
    <AppBar classes={{ root: classes.appBar }}>
      <Typography variant="h4">Transcript to Subtitle</Typography>
    </AppBar>
  );
};
export default PublicNavbar;

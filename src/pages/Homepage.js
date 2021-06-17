import React, { useState } from "react";
// import { Cloudinary } from "@cloudinary/base";
// import cloudinary from "https://upload-widget.cloudinary.com/global/all.js";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import Grid from "@material-ui/core/Grid";
import { TextEditor } from "../components/TextEditor";
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";
DocumentEditorContainerComponent.Inject(Toolbar);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(15),
    // justifyContent: "space-between",
  },
  uploader: {
    justifyContent: "flex-start",
  },
  editor: {
    paddingLeft: theme.spacing(5),
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  return (
    <Grid container className={classes.root}>
      <Grid item lg={12}>
        <Typography></Typography>
      </Grid>
      <Grid item lg={6} className={classes.uploader}>
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={3}
          server="/api"
          name="files"
          labelIdle="Drag & Drop your files"
        />
      </Grid>
      <Grid item md={6} lg={6} className={classes.editor}>
        {/* <DocumentEditorContainerComponent
          id="container"
          style={{ height: "590px" }}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          enableToolbar={true}
        /> */}
        <TextEditor />
      </Grid>
    </Grid>
  );
};

export default Homepage;

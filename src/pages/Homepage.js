import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { Cloudinary } from "@cloudinary/base";
// import cloudinary from "https://upload-widget.cloudinary.com/global/all.js";
import { TextField, makeStyles, Typography, Button } from "@material-ui/core";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { v4 } from "uuid";
import Grid from "@material-ui/core/Grid";
// import { TextEditor } from "../components/TextEditor";
import videoActions from "../redux/actions/video.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20vh",
    // justifyContent: "space-between",
  },
  uploader: {
    height: "50vh",
  },
  editor: {
    paddingLeft: theme.spacing(5),
  },
  linkField: {
    marginTop: theme.spacing(3),
  },
  btn: {
    width: "100%",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({ link: "" });
  const [link, setLink] = useState("");
  // var file = files.filter((x) => x.includes(".mp4"))[0];
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors("");
    if (files) {
      // let photoFolder = new FormData();
      // photoFolder.append("photo", files[0].file);
      // photoFolder.append("folder", new Date());
      // photoFolder.append("user", v4());
      setErrors("Sending File");
      console.log(files);
      dispatch(videoActions.uploadFile(files));
    } else {
      setErrors("Please select a file first.");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getId = (url) => {
    let id = url.split("v=")[1];
    id.includes("&") ? (id = id.split("&")[0]) : console.log("");
    setLink(`https://www.youtube.com/embed/${id}`);
    console.log(link);
    setFormData({ link: "" });
  };

  const onFileChange = (e) => {
    setFiles(e.target.files[0]);
  };

  // formData.link ? getId(formData.link) : console.log("nothing");

  return (
    <Grid container className={classes.root} justify="center">
      <Grid item lg={12}>
        <Typography></Typography>
      </Grid>
      <Grid item sm={10} lg={8}>
        <form enctype="multipart/form-data">
          {/* <input type="file" onChange={onFileChange} /> */}
          <FilePond
            files={files}
            onupdatefiles={(files) => setFiles(files[0].file)}
            allowMultiple={true}
            maxFiles={2}
            instantUpload={false}
            allowReorder={true}
            // server="api/video/"
            name="files"
            labelIdle="Drag & Drop your files"
            className={classes.uploader}
          />
          <Button
            onClick={onSubmit}
            variant="outlined"
            style={{}}
            className={classes.btn}
          >
            Upload
          </Button>
        </form>
        {errors ? (
          <Typography textAlign="center">{errors}</Typography>
        ) : (
          <div></div>
        )}
        {success ? (
          // <iframe
          //   title="Video Preview"
          //   width="420"
          //   height="315"
          //   src={files}
          // ></iframe>
          <image src=""></image>
        ) : link ? (
          <iframe
            title="Video Preview"
            width="800"
            height="560"
            src={link}
          ></iframe>
        ) : (
          <>
            {/* <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={3}
              // server="/api"
              name="files"
              labelIdle="Drag & Drop your files"
              onSubmit={onSubmit}
            /> */}
            {/* <TextField
              name="link"
              value={formData.link}
              onChange={handleChange}
              variant="outlined"
              style={{ width: "100%" }}
              placeholder="Link to youtube video"
              className={classes.linkField}
            /> */}
          </>
        )}
      </Grid>
      {/* <Grid item md={6} lg={6} className={classes.editor}> */}
      {/* <Typography>SRT File Editor</Typography> */}
      {/* <DocumentEditorContainerComponent
          id="container"
          style={{ height: "590px" }}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          enableToolbar={true}
        /> */}
      {/* <TextEditor /> */}
      {/* </Grid> */}
      {/* <Grid item lg={12}></Grid> */}
    </Grid>
  );
};

export default Homepage;

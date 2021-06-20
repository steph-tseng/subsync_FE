import React, { useState } from "react";
// import { Cloudinary } from "@cloudinary/base";
// import cloudinary from "https://upload-widget.cloudinary.com/global/all.js";
import { TextField, makeStyles, Typography } from "@material-ui/core";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import axios from "axios";
import { v4 } from "uuid";
import Grid from "@material-ui/core/Grid";
import { TextEditor } from "../components/TextEditor";

const BACKEND_API = process.env.BACKEND_API;

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
  linkField: {
    marginTop: theme.spacing(3),
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({ link: "" });
  const [link, setLink] = useState("");
  // var file = files.filter((x) => x.includes(".mp4"))[0];

  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setErrors("");
    if (files && files.length > 0) {
      let photoFolder = new FormData();
      photoFolder.append("photo", files[0].file);
      photoFolder.append("folder", new Date());
      photoFolder.append("user", v4());
      setErrors("Sending File");
      axios
        .post(`${BACKEND_API}/upload`, photoFolder, {})
        .then((res) => {
          console.log(res.data);
          if (res.data.errors) {
            setErrors(res.data.errors);
          } else if (res.data.success) {
            setSuccess(true);
          }
        })
        .catch((e) => setErrors(e));
    } else {
      setErrors("Please select an image file first.");
    }
  };

  const renderErrors = () => {
    if (errors !== "") {
      return <div>{errors}</div>;
    } else {
      return null;
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

  formData.link ? getId(formData.link) : console.log("nothing");

  return (
    <Grid container className={classes.root}>
      <Grid item lg={12}>
        <Typography></Typography>
      </Grid>
      <Grid item lg={6} className={classes.uploader}>
        <form onSubmit={onSubmit}>
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={3}
            server={BACKEND_API}
            name="files"
            labelIdle="Drag & Drop your files"
          />
        </form>
        {renderErrors()}
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
            <TextField
              name="link"
              value={formData.link}
              onChange={handleChange}
              variant="outlined"
              style={{ width: "100%" }}
              placeholder="Link to youtube video"
              className={classes.linkField}
            />
          </>
        )}
      </Grid>
      <Grid item md={6} lg={6} className={classes.editor}>
        {/* <Typography>SRT File Editor</Typography> */}
        {/* <DocumentEditorContainerComponent
          id="container"
          style={{ height: "590px" }}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          enableToolbar={true}
        /> */}
        <TextEditor />
      </Grid>
      <Grid item lg={12}></Grid>
    </Grid>
  );
};

export default Homepage;

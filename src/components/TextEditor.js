import { makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  textBox: {
    width: "95%",
    height: "100%",
  },
}));

export const TextEditor = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ content: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <TextField
        variant="outlined"
        name="content"
        value={formData.content}
        onChange={handleChange}
        className={classes.textBox}
        placeholder="SRT File Editor"
        multiline
      />
    </form>
  );
};

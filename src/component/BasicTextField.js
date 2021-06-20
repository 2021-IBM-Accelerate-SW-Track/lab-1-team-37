import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  Avatar,
  FormControl,
  InputLabel,
  ListItemAvatar,
  MenuItem,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

// STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
      textAlign: "left",
      justifyContent: "left",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fabRoot: {},
  catSelect: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectLabel: {},
}));

function CategorySelect() {
  const classes = useStyles();

  // category is "chores", "other", "school", "self-care", "social", or "work"
  const [category, setCategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl className={classes.catSelect}>
      <InputLabel>Category</InputLabel>
      <Select
        className={classes.selectLabel}
        variant="outlined"
        id="category-selection"
        value={category}
        onChange={handleCategoryChange}
      >
        <MenuItem value={"chores"}>Chores</MenuItem>
        <MenuItem value={"school"}>School</MenuItem>
        <MenuItem value={"self-care"}>Self-care</MenuItem>
        <MenuItem value={"Social"}>Social</MenuItem>
        <MenuItem value={"work"}>Work</MenuItem>
        <MenuItem value={"other"}>Other</MenuItem>
      </Select>
    </FormControl>
  );
}
// EXPORT
export default function BasicTextFields() {
  const classes = useStyles();

  const [currentInput, setCurrentInput] = useState("");

  // ***For Lauren***
  // Just a basic text field and add button to get you started. Feel free to style it as you'd like!
  // List state is stored inside of MainGrid.js, so you'll need to make your DeleteFunction there
  // Because the file structure is MainGrid.js > TabPanel.js > BasicTextField, you'll need to pass
  // the function as a prop down more than once!

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Toolbar style={{ width: "100%" }}>
        <Grid container spacing={5}>
          <Grid item>
            <TextField
              onChange={(e) => {
                setCurrentInput(e.target.value);
              }}
              id="standard-basic"
              label="I need to..."
              color="secondary"
              inputProps={{
                style: {
                  textAlign: "left",
                  verticalAlign: "center",
                  width: "36rem",
                },
              }}
            />
          </Grid>
          <Grid item>
            <CategorySelect />
          </Grid>
          <Grid item>
            <div className={classes.fabRoot}>
              <Fab color="primary" aria-label="add" variant="extended">
                <AddIcon
                  onClick={() => {
                    alert("Ability to add entry is not yet functional");
                  }}
                />
              </Fab>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </form>
  );
}

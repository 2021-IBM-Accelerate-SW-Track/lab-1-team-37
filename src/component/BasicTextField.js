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

// EXPORT
export default function BasicTextFields(props) {
  const classes = useStyles();

  const [currentInput, setCurrentInput] = useState("");
  const [category, setCategory] = React.useState("");

  // ***For Lauren***
  // Just a basic text field and add button to get you started. Feel free to style it as you'd like!
  // List state is stored inside of MainGrid.js, so you'll need to make your DeleteFunction there
  // Because the file structure is MainGrid.js > TabPanel.js > BasicTextField, you'll need to pass
  // the function as a prop down more than once!

  const CategorySelect = () => {
    const classes = useStyles();

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
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Toolbar style={{ width: "100%" }}>
        <Grid container spacing={5}>
          <Grid item>
            <TextField
              value={currentInput}
              onChange={(e) => {
                setCurrentInput(e.target.value);
                console.log(currentInput);
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
              <Fab
                color="primary"
                aria-label="add"
                variant="extended"
                onClick={() => {
                  // TODO: Alert user if the input was not accepted for some reason

                  setCurrentInput("");
                  let isADuplicate = false;
                  if (currentInput === "") return;
                  props.listOfEntries.map((obj) => {
                    if (
                      obj.title.toLowerCase() === currentInput.toLowerCase()
                    ) {
                      isADuplicate = true;
                      console.log("duplicate found!");
                      return;
                    }
                  });

                  // TODO: Alert the user if no category was selected; suggest they choose one next time
                  if (isADuplicate === false) {
                    props.remotelyScrollToLastEntry();
                    props.remotelyHandleAdd({
                      title: currentInput,
                      category: category,
                    });
                  }
                }}
              >
                <AddIcon />
              </Fab>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </form>
  );
}

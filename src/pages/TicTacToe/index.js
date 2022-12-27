import { Button, ButtonGroup, FormControlLabel, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
// const label = { inputProps: { "aria-label": "Swich demo" } };

const Item = makeStyles({
  root: {
    backgroundColor: "#F0E68C",
    border: "1px solid",
    // borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    // padding: theme.spacing(5),
    borderRadius: "3px",
    textAlign: "center",
    height: "110px",
    fontSize: "50px",
    paddingTop: "15px",
  },
});

const TicTacToe = () => {
  const [game, setGame] = useState({
    board: {
      "0,0": null,
      "0,1": null,
      "0,2": null,
      "1,0": null,
      "1,1": null,
      "1,2": null,
      "2,0": null,
      "2,1": null,
      "2,2": null,
    },
    gameStarted: false,
    gameEnded: false,
    winner: "none",
  });
  const atama = (e) => {
    const value = checked ? "X" : "O";
    setGame((prevState) => ({
      ...prevState,
      board: {
        ...prevState.board,
        [e.target.id]: value,
      },
    }));
  };
  const onclick = game.gameStarted == null ? (e) => atama(e) : undefined;
  console.log(game.board);

  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [firstStart, setFirstStart] = useState(true);
  const startChange = (event) => {
    setFirstStart(event.target.checked);
  };

  const classes = Item();
  return (
    <Container
      sx={{
        display: "grid",
        marginTop: "40px",
        width: "50%",
        // height: "20vh",
      }}
    >
      <Grid container sx={{ border: "2px" }}>
        <Grid className={classes.root} id="0,0" onClick={onclick} item xs={4}>
          {game.board["0,0"]}
        </Grid>
        <Grid className={classes.root} id="0,1" onClick={onclick} item xs={4}>
          {game.board["0,1"]}
        </Grid>
        <Grid className={classes.root} id="0,2" onClick={onclick} item xs={4}>
          {game.board["0,2"]}
        </Grid>
        <Grid className={classes.root} id="1,0" onClick={onclick} item xs={4}>
          {game.board["1,0"]}
        </Grid>
        <Grid className={classes.root} id="1,1" onClick={onclick} item xs={4}>
          {game.board["1,1"]}
        </Grid>
        <Grid className={classes.root} id="1,2" onClick={onclick} item xs={4}>
          {game.board["1,2"]}
        </Grid>
        <Grid className={classes.root} id="2,0" onClick={onclick} item xs={4}>
          {game.board["2,0"]}
        </Grid>
        <Grid className={classes.root} id="2,1" onClick={onclick} item xs={4}>
          {game.board["2,1"]}
        </Grid>
        <Grid className={classes.root} id="2,2" onClick={onclick} item xs={4}>
          {game.board["2,2"]}
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="X Olacak mısın?"
          labelPlacement="start"
        />
      </Grid>
      <Grid container sx={{ justifyContent: "center " }}>
        <ButtonGroup>
          <Button onClick={(event) => setGame({ ...game, gameStarted: true })}>
            Start Game
          </Button>
          <Button onClick={(event) => setGame({ ...game, gameEnded: true })}>
            Resign
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <FormControlLabel
          control={
            <Switch
              checked={firstStart}
              onChange={startChange}
              inputProps={{ "aria-label": "controlled" }}
              color="primary"
            />
          }
          label="İlk sen mi başlamak istersin?"
          labelPlacement="start"
        />
      </Grid>
    </Container>
  );
};

export default TicTacToe;

import { Button, ButtonGroup, FormControlLabel, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
const Item = makeStyles({
  root: {
    backgroundColor: "#F0E68C",
    border: "1px solid",
    width: "33%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    borderRadius: "3px",
    height: "120px",
    fontSize: "50px",
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
    winner: "none",
  });
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    if (game.gameStarted === false) {
      setChecked(event.target.checked);
    }
  };
  const [firstStart, setFirstStart] = useState(true);
  const startChange = (event) => {
    if (game.gameStarted === false) {
      setFirstStart(event.target.checked);
    }
  };
  const [turn, setTurn] = useState(null);

  useEffect(() => {
    setTurn(firstStart);
  }, [firstStart]);

  const o = Object.fromEntries(
    Object.entries(game.board).filter(([_, v]) => v === null)
  );
  const atama = (id) => {
    if (!game.gameStarted || game.board[id]) return null;
    if (turn === true) {
      const value = checked ? "X" : "O";
      setGame((prevState) => ({
        ...prevState,
        board: {
          ...prevState.board,
          [id]: value,
        },
      }));
    }
    setTurn(false);
  };

  if (
    turn === false &&
    game.gameStarted === true &&
    Object.values(game.board).some((valu) => valu === null) === true
  ) {
    const l = Object.keys(o)[Math.floor(Math.random() * Object.keys(o).length)];

    const value = checked ? "O" : "X";
    setGame((prevState) => ({
      ...prevState,
      board: {
        ...prevState.board,
        [l]: value,
      },
    }));

    setTurn(true);
  }
  function gameEnded() {
    window.location.reload();
  }
  console.log(game.gameStarted);
  if (
    game.board["0,0"] === game.board["0,1"] &&
    game.board["0,0"] != null &&
    game.board["0,0"] === game.board["0,2"]
  ) {
    game.gameStarted = false;
    game.winner = game.board["0,0"] === "X" ? "X" : "O";
  } else if (
    game.board["1,0"] === game.board["1,1"] &&
    game.board["1,0"] != null &&
    game.board["1,0"] === game.board["1,2"]
  ) {
    game.gameStarted = false;
    game.winner = game.board["1,0"] === "X" ? "X" : "O";
  } else if (
    game.board["2,0"] === game.board["2,1"] &&
    game.board["2,0"] != null &&
    game.board["2,0"] === game.board["2,2"]
  ) {
    game.gameStarted = false;
    game.winner = game.board["2,0"] === "X" ? "X" : "O";
  }
  //columnda kazanma durumları
  else if (
    game.board["0,0"] === game.board["1,0"] &&
    game.board["0,0"] != null &&
    game.board["0,0"] === game.board["2,0"]
  ) {
    game.gameStarted = false;
    game.winner = game.board["0,0"] === "X" ? "X" : "O";
  } else if (
    game.board["0,1"] === game.board["1,1"] &&
    game.board["0,1"] != null &&
    game.board["0,1"] === game.board["2,1"]
  ) {
    game.gameStarted = false;
    game.winner = game.board["0,1"] === "X" ? "X" : "O";
  } else if (
    game.board["0,2"] === game.board["1,2"] &&
    game.board["0,2"] != null &&
    game.board["0,2"] === game.board["2,2"]
  ) {
    game.gameStarted = false;
    game.winner = game.board["0,2"] === "X" ? "X" : "O";
  }
  //çapraz kazanma durumları
  else if (
    game.board["0,0"] === game.board["1,1"] &&
    game.board["0,0"] != null &&
    game.board["0,0"] === game.board["2,2"]
  ) {
    game.gameStarted = false;
    game.winner = game.board["0,0"] === "X" ? "X" : "O";
  } else if (
    game.board["0,2"] === game.board["1,1"] &&
    game.board["0,2"] != null &&
    game.board["0,2"] === game.board["2,0"]
  ) {
    game.gameStarted = false;
    game.winner = game.board["0,2"] === "X" ? "X" : "O";
  }
  //BERABERLİK DURUMU
  else if (
    game.winner === "none" &&
    Object.values(game.board).some((valu) => valu === null) === false
  ) {
    game.gameStarted = false;
    game.winner = "BERABERLİK";
  }

  const classes = Item();
  return (
    <Container
      sx={{
        display: "grid",
        marginTop: "40px",
        width: "50%",
      }}
    >
      <Grid container sx={{ border: "2px" }}>
        {Object.keys(game.board).map((id) => (
          <Grid
            className={classes.root}
            id={id}
            key={id}
            onClick={() => atama(id)}
          >
            {game.board[id]}
          </Grid>
        ))}
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label={checked === true ? "X karakterisiniz." : "O karakterisiniz."}
          labelPlacement="start"
        />
      </Grid>
      <Grid container sx={{ justifyContent: "center" }}>
        <ButtonGroup>
          <Button
            sx={{
              backgroundColor: "#800000",
              color: "white",
              fontSize: "20px",

              "&:hover": {
                backgroundColor: "#CD5C5C",
              },
            }}
            onClick={(event) => setGame({ ...game, gameStarted: true })}
          >
            Start Game
          </Button>
          <Button
            sx={{
              backgroundColor: "#191970",
              color: "white",
              "&:hover": {
                backgroundColor: "#7B68EE",
              },
            }}
            onClick={() => gameEnded()}
          >
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
              color="primary"
            />
          }
          label={
            firstStart === true
              ? "İlk Siz Başlıyorsunuz."
              : "İlk Bilgisayar Başlıyor.."
          }
          labelPlacement="start"
        />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <h1>
          {(game.winner === "X" && checked === true) ||
          (game.winner === "O" && checked === false)
            ? "SEN KAZANDIN."
            : (game.winner === "X" && checked === false) ||
              (game.winner === "O" && checked === true)
            ? " BİLGİSAYAR KAZANDI"
            : game.winner === "BERABERLİK"
            ? "BERABERE BİTTİ."
            : "HENÜZ KAZANAN YOK..."}
        </h1>
      </Grid>
    </Container>
  );
};

export default TicTacToe;

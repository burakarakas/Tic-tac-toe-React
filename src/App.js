import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import TicTacToe from "./pages/TicTacToe";
function App() {
  return (
    <div className={"App"}>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Homepage} />
        <Route path={"/Tictactoe"} component={TicTacToe} />
      </Switch>
    </div>
  );
}

export default App;

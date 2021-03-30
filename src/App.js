import React, { Component } from "react";
import Game from "./chess/game/game.js";
import Signup from "./authentication/Signup";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Container
          className="d-flex align-items center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Signup />
          </div>
        </Container>
        <div id="boardsContainer">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;

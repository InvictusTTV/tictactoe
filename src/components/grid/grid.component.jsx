import React, { Component, Fragment as section } from "react";
import Box from "../box/box.component";
import "./grid.style.css";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 1,
      owner: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      winner: null,
    };
  }
  changeState = (index) => {
    let own = this.state.owner;
    own[index[0]][index[1]] = this.state.user;
    this.setState({ owner: own });
    this.state.user === 1
      ? this.setState({ user: 2 })
      : this.setState({ user: 1 });
    this.checkGameState();
  };
  checkGameState() {
    var wc1 = [0, 0, 0, 0];
    var wc2 = [0, 0, 0, 0];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (this.state.owner[i][j] === 1) {
          wc1[0] += 1;
          if (wc1[0] === 3) this.setState({ winner: 1 });
        }
        if (this.state.owner[j][i] === 1) {
          wc1[3] += 1;
          if (wc1[3] === 3) this.setState({ winner: 1 });
        } else if (j === 2) wc1[3] = 0;
        console.log("WC : " + wc1 + "\nindex[" + i + "][" + j + "]");
      }
      if (this.state.owner[i][i] === 1) {
        wc1[1] += 1;
        if (wc1[1] === 3) this.setState({ winner: 1 });
      }
      if (this.state.owner[i][2 - i] === 1) {
        wc1[2] += 1;
        if (wc1[2] === 3) this.setState({ winner: 1 });
      }
      wc1[0] = 0;
    }
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if (this.state.owner[i][j] === 2) {
          wc2[0] += 1;
          if (wc2[0] === 3) this.setState({ winner: 2 });
        }
        if (this.state.owner[j][i] === 2) {
          wc2[3] += 1;
          if (wc2[3] === 3) this.setState({ winner: 2 });
        } else if (j === 2) wc2[3] = 0;
        console.log("WC : " + wc2 + "\nindex[" + i + "][" + j + "]");
      }
      if (this.state.owner[i][i] === 2) {
        wc2[1] += 1;
        if (wc2[1] === 3) this.setState({ winner: 2 });
      }
      if (this.state.owner[i][2 - i] === 2) {
        wc2[2] += 1;
        if (wc2[2] === 3) this.setState({ winner: 2 });
      }
      wc2[0] = 0;
    }
  }
  render() {
    return (
      <>
        <h1>
          {this.state.winner !== null
            ? "Winner is player " + this.state.winner
            : "Tic Tac Toe"}
        </h1>
        <section className="container">
          {this.state.owner.map((row, i) =>
            row.map((col, j) => (
              <Box
                key={i + "" + j}
                changeState={this.changeState}
                user={this.state.user}
                index={[i, j]}
              />
            ))
          )}
        </section>
      </>
    );
  }
}

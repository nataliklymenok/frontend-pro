import { useState, Component } from "react";
import "./App.css";
import Emoji from "./components/Emoji";
import Results from "./components/Results";

class App extends Component {
  constructor(props) {
    super(props);

    const defaultItems = [
      {
        id: 1,
        emoji: "😀",
        votes: 0,
      },
      {
        id: 2,
        emoji: "😊",
        votes: 0,
      },
      {
        id: 3,
        emoji: "😎",
        votes: 0,
      },
      {
        id: 4,
        emoji: "🤩",
        votes: 0,
      },
      {
        id: 5,
        emoji: "😍",
        votes: 0,
      },
    ];

    const storedItems = JSON.parse(localStorage.getItem("items"));
    const storedWinner = JSON.parse(localStorage.getItem("winner"));

    this.state = {
      items: storedItems || defaultItems,
      winner: storedWinner || [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      localStorage.setItem("items", JSON.stringify(this.state.items));
    }
    if (prevState.winner !== this.state.winner) {
      localStorage.setItem("winner", JSON.stringify(this.state.winner));
    }
  }

  handleClickEmoji = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) =>
        item.id === id
          ? {
              ...item,
              votes: item.votes + 1,
            }
          : item,
      ),
    }));
  };

  handleClickResult = () => {
    const winner = this.state.items.reduce((max, item) =>
      item.votes > max.votes ? item : max,
    );

    this.setState({ winner: winner });
  };

  handleClickClear = () => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) => ({ ...item, votes: 0 })),
      winner: [],
    }));
  };
  render() {
    return (
      <>
        <div className="container">
          <h1>Голосування за найкращий смайлик</h1>

          <div className="emoji-list">
            {this.state.items.map((item) => {
              return (
                <Emoji
                  key={item.id}
                  emoji={item.emoji}
                  votes={item.votes}
                  onClick={() => this.handleClickEmoji(item.id)}
                />
              );
            })}
          </div>

          <div className="buttons">
            <button id="resultBtn" onClick={() => this.handleClickResult()}>
              Show Results
            </button>
            <button id="clearBtn" onClick={() => this.handleClickClear()}>
              Clear Results
            </button>
          </div>

          <Results winner={this.state.winner} />
        </div>
      </>
    );
  }
}

export default App;

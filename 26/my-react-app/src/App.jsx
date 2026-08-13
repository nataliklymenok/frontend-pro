import { useState, useEffect } from "react";
import "./App.css";
import Emoji from "./components/Emoji";
import Results from "./components/Results";

function App() {
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
  const [items, setItems] = useState(storedItems || defaultItems);
  const [winner, setWinner] = useState(storedWinner || []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("winner", JSON.stringify(winner));
  }, [items, winner]);

  const handleClickEmoji = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              votes: item.votes + 1,
            }
          : item,
      ),
    );
  };

  const handleClickResult = () => {
    const winner = items.reduce((max, item) =>
      item.votes > max.votes ? item : max,
    );

    setWinner(winner);
  };

  const handleClickClear = () => {
    setItems((prevItems) => prevItems.map((item) => ({ ...item, votes: 0 })));
    setWinner([]);
  };
  return (
    <>
      <div className="container">
        <h1>Голосування за найкращий смайлик</h1>

        <div className="emoji-list">
          {items.map((item) => {
            return (
              <Emoji
                key={item.id}
                emoji={item.emoji}
                votes={item.votes}
                onClick={() => handleClickEmoji(item.id)}
              />
            );
          })}
        </div>

        <div className="buttons">
          <button id="resultBtn" onClick={() => handleClickResult()}>
            Show Results
          </button>
          <button id="clearBtn" onClick={() => handleClickClear()}>
            Clear Results
          </button>
        </div>

        <Results winner={winner} />
      </div>
    </>
  );
}

export default App;

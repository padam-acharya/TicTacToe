import { useState } from "react";
import Square from "./Square";
export default function Board() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [count, setCount] = useState(0);

  let winner = "";
  let nextMove = "";
  let winnerobj = calculateWinner(value);
  function handleClick(index) {
    if (value[index] || calculateWinner(value).value) {
      return;
    }
    const nextSquares = [...value];

    nextMove = xIsNext ? "X" : "O";
    nextSquares[index] = nextMove;
    setValue(nextSquares);
    setXIsNext(!xIsNext);
    setCount(count + 1);
  }

  function handleReset() {
    setValue(Array(9).fill(null));
    setXIsNext(true);
    setCount(0);
  }

  winner = winnerobj.value;
  console.log(winnerobj.lines);
  return (
    <>
      <div className="display">
        {winner
          ? winner + " won"
          : count === 9
          ? "Draw"
          : xIsNext
          ? "X move"
          : "O move"}
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
      <div className="board-row">
        <Square
          value={value[0]}
          click={() => {
            handleClick(0);
          }}
        />
        <Square
          value={value[1]}
          click={() => {
            handleClick(1);
          }}
        />
        <Square
          value={value[2]}
          click={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={value[3]}
          click={() => {
            handleClick(3);
          }}
        />
        <Square
          value={value[4]}
          click={() => {
            handleClick(4);
          }}
        />
        <Square
          value={value[5]}
          click={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={value[6]}
          click={() => {
            handleClick(6);
          }}
        />
        <Square
          value={value[7]}
          click={() => {
            handleClick(7);
          }}
        />
        <Square
          value={value[8]}
          click={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
}

function calculateWinner(value) {
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winner.length; i++) {
    const [a, b, c] = winner[i];
    if (value[a] && value[a] === value[b] && value[a] === value[c]) {
      // return value[a];
      return { value: value[a] + "", lines: winner[i] };
    }
  }
  return { value: null };
}

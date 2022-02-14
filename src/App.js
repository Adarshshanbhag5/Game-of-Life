import { useCallback, useRef, useState } from "react";
import "./App.css";

const numRows = 40;
const numCols = 60;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};

const produce = (grid, callback) => {
  const newGrid = JSON.parse(JSON.stringify(grid));
  callback(newGrid);
  return newGrid;
};

function App() {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });
  console.log(grid);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((grid) => {
      return produce(grid, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = (i + x + numRows) % numRows;
              const newJ = (j + y + numCols) % numCols;
              // if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
              neighbors += grid[newI][newJ];
              // }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (grid[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(runSimulation, 50);
  }, []);

  return (
    <div className="App">
      <h1 className="head">Conway's Game of life</h1>
      <div className="game__container">
        <button
          className="btn play__btn"
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? `Stop` : `Play`}
        </button>
        <button
          className="btn clear__btn"
          onClick={() => {
            setGrid(generateEmptyGrid());
          }}
        >
          Clear
        </button>
        <button
          className="btn random__btn"
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
              );
            }
            setGrid(rows);
          }}
        >
          Random
        </button>
        <div
          style={{
            display: `grid`,
            justifyContent: `center`,
            gridTemplateColumns: `repeat(${numCols}, 20px)`,
          }}
        >
          {grid.map((rows, i) =>
            rows.map((cols, j) => (
              <div
                key={`${i}-${j}`}
                className="grid__cell"
                onClick={() => {
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[i][j] = grid[i][j] ? 0 : 1;
                  });
                  setGrid(newGrid);
                }}
                style={{ backgroundColor: grid[i][j] ? "black" : undefined }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

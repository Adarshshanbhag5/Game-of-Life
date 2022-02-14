# Conway's Game of Life

The **Game of Life**, also known simply as **Life**, is a [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton) devised by the British mathematician [John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway) in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

# Rules

The universe of the Game of [Life is an infinite, two-dimensional orthogonal grid of square](https://en.wikipedia.org/wiki/Square_tiling) cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). Every cell interacts with its eight [neighbours](https://en.wikipedia.org/wiki/Moore_neighborhood), which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

    * Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    * Any live cell with two or three live neighbours lives on to the next generation.
    * Any live cell with more than three live neighbours dies, as if by overpopulation.
    * Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

#### These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

    * Any live cell with two or three live neighbours survives.
    * Any dead cell with three live neighbours becomes a live cell.
    * All other live cells die in the next generation. Similarly, all other dead cells stay dead.

# WorkFlow

This game/app is made using [react](https://reactjs.org).

# Links

- Live site url:[https://quizzical-bhaskara-bd9175.netlify.app/](https://quizzical-bhaskara-bd9175.netlify.app/)

/**
 * Let's make a game 🕹
 */

type Direction = "up" | "down" | "left" | "right";

const position = { x: 0, y: 0 };
function move(move: Direction): Object {
  const moveType = {
    up: position.y + 1,
    down: position.y - 1,
    left: position.x - 1,
    right: position.x + 1,
  };
  return moveType[move];
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}

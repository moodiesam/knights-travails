function checkPosition(position, path) {
    if (position[0] < 0 ||
        position[0] > 7 ||
        position[1] < 0 ||
        position[1] >7 ) return null;
    return { position, path };
};

function knightMoves ([x, y], [a, b]) {
    if (x === a && y === b) return;

    let moveQueue = [checkPosition([x, y], [[x, y]])];
    let currentPosition = moveQueue.shift();

    

    while (currentPosition.position[0] !== a || currentPosition.position[1] !== b){
        let nextMoves = [
            [currentPosition.position[0] + 2, currentPosition.position[1] + 1],
            [currentPosition.position[0] + 1, currentPosition.position[1] + 2],
            [currentPosition.position[0] - 1, currentPosition.position[1] + 2],
            [currentPosition.position[0] - 2, currentPosition.position[1] + 1],
            [currentPosition.position[0] - 2, currentPosition.position[1] - 1],
            [currentPosition.position[0] - 1, currentPosition.position[1] - 2],
            [currentPosition.position[0] + 1, currentPosition.position[1] - 2],
            [currentPosition.position[0] + 2, currentPosition.position[1] - 1]
        ];

        nextMoves.forEach((move) => {
            move = checkPosition(move, currentPosition.path.concat([move]));
            if (move) moveQueue.push(move);
        });
        currentPosition = moveQueue.shift();
    };
    console.log(`You made it in ${currentPosition.path.length - 1} moves!`, 'The path was:')
    currentPosition.path.forEach((step) => {
        console.log(`${step[0]}, ${step[1]}`)
    });

    
};

knightMoves([0, 0], [7, 7]);

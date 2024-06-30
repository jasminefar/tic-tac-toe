const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = Array(9).fill(null);
let isGameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            isGameActive = false;
            alert(`${currentPlayer} wins!`);
            return;
        }
    }

    if (!board.includes(null)) {
        isGameActive = false;
        alert('It\'s a draw!');
    }
}

function handleCellClick(event) {
    const index = event.target.dataset.index;

    if (board[index] || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkWinner();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    isGameActive = true;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

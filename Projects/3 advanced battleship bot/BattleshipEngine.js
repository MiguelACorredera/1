// BattleshipEngine.js

/**
 * Game board symbols:
 * 'W' (Water): Unchecked cell
 * 'M' (Miss): Missed shot
 * 'H' (Hit): Hit a ship
 */

class Ship {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.hits = 0;
        this.isSunk = false;
        this.coords = []; // Array of {r, c} objects
    }
}

class BattleshipGame {
    constructor(boardSize = 10) {
        this.boardSize = boardSize;
        // Board is initialized to 'W' (Water)
        this.board = Array(boardSize).fill(0).map(() => Array(boardSize).fill('W'));
        this.ships = this.placeShips();
        this.shotsTaken = 0;
    }

    placeShips() {
        const shipTypes = [
            { name: "Carrier", size: 5 },
            { name: "Battleship", size: 4 },
            { name: "Cruiser", size: 3 },
            { name: "Submarine", size: 3 },
            { name: "Destroyer", size: 2 },
        ];

        const placedShips = [];
        // Helper to check if a cell is already part of a ship
        const isOccupied = (r, c) => this.board[r][c] !== 'W'; 

        for (const shipType of shipTypes) {
            let placed = false;
            while (!placed) {
                const isHorizontal = Math.random() > 0.5;
                const rStart = Math.floor(Math.random() * this.boardSize);
                const cStart = Math.floor(Math.random() * this.boardSize);

                let canPlace = true;
                const newShip = new Ship(shipType.name, shipType.size);
                const coords = [];

                for (let i = 0; i < shipType.size; i++) {
                    const r = isHorizontal ? rStart : rStart + i;
                    const c = isHorizontal ? cStart + i : cStart;

                    // Check bounds (0 to boardSize-1) and collision
                    if (r >= this.boardSize || c >= this.boardSize || r < 0 || c < 0 || isOccupied(r, c)) {
                        canPlace = false;
                        break;
                    }
                    coords.push({ r, c });
                }

                if (canPlace) {
                    newShip.coords = coords;
                    placedShips.push(newShip);
                    // Mark the board internally for collision check, e.g., using 'S'
                    coords.forEach(coord => this.board[coord.r][coord.c] = 'S'); 
                    placed = true;
                }
            }
        }
        
        // Reset the visible board to 'W' where ships were placed
        this.board = this.board.map(row => row.map(cell => cell === 'S' ? 'W' : cell));
        
        return placedShips;
    }

    shoot(r, c) {
        this.shotsTaken++;
        const cell = this.board[r][c];
        let status = { hit: false, miss: false, sunk: null, message: `Shot at R${r + 1}, C${String.fromCharCode(65 + c)}.` };

        if (cell === 'H' || cell === 'M') {
            status.message = `You already shot at this location! Try again.`;
            // Decrement shots taken since it was an invalid shot
            this.shotsTaken--; 
            return status;
        }

        let isHit = false;
        let hitShip = null;

        // Check if any ship occupies this coordinate
        for (const ship of this.ships) {
            // Check ship's internal coordinates array
            const hitCoordIndex = ship.coords.findIndex(coord => coord.r === r && coord.c === c);
            if (hitCoordIndex !== -1) {
                ship.hits++;
                isHit = true;
                hitShip = ship;
                break;
            }
        }

        if (isHit) {
            this.board[r][c] = 'H';
            status.hit = true;
            status.message = `**HIT!** Target destroyed at R${r + 1}, C${String.fromCharCode(65 + c)}.`;
            
            if (hitShip.hits === hitShip.size) {
                hitShip.isSunk = true;
                status.sunk = hitShip.name;
                status.message = `💥 **SUNK!** You destroyed the ${hitShip.name}!`;
            }
        } else {
            this.board[r][c] = 'M';
            status.miss = true;
            status.message = `**MISS.** Water at R${r + 1}, C${String.fromCharCode(65 + c)}.`;
        }

        return status;
    }

    isGameOver() {
        return this.ships.every(ship => ship.isSunk);
    }

    getBoard() {
        return this.board;
    }
}

module.exports = BattleshipGame;
// index.js

const Discord = require('discord.js');
const BattleshipGame = require('./BattleshipEngine');

// --- Configuration ---
const TOKEN = 'YOUR_BOT_TOKEN_HERE'; // !!! REPLACE ME !!!
const PREFIX = 'bb';
// Using v12/v13 structure for compatibility.
const client = new Discord.Client();

// Map to hold active game instances: Key: UserID, Value: BattleshipGame object
const activeGames = new Map();

// Emojis for the visual board (Bonus Feature 2)
const EMOJIS = {
    MISS: '⚪',     // Missed shot
    HIT: '🔴',      // Hit ship
    WATER: '🟦',    // Unchecked water
};

// --- Helper Functions ---

/**
 * Creates a Discord Embed for displaying the board graphically. (Bonus Feature 2)
 */
function createBoardEmbed(game, status) {
    const board = game.getBoard();
    let boardString = '';
    
    // Create column headers (A B C D...)
    const colHeaders = ' ' + [...'ABCDEFGHIJ'].join(' ');
    boardString += colHeaders + '\n';
    
    for (let r = 0; r < board.length; r++) {
        // Add row number (1-10)
        boardString += `${r + 1} `;
        for (let c = 0; c < board[r].length; c++) {
            const cell = board[r][c];
            if (cell === 'H') boardString += EMOJIS.HIT;
            else if (cell === 'M') boardString += EMOJIS.MISS;
            else boardString += EMOJIS.WATER;
            boardString += ' '; // Add space for better emoji layout
        }
        boardString += '\n';
    }

    let statusColor = status.hit ? '#FF0000' : (status.miss ? '#007BFF' : '#343A40');

    const embed = new Discord.MessageEmbed()
        .setTitle('⚓ Battleship Board ⚓')
        // Use the board as the main description
        .setDescription(boardString) 
        .addField('Shots Taken', game.shotsTaken.toString(), true)
        .addField('Last Action', status.message, true)
        .setColor(statusColor) 
        .setFooter(`Use "${PREFIX} shoot R,C" (e.g., 5,C) to fire.`);

    return embed;
}

/**
 * Sends a help message with rules and commands. (User Story 1)
 */
function sendHelpEmbed() {
    return new Discord.MessageEmbed()
        .setTitle('Battleship Bot Commands')
        .setDescription('Your goal is to sink all 5 opponent ships on a 10x10 grid by guessing their coordinates.')
        .setColor('#FFA500')
        .addField('Commands:', 
            `**\`${PREFIX} start\`**: Starts a new game and places ships.\n` +
            `**\`${PREFIX} shoot R,C\`**: Target a cell. R=Row (1-10), C=Column (A-J). Example: \`${PREFIX} shoot 5,C\`\n` +
            `**\`${PREFIX} help\`**: Displays this message.\n` +
            `**\`${PREFIX} surrender\`**: Ends your current game.`, // Bonus Feature 1
            false)
        .addField('Board Key:', 
            `${EMOJIS.WATER} = Water\n${EMOJIS.MISS} = Miss\n${EMOJIS.HIT} = Hit`, 
            false);
}


// --- Discord Event Listeners ---

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${PREFIX} help`, { type: 'PLAYING' });
});

client.on('message', message => {
    // Ignore messages from bots and non-command messages
    if (message.author.bot || !message.content.startsWith(PREFIX)) return;

    // Parse command: bb shoot 5,C -> command='shoot', args=['5,C']
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const userId = message.author.id;

    // --- Command Routing ---

    // 1. bb help (User Story 1)
    if (command === 'help') {
        message.channel.send(sendHelpEmbed());
        return;
    }

    // 2. bb start (User Story 2)
    if (command === 'start') {
        if (activeGames.has(userId)) {
            return message.reply(`You already have a game running! Use \`${PREFIX} surrender\` to quit the current one.`);
        }
        
        const newGame = new BattleshipGame();
        activeGames.set(userId, newGame);
        message.reply('Game started! 🚀 All 5 ships have been placed.');
        
        // Send initial board
        const initialStatus = { hit: false, miss: false, message: "Welcome to the game! Start firing." };
        message.channel.send(createBoardEmbed(newGame, initialStatus));
        return;
    }
    
    // 3. bb surrender (Bonus Feature 1)
    if (command === 'surrender') {
        if (activeGames.delete(userId)) {
            message.reply(`You surrendered. The game has been ended.`);
        } else {
            message.reply("You don't have an active game to surrender.");
        }
        return;
    }

    // --- Commands requiring an active game ---
    if (!activeGames.has(userId)) {
        return message.reply(`You need to start a game first! Use \`${PREFIX} start\`.`);
    }

    const game = activeGames.get(userId);

    // 4. bb shoot R,C (User Stories 3, 4, 5)
    if (command === 'shoot') {
        if (args.length === 0) {
            return message.reply('Please provide coordinates in the format R,C (e.g., 5,C).');
        }

        const [coordR, coordC] = args[0].split(',');
        const r = parseInt(coordR) - 1; // Row is 0-indexed internally (1-10)
        // Convert 'A' to 0, 'B' to 1, etc.
        const c = coordC ? coordC.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) : NaN; 

        if (isNaN(r) || r < 0 || r >= game.boardSize || isNaN(c) || c < 0 || c >= game.boardSize) {
            return message.reply('Invalid coordinates. Row must be 1-10, Column must be A-J.');
        }

        // Take the shot and get status
        const status = game.shoot(r, c);

        // Display board and status (User Story 4 & Bonus Feature 2)
        message.channel.send(createBoardEmbed(game, status));

        // Check for game over (User Story 5)
        if (game.isGameOver()) {
            message.reply(`🏆 **GAME OVER! CONGRATULATIONS!** You sunk all ships in ${game.shotsTaken} shots!`);
            activeGames.delete(userId);
        }
        return;
    }
    
    // Fallback for unrecognized commands
    message.reply(`Unrecognized command. Type \`${PREFIX} help\` for commands.`);
});

client.login(TOKEN);
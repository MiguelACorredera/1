# Poker Night

**Tier:** 3-Advanced

Multiplayer card games require careful state management, real-time
communication, and fair game logic running server-side. Poker Night is
a fully browser-based Texas Hold'em game supporting 2 to 8 concurrent
players with no database dependency — all game state lives in memory
and is synchronized via WebSockets.

This project challenges the developer to implement a complete poker hand
evaluator, a turn-based state machine, and a real-time multiplayer
experience from scratch.

## User Stories

* User can create a game room and share a room code with friends
* User can join an existing room using a room code
* User sees their own hole cards and the shared community cards on the table
* User can perform all standard poker actions: fold, check, call, raise
* User views a live list of all players, their chip counts, and current bet
* User is shown the winner and their hand rank at the end of each round
* Game enforces turn order and rejects out-of-turn actions
* Game supports 2 to 8 players in a single room

## Bonus features

* User can set a starting chip count and blind structure when creating a room
* Spectator mode allows users to watch a game without playing
* User sees an animated card deal and chip movement for each action
* Game handles disconnections gracefully by auto-folding the disconnected player
* User can view a hand history log for the current session
* Leaderboard tracks chip counts across multiple rounds in a session

## Useful links and resources

* [Texas Hold'em rules](https://www.pokerstars.com/poker/games/texas-holdem/)
* [Poker hand rankings](https://en.wikipedia.org/wiki/List_of_poker_hands)
* [Socket.IO documentation](https://socket.io/docs/v4/)
* [Building a card game state machine](https://statecharts.dev/)
* [Evaluating poker hands programmatically](https://medium.com/@geekgirl907/poker-hand-evaluator-54a00c8e3b3d)

## Example projects

* [Poker Night](https://github.com/nhsync/poker-night)

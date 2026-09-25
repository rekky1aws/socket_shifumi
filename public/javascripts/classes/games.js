module.exports = class Game {
  constructor (owner, name, type, nbMaxPlayers, players = []) {
    this.owner =  owner;
    this.name = name,
    this.type =  type;
    this.nbMaxPlayers = nbMaxPlayers;
    this.players = players;
    this.createdAt = new Date();
  }

  getAll() {
    console.table({
      owner: this.owner,
      name: this.name,
      type: this.type,
      nbMaxPlayers: this.nbMaxPlayers,
      players: this.players,
      createdAt: this.createdAt
    });
  }
};

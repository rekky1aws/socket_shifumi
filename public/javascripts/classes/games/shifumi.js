const Game = require('../game');

module.exports = class ShifumiGame extends Game {
    constructor(name, owner, players = []) {
        super.constructor((owner, name, "shifumi", 2, players));
    }
};
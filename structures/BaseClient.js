const Discord = require("discord.js");

const config = require("../config");

module.exports = class BaseClient extends Discord.Client {
  constructor() {
    super({
      intents: [new Discord.Intents(32767)],
    });

    this.commands = new Discord.Collection();

    this.login(config.token);
  }
};

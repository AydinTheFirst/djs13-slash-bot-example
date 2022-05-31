module.exports = class Event {
    constructor() {}
    async run(client) {
      console.log(`${client.user.username} is online!`);
      new deploySlashCommands(client);
    }
  };
  
const BaseClient = require("./structures/BaseClient");
const client = new BaseClient();
const fs = require("fs");

fs.readdirSync("./events").map((file) => {
  const Event = require(`./events/${file}`);
  const event = new Event();
  const eventName = file.split(".")[0];
  client.on(eventName, (...args) => event.run(client, ...args));
});

fs.readdirSync("./commands").map((supDir) => {
  fs.readdirSync(`./commands/${supDir}`).map((file) => {
    const Command = require(`./commands/${supDir}/${file}`);
    const command = new Command();
    client.commands.set(command.help.name, { data: command, run: command.run });
  });
});

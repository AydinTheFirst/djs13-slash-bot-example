const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const config = require("../config");

module.exports = class DeployCommands {
  constructor(client) {
    const rest = new REST({ version: "10" }).setToken(config.token);

    const commands = [];

    (async () => {
      for (const [name, command] of client.commands) {
        if (!command.data.config.enabled) continue;
        commands.push(command.data.help);
      }
      console.log(commands);
      try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(
          Routes.applicationGuildCommands(config.client_id, config.guild.id),
          {
            body: commands,
          }
        );

        console.log("Successfully reloaded application (/) commands.");
      } catch (error) {
        console.error(error);
      }
    })();
  }
};


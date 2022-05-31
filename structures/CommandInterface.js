module.exports = class CommandInterface {
  constructor({
    name = null,
    description = null,
    options = [],
    aliases = [],
    usage = null,
    category = null,
    botPermissions = [],
    memberPermissions = [],
    cooldown = null,
    enabled = true,
    ownerOnly = false,
    slashOnly = false,
    nsfw = false,
  }) {
    this.help = { name, description, options, aliases, usage, category };
    this.config = {
      cooldown,
      enabled,
      ownerOnly,
      slashOnly,
      nsfw,
      botPermissions,
      memberPermissions,
    };
  }
};

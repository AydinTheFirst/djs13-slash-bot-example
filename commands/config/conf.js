const CI = require("../../structures/CommandInterface");

module.exports = class Command extends CI {
    constructor() {
        super({
            name: "pong",
            description: "pong"
        })
    }
    async run(ctx, data, args) {
        ctx.reply("Pong!")
    }
}
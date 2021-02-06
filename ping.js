const Command = require('../util/Command.js');

class Ping extends Command {
  constructor(client) {
    super(client, {
      name: 'ping',
      description: 'Ova naredba dobit će ping klijenta',
      usage: 'ping',
      aliases: ['pong'],
      cooldown: 5,
      category: 'System'

    });
  }

  async run(message) { 
    const m = await message.channel.send('Pinging...');
    m.edit(`Ping: ${m.createdTimestamp - message.createdTimestamp}ms`);
  }
}

module.exports = Ping;

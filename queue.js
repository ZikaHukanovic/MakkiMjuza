const Command = require('../util/Command.js');

class Queue extends Command {
  constructor(client) {
    super(client, {
      name: 'queue',
      description: 'Ova komanda prikazuje sve pjesme u que.',
      extended: 'Ova naredba će prikazati sve pjesme u que, ako je que prevelik, učitat će que u hastebin, gdje bi osoba mogla vidjeti sve pjesme',
      usage: 'queue',
      cooldown: 5,
      category: 'Music'
    });
  }

  async run(message) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return this.client.embed('nisiuGlasovnomkanalu', message);
    if (!this.client.playlists.has(message.guild.id)) return this.client.embed('prazanQue', message);
    return this.client.embed('queueEmbed', message);
  } 
}


module.exports = Queue;

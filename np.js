/* eslint linebreak-style: 0 */
const Command = require('../util/Command.js');

class NP extends Command {
  constructor(client) {
    super(client, {
      name: 'ts',
      description: 'Ova naredba će prikazati trenutno reproduciranu pjesmu.',
      usage: 'np',
      aliases: ['nowplaying', 'current'],
      cooldown: 5,
      category: 'Music'
    });
  }

  async run(message) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return this.client.embed('nijeGlasovnikanal', message);
    if (!this.client.playlists.has(message.guild.id)) return this.client.embed('prazanQue', message);
    return this.client.embed('trenutmoSvira', message);
  }
} 

module.exports = NP;

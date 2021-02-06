const Command = require('../util/Command.js');

class Skip extends Command {
  constructor(client) {
    super(client, {
      name: 'skip',
      description: 'Ova komanda skipa trenutnu pjesmu.',
      usage: 'skip',
      aliases: ['next'],
      cooldown: 5,
      category: 'Music'
    });
  }

  async run(message) {
    if (message.settings.djonly && !message.member.roles.some(c => c.name.toLowerCase() === message.settings.djrole.toLowerCase())) return message.client.embed('notDJ', message);
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return this.client.embed('nijeGlasovnikanal', message);
    if (!this.client.playlists.has(message.guild.id)) return this.client.embed('prazanQue', message);
    const thisPlaylist = this.client.playlists.get(message.guild.id);
    thisPlaylist.loop = false;
    thisPlaylist.connection.dispatcher.end('skip');
    return this.client.embed('skipovano', message);
  }
}

module.exports = Skip;

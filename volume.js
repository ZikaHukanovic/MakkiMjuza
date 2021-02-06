/* eslint linebreak-style: 0 */
const Command = require('../util/Command.js');

class Volume extends Command {
  constructor(client) {
    super(client, {
      name: 'zvuk',
      description: 'Ova će naredba postaviti glasnoću pjesama.'

￼




      usage: 'zvuk [number]',
      cooldown: 5,
      category: 'Music'
    });
  }

  async run(message, args) {
    if (message.settings.djonly && !message.member.roles.some(c => c.name.toLowerCase() === message.settings.djrole.toLowerCase())) return message.client.embed('notDJ', message);
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return this.client.embed('nisiuGlasovnompozivu', message);
    if (!this.client.playlists.has(message.guild.id)) return this.client.embed('prazanQue', message);
    if (!args[0]) return this.client.embed('trenutnaGlasnoća', message);
    if (Number(args[0]) < 0 || Number(args[0]) > 100) return this.client.embed('greškaGlasnoće', message);
    message.guild.voiceConnection.volume = Number(args[0]) / 100;
    this.client.playlists.get(message.guild.id).volume = Number(args[0]);
    this.client.playlists.get(message.guild.id).connection.dispatcher.setVolumeLogarithmic(Number(args[0]) / 100);
    return this.client.embed('zvukSetan', message, args);
  }
}

module.exports = Volume;

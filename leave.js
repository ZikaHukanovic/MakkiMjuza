/* eslint linebreak-style: 0 */
const Command = require('../util/Command.js');

class Leave extends Command {
  constructor(client) {
    super(client, {
      name: 'napusti',
      description: 'Ova će naredba prisiliti bota da napusti vaš trenutni poziv',
      usage: 'napusti',
      aliases: ['unsummon'],
      cooldown: 5,
      category: 'Music'
    });
  }

  async run(message) { 
    if (message.settings.djonly && !message.member.roles.some(c => c.name.toLowerCase() === message.settings.djrole.toLowerCase())) return message.client.embed('notDJ', message);
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return this.client.embed('nijeGlasovnikanal', message);
    const permissions = voiceChannel.permissionsFor(message.guild.me).toArray();
    if (!permissions.includes('CONNECT')) return this.client.embed('noPerms-CONNECT', message);
    if (!permissions.includes('SPEAK')) return this.client.embed('noPerms-SPEAK', message);
    voiceChannel.leave();
    this.client.embed('unsummoned', message);
  }
}

module.exports = Leave;

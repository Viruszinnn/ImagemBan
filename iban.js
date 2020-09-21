const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')

exports.run = async (client, message, argumentos) => {
    let usuario = message.mentions.members.first() || message.guild.members.get(argumentos[1])
  
if(!(argumentos.length > 1))
    return message.reply('[Bot] digite corretamente exemplo: siban link da imagem')

fs.writeFileSync(`./database/ban/${message.author.id}.txt`, `${argumentos[1]}`);
message.reply('[Bot] Sua imagem foi setada com sucesso');

}
exports.help = {
    name: "iban"
}
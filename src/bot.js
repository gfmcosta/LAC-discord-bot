require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log(`${client.user.tag} has logged in.`));

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '!verify' && message.channel.id === '827931623596490782')
    {

        const role = message.guild.roles.cache.get('827945071739535380');
        if(role) {
            console.log("Entrou");
            try{
                
                await message.member.roles.add(role);
                console.log("Role added!");
                await message.delete();
            }
            catch (err){
                console.log(err);
            }
            
        }
    }

    
    
});

client.on('guildMemberAdd', member => {
    console.log(member.user.tag);

});
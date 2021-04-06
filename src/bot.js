require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();
client.login(process.env.BOT_TOKEN);
const prefix = ("!")

client.on('ready', () => console.log(`${client.user.tag} has logged in.`));

client.on('message', async message => {

    // if it is a bot message, doesn't do nothing. '

    if(message.author.bot) return;
    
    // check if user is on correct channel

    if(message.channel.id === '827931623596490782')
    {
        // check if user says !verify in correct channel

        if(message.content.toLowerCase() === prefix + 'verify'){

            const role = message.guild.roles.cache.get('827945071739535380');

            if(role) {
                try{    
                    await message.member.roles.add(role);
                    console.log("Role added to: " + message.member);
                    await message.delete();
                }
                catch (err){
                    console.log(err);
                }
                
            }

        }else{

            // Delete wrong message.

            console.log(message.member + " said: " + " '" + message.content + "' " + " on verify chat");
            await message.delete();
            
        }
        
    }else{

        // Just can say !verify on correct channel

        if(message.content.toLowerCase() === prefix + 'verify'){

            console.log("Wrong Channel")
            await message.delete();
            
        }   

        if(message.author.id === '490296006810796044' || message.author.id === '284765275507785728'){

            if (!message.content.startsWith(prefix) || message.author.bot) return;

            
            const args = message.content.slice(prefix.length).trim().split(' ');
            const command = args.shift().toLowerCase();

            if (command === 'communicate') {

                await message.delete();

                
                

                message.guild.channels.forEach(channel => {message.channel.send("```Owner says: " + args + " ```")})

                if (!args.length) {
                    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
                }
            
            
               
            
            }


        }

    }
    
    
});

client.on('guildMemberAdd', member => {
    console.log(member.user.tag);

});
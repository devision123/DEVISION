const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "=";
const commande = new Discord.Client();
const math = require('math-expression-evaluator');
const fs = require('fs')
const monnaie = require('./monnaie.json');
const DiscordAntiSpam = require("discord-anti-spam");
var dernierAppel = new Array(); 
bot.commands = new Discord.Collection();



fs.readdir("./commandes/", (err, files) => {
  if(err) console.log(err);
  console.log(`${files.length} commandes`);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Commande non trouver.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commandes/${f}`);
    bot.commands.set(props.help.name, props);
  });
});

const config = require('./config.json');

bot.on('ready', function() {
  console.log(`Nombre de users: ${bot.users.size} `);
	console.log(`ID : ${bot.user.id}`);
  console.log("Connecté");
  console.log("--------------------------------------")
	console.log("          Made By DEVISION          ")
	console.log("--------------------------------------")
   bot.user.setActivity(`${bot.guilds.size} serveur || =help`, {type: "STREAMING"})
  })

  bot.login(config.token) //Token

  bot.on(`message`, async message => {

    bot.emit('checkMessage', message);

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let Args = messageArray.slice(1);
    var args = message.content.substring(prefix.length).split(" ");

if(message.content.startsWith(prefix)){
    let commandFile = bot.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(bot,message,Args,args)
}
})

///////////////////////////////////////////////////////////////////
const AntiSpam = new DiscordAntiSpam({
warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
banThreshold: 7, // Amount of messages sent in a row that will cause a ban
maxInterval: 2000, // Amount of time (in ms) in which messages are cosidered spam.
warnMessage: "{@user}, le spam et interdi sur se serveur donc tu et warn.", // Message will be sent in chat upon warning.
banMessage: "**{user_tag}** a ete ban pour spam alors que je les prevenu.", // Message will be sent in chat upon banning.
maxDuplicatesWarning: 7, // Amount of same messages sent that will be considered as duplicates that will cause a warning.
maxDuplicatesBan: 15, // Amount of same messages sent that will be considered as duplicates that will cause a ban.
deleteMessagesAfterBanForPastDays: 1, // Amount of days in which old messages will be deleted. (1-7)
exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"], // Bypass users with at least one of these permissions
ignoreBots: true, // Ignore bot messages
verbose: false, // Extended Logs from module
ignoredUsers: [], // Array of string user IDs that are ignored
ignoredRoles: [], // Array of string role IDs or role name that are ignored
ignoredGuilds: [], // Array of string Guild IDs that are ignored
ignoredChannels: [] // Array of string channels IDs that are ignored
});

AntiSpam.on("warnEmit", (member) => console.log(`Attempt to warn ${member.user.tag}.`));
AntiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} a ete warn.`));
AntiSpam.on("kickEmit", (member) => console.log(`Attempt to kick ${member.user.tag}.`));
AntiSpam.on("kickAdd", (member) => console.log(`${member.user.tag} a ete kick.`));
AntiSpam.on("banEmit", (member) => console.log(`Attempt to ban ${member.user.tag}.`));
AntiSpam.on("banAdd", (member) => console.log(`${member.user.tag} a ete ban.`));
AntiSpam.on("dataReset", () => console.log("Module cache has been cleared."));

bot.on("ready", () => console.log(`Logged in as ${bot.user.tag}.`));

bot.on("message", (msg) => {
AntiSpam.message(msg);
});
////////////////////////SYSTEME MONNAIE
bot.on('message', async message => {
if (!monnaie[message.author.id]) {
  monnaie[message.author.id] = {
    monnaie: 0
  };
}

let baseMonnaie = Math.floor(Math.random() * 5) + 100;
let ajoutMonnaie = Math.floor(Math.random() * 3) + 100;

if (ajoutMonnaie === baseMonnaie) {
  monnaie[message.author.id] = {
    monnaie: monnaie[message.author.id].monnaie + ajoutMonnaie
  };
}

fs.writeFile('.monnaie.json', JSON.stringify(monnaie), err => {
  if(err) console.log(err);
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////


)
  var servers = bot.guilds.array().map(g => g.name).join(',');
  var memberCount = bot.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
  var servercount = bot.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
  var channel = bot.channels.size;//Permet de savoir sur combien de channel se trouve le bot
              bot.on('message',message => {
    const msg = message.content;	
    if (msg === "=star" &&message.guild) { //effectuer son prefix de la commande
    message.delete(0);     
    var memberCount = bot.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
    var servercount = bot.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
    var channel = bot.channels.size;//Permet de savoir sur combien de channel se trouve le bot
    let m = " ";
    m += 'je suis en compagnie de '+ memberCount +' membres \n';
    m += 'je suis présent dans '+ servercount+' serveurs \n';
    m += 'je suis sur '+ channel+' canaux \n';
    message.author.send(m).catch(console.log)
    message.reply("La commande star vous a été envoyé en privé :100: ")
    }
    var date = new Date();
if (msg.startsWith("quelle heure et t'il")||msg.startsWith ( "donne l'heure" )|| msg.startsWith ( "heure" )|| msg.startsWith ( "ta lheure" )|| msg.startsWith ( "quel heure il et ?")){
message.delete(0);//efface la commande
return message.channel.send(`On est le ${date.toString()}`)
}
const discord = new Discord.RichEmbed ()
var log_embed = new Discord.RichEmbed()
    bot.on('message', message => { 
    //Les mots interdits :   
    let blacklisted = ['fdp', 'ntm', 'connard', 'pute', 'putain', 'ta gueule', 'nique', 'salope', 'PD', 'batard', 'putin', 'enfoiré', 'connare', 'fils de pute', 'bâtard', 'conasse', 'débile', 'ducon', 'enculé', 'imbécile', 'nike ta mere la pute', 'blc', 'triso', 'autist', 'malade mantale', 'tg', 'TG', 'ta geule', 'FDP' ];
    //Il va chercher les mots
    let foundInText = false;
    for (var i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) { //Contenu du message du bot qui supprime et envoie au salon nommer "logs" le message contenant l'insulte
    message.delete()
  }
})
              })
            })
            const discord = new Discord.RichEmbed ()
            var log_embed = new Discord.RichEmbed()
                bot.on('message', message => { 
                  if(message.channel.name ==="pub", "『📍』pub", "pub-🧾 ") return;
                //Les mots interdits :   
                let blacklisted = ['https://','discord.gg','http','www','.fr','.com' ];
                //Il va chercher les mots
                let foundInText = false;
                for (var i in blacklisted) {
                if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
                }
                if (foundInText) { //Contenu du message du bot qui supprime et envoie au salon nommer "logs" le message contenant l'insulte
                message.delete()
              }
            
            })
            var log_embed = new Discord.RichEmbed()
                bot.on('message', message => { 
                  if(message.channel.name ==="『📍』pub") return;
                //Les mots interdits :   
                let blacklisted = ['https://','discord.gg','http','www','.fr','.com' ];
                //Il va chercher les mots
                let foundInText = false;
                for (var i in blacklisted) {
                if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
                }
                if (foundInText) { //Contenu du message du bot qui supprime et envoie au salon nommer "logs" le message contenant l'insulte
                message.delete()
              }
            
            })
            bot.on('message', msg => {"est co"
            console.log 
              if (msg.content.startsWith(prefix + "mp")) {
                if (msg.deletable) msg.delete();
                if (msg.channel.type === "dm") return;
                let args = msg.content.split(" ").slice(1).join(" ");
                if (!args) return msg.channel.send("https://discord.gg/mttSmM");
                msg.guild.members.forEach(member => {
                  member.send(args).catch(e => {});
                  member.addRole('600404352817037453')
            
                  });
                }
            });

const config = require('../settings')
const os = require('os')
const fs = require('fs')
const prefix = config.PREFIX
const pingSt = new Date();
const { cmd, commands } = require('../lib/command')
const devlopernumber = "94788770020"
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson,clockString, jsonformat} = require('../lib/functions')
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get, updb,updfb } = require("../lib/database")


 function genMsgId() {
  const prefix = "3EB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = prefix;

  for (let i = prefix.length; i < 22; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
} 

const reportedMessages = {}
//const isBan = banUser.includes(mek.sender)
	    


	
var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"
//============================================================================


const commandConfig = {
  pattern: "ping",
  react: '📟',
  alias: ["SENU", "ping"],
  desc: "To Check bot's ping",
  category: "main",
  use: ".ping",
  filename: __filename
};

cmd(commandConfig, async (bot, message, args, { from,l,quoted,body,isCmd,command,argsArray,query,isGroup,sender,senderNumber,botNumber2,botNumber,pushname,isMe,isOwner,groupMetadata,groupName,participants,groupAdmins,isBotAdmins,isAdmins,
  reply
}) => {
  try {
    var startTime = new Date().getTime();
    
    const initialMessage = { text: "*_Pinging to SENU Module..._* ❗" };
    let sentMessage = await bot.sendMessage(from, initialMessage);
    
    var endTime = new Date().getTime();
    
    const loadingStages = [
      "◍○○○○",
      "◍◍○○○",
      "◍◍◍○○",
      "◍◍◍◍○",
      "◍◍◍◍◍"
    ];
    
    for (let stage of loadingStages) {
      await bot.sendMessage(from, { text: stage, edit: sentMessage.key });
    }
    
    return await bot.sendMessage(from, {
      text: "📍️ *Pong " + (endTime - startTime) + " Ms* ",
      edit: sentMessage.key
    });

  } catch (error) {
    reply("*Error !!*");
    l(error);
  }
});


cmd({
    pattern: "alive",
    react: "👨‍💻",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
 const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'SENU-MD SPEED'},

	]
    } 
]
const listMessage = {
  caption: `${monspace}👋 කොහොමද  ${pushname} Senu md alive now${monspace}
    
*🚀Version:* ${require("../package.json").version}
*⌛Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*🕒Runtime:* ${runtime(process.uptime())}
*📍Platform:* ${hostname}

🐼This is the result of our teams hard work and our meta exploiters team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot
                    
*🌻Have A Nice Day..*🌻`,
     image: { url: `https://files.catbox.moe/3y5w8z.jpg` },
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 S E N U - M D 👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: config.IMAGE,
      sourceUrl: 'https://wa.me/94788770020',
      mediaType: 1,
      renderLargerThumbnail: true
         }}	
}


return await conn.replyList(from, listMessage ,{ quoted : mek }) 
}
else {
  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'SENU-MD SPEED'} ,

	]
    } 
]
const listMessage = {
  caption: config.ALIVE,
  image : { url : config.LOGO} ,
  footer: config.FOOTER,
  buttonText: "🔢 Reply below number,",
  sections,
  contextInfo: {
				
				externalAdReply: { 
					title: '👨‍💻 S E N U - M D👨‍💻',
					body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
					mediaType: 1,
					sourceUrl: "" ,
          thumbnailUrl: 'https://files.catbox.moe/3y5w8z.jpg' ,
					renderLargerThumbnail: false,
          showAdAttribution: true
         }}	
}

return await conn.replyList(from, listMessage ,{ quoted : mek })
}
} catch (e) {
reply('*Error !!*')
l(e)
}
})


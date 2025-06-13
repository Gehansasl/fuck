const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'hb1VEIKJ#yH4Xnnq_3FjymuzJkUrU2BCjcxkg2KBiV7aWs4-8CBM',
OWNER_NUMBER: process.env.OWNER_NUMBER || "94788770020",
WORK_TYPE: process.env.WORK_TYPE || "public",
ALIVE: process.env.ALIVE || `default`,
OWNER_NAME: process.env.OWNER_NAME || 'JESTER' ,     
JID: process.env.JID || "120363388320701164@newsletter",
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
PREFIX:  process.env.PREFIX || ['.'] ,
FOOTER: '> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴇɴᴜ-ᴍᴅ*',
DIRECTION: true,
IMAGE: process.env.IMAGE || `https://i.ibb.co/bjPrbF84/3174.jpg`,
LOGO: process.env.LOGO || `https://i.ibb.co/bjPrbF84/3174.jpg`     
};

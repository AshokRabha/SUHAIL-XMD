const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919387196256";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_46_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxLFxuICAgICAgICA4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU2LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkQwakRMaEtYWGQ2bEJYZ0JwcVBaRnhCOTRwOGZtaTlEdElOUGk3MUdLakk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9hX08zMDh4UlAycmpCb1lMdUZqM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTFmZjBiMGEtNDQ4Mi00YTE4LWFiMDItMDhmZDNiOTc3ZmYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMTgzLFxuICAgICAgNDQsXG4gICAgICAyMzcsXG4gICAgICAxNTEsXG4gICAgICA2MSxcbiAgICAgIDEwNyxcbiAgICAgIDIxNCxcbiAgICAgIDI0OCxcbiAgICAgIDE5OCxcbiAgICAgIDEzNSxcbiAgICAgIDk4LFxuICAgICAgMTE5LFxuICAgICAgODMsXG4gICAgICA4NSxcbiAgICAgIDE1MixcbiAgICAgIDIxMixcbiAgICAgIDE3NixcbiAgICAgIDIyNyxcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDIxNSxcbiAgICAgIDc4LFxuICAgICAgMjI5LFxuICAgICAgNixcbiAgICAgIDIwNyxcbiAgICAgIDk1LFxuICAgICAgMTE2LFxuICAgICAgMjE5LFxuICAgICAgMTQ3LFxuICAgICAgMTgzLFxuICAgICAgMTU2LFxuICAgICAgMjI4LFxuICAgICAgMTc4LFxuICAgICAgMTA4LFxuICAgICAgMTAxLFxuICAgICAgMzEsXG4gICAgICA3NSxcbiAgICAgIDIyMSxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE0MkFWWERUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkzODcxOTYyNTY6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLkuYIg8J2QkyDwnZCOIPCdkJcg8J2QiCDwnZCCIOKAouKAouKAollUIOKAouKAouKAouGPnuG0h+OFpHjjhaThj57htI/KgOG0heS5glxcblxcblxcbvCWo5BcXG5cXG5cXG7wlqOQXFxuXFxuXFxu8JajkFxcblxcblxcbvCWo5BcXG5cXG5cXG7wlqOQXFxuXFxuXFxu8JajkFxcblxcblxcbvCWo5BcXG5cXG5cXG7wlqOQXFxuXFxuXFxu5LmCIPCdkJMg8J2QjiDwnZCXIPCdkIhcIixcbiAgICBcImxpZFwiOiBcIjgwNzQ1NDE4NzMxNjgwOjgyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPMndIY1E5NFhKdVFZWUNpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYkNNcjhXd3BEMjM3S3p3Ynh2L3Q1ZmRYVG42ZER4NmlwaFRCc3liRnUwRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1dXFXdXJ0dkM4c0s3eURNZEFyNG9RODNtQXg1YTY5ZGpmemhYWVlYUHU2WXZoSTdRZFR1ZUpJU1B5SXM1enU4ck5saFdGakJoY3gwUU1PM1dzcGNCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRenNSa25rT2pQOHJFSEpkUmRtQWRBdVZnMzhGTy9KdGd4YXFtZkxKQXROZTZJdk5Qb0Q0ekJrbm1wN1VWYWIwZGVEZFhCTGFnL0E5bUw2MHAzeU5oUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkzODcxOTYyNTY6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzQ3MTk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkdKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCR0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDM3lzNDVYZFZiajkzelpZaWFTUDk1aVZuYjBnMU4veGlTenRFcU9oZ3pjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MDYxNjU5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

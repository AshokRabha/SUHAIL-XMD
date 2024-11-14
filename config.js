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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_17_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM1o3Vy8vVnd3ZmhLQjVPVkZtTkdUQm1kTkkwdWZITjNWMWxaUXVtMFV3ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekwzUkZZLU9SUjJLLTJZb2JoNEVsd1wiLFxuICBcInBob25lSWRcIjogXCI1ODMzMjA0OS01OWRlLTRmNDEtOWRhZS00Mjk0NWY0MzA0Y2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgODIsXG4gICAgICAxNTksXG4gICAgICA4OSxcbiAgICAgIDE2MixcbiAgICAgIDE1MyxcbiAgICAgIDE5NCxcbiAgICAgIDE0NCxcbiAgICAgIDEzNCxcbiAgICAgIDE4LFxuICAgICAgMjQzLFxuICAgICAgMTQ2LFxuICAgICAgMTY0LFxuICAgICAgMTU4LFxuICAgICAgNzIsXG4gICAgICAxNzEsXG4gICAgICA2MixcbiAgICAgIDIzMyxcbiAgICAgIDE2MixcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDE0OSxcbiAgICAgIDI0MCxcbiAgICAgIDEyNSxcbiAgICAgIDE4LFxuICAgICAgMTgyLFxuICAgICAgOTIsXG4gICAgICAzMSxcbiAgICAgIDgzLFxuICAgICAgMTQxLFxuICAgICAgMTc5LFxuICAgICAgNTMsXG4gICAgICA3OSxcbiAgICAgIDIzMCxcbiAgICAgIDQ0LFxuICAgICAgMTUzLFxuICAgICAgMjEwLFxuICAgICAgNTUsXG4gICAgICAxMCxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKQVFQNU04M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5Mzg3MTk2MjU2Ojk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5LmCIPCdkJMg8J2QjiDwnZCXIPCdkIgg8J2QgiDigKLigKLigKJZVCDigKLigKLigKLhj57htIfjhaR444Wk4Y+e4bSPyoDhtIXkuYJcXG5cXG5cXG7wlqOQXFxuXFxuXFxu8JajkFxcblxcblxcbvCWo5BcXG5cXG5cXG7wlqOQXFxuXFxuXFxu8JajkFxcblxcblxcbvCWo5BcXG5cXG5cXG7wlqOQXFxuXFxuXFxu8JajkFxcblxcblxcbuS5giDwnZCTIPCdkI4g8J2QlyDwnZCIXCIsXG4gICAgXCJsaWRcIjogXCI4MDc0NTQxODczMTY4MDo5NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKVzJ3SGNRNlluYXVRWVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJDTXI4V3dwRDIzN0t6d2J4di90NWZkWFRuNmREeDZpcGhUQnN5YkZ1MEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid2RQaTRWL240S1J0SUtUVkU1RTY3NEtaOC8zVTAzdENWbklOZElYSjlpK1JFMEJIQ1RBeTl3WUY0VWtqSlRqVkFmbXNHeEN3enJtcnVWSW1FaENIREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUVJZSHNHMEIrenZ3aStYeWN3WjU1MFNxY0NkRFg3amM4ZWFVelhKR1RGdUMvbUtLaWlLQms5bk51eGVkZ1FuSTdLc0d5dWhlK3dBcFZnUWdkeThuamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5Mzg3MTk2MjU2Ojk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTYyNjIyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNXaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1doLmpzb24iOiAie1wia2V5RGF0YVwiOlwia2Y5SElRSkVYa3RLODFCY0JqSVl0QnR5UEd1ejJGZWIyd2MrcXYwOWdGYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTA2MTY1OTYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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

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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_10_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU3LFxuICAgICAgICA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzLFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk4yR2RoYnBva1NweHh3ZVI0OWN0MlVOUWc3cHIvVVQzaEd2SS9MdzFkRUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDAxOTA5NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBDRTQ0QzRGRDkxMENBN0Y1MDY1QkM0ODQxMUY2OURBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjYzMzg0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVMGJSUk9zTlN0Mk5uUDdPX1AzdTh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjEzZjI1OWZiLWNiYWQtNDVkYy04Zjg0LWFjZDI1Yzk0ZGJmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDIxMCxcbiAgICAgIDIwOSxcbiAgICAgIDE1OSxcbiAgICAgIDI0LFxuICAgICAgMjE3LFxuICAgICAgODYsXG4gICAgICA1OSxcbiAgICAgIDIyNSxcbiAgICAgIDIzNyxcbiAgICAgIDE1OSxcbiAgICAgIDQ0LFxuICAgICAgOTksXG4gICAgICA1NixcbiAgICAgIDIxLFxuICAgICAgMTM5LFxuICAgICAgMjAzLFxuICAgICAgNDEsXG4gICAgICA1OSxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAxNyxcbiAgICAgIDksXG4gICAgICAxMTcsXG4gICAgICAxMzAsXG4gICAgICAxNzksXG4gICAgICAxMzksXG4gICAgICAxNzIsXG4gICAgICAyMTMsXG4gICAgICAyNCxcbiAgICAgIDI1MCxcbiAgICAgIDIxNixcbiAgICAgIDE5MCxcbiAgICAgIDI1LFxuICAgICAgMjI1LFxuICAgICAgMjgsXG4gICAgICAxNTIsXG4gICAgICAyMDgsXG4gICAgICAxMTYsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDNMUEgzM05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQwMTkwOTU1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXRC5JbWVzaCBDaGFtaWthXCIsXG4gICAgXCJsaWRcIjogXCIxMjM3OTM4NDI0MTM1OTk6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRHFpZFFIRU9qSmw3b0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJsdVJDNllVUVF5WXBocjYvUnM4YzNNTTdoT2hSTVRKYVE2b3lHQmdIVWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUYxT3U3V1pBVllTdEVjMW9lQmxsNVZnc0F6ZVBjcGFYaHNYa0hxVCtJVlRxUmROTkM5MFlmRTc4SjlORXlTRlJNSE8xWUpnTUFPTFBUSG1TWG1DRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUWNSZHlKUHpsc2RBck9SQkVCbXhBY3EydFlBM1RUVm05UW5pSkdQZjNLdHpNa3hOQnA2TmhxZDFLczRxbGh2cUFRV2VLSnJRU2hYQ3BSbzZsSk9EaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDAxOTA5NTU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNjMzODM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSndXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKd1cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWOU9yZUFWcGc2cE44VFdBNWptWFBkVmlOT1R4VHVObHE0YlpLQzgvVmRFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNTUzNzAwOTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjUzMjI2NjU2NFwifSIKfQ=="  // PUT your SESSION_ID 


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

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'Adams-2024;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpSSExEUFFwbCtpTjE1S3NkY3NJYTEzM2MxTXUvbW5kNzYzWm1JaXVFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTZWQkttdlJJam9nYUthWHY1Vml2c3M4cUxOVzExb1hIRGRHcW9tZktSZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1R2JiQlh3Q203RjlVZ29oMUJ2dnU5dFNlOVlPcG9kaERZcklDekVxM0hBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTnorcUhIMlNsOXZENDFaMUt2VTNDYTZxV3Y4VHByc20wRmROMFM1UTBzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBNEJzZVN3eVFuMllnWnJ5c2NrdjRlRzV0NXNQMjFlaGpibUhNZkxwVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFLOTFIcW9DaUNzSEE4alNOT3p1NkFsc293TGlSSUliZkFOdU0xZW5MQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJidW1EaEY3WTVseHJOajRPZ01YamhBREJ2Vk1OT0FXdFdKQy9uK3pXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2w0Kzc3SWJGaGtNZkV4dDNGOEdwY1lnMXdmWDk1TytobHhxMU1NYjVpdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkzWnBVWmxjZkxnaTZRcVJYemJFOUxIekI1TzYrTmpESitUYkN6UVViQW1MMU5JV25mZ09rVXhwS1NCczRpbnF1OWhZRnhXdGVWMVZQQTZXQnpBNGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJCcmxTaWRjNWFjcmxZbEtuaUhJY2xhcDhCNTZab1lPYlJmWGxCazdCM0ZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOellLaDgzOVR5aTFsZVgwNndEeUdRIiwicGhvbmVJZCI6ImM1MGJiN2I1LWFkZTQtNGQ2OC05N2VkLTI3MzliZDM5NjRlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaNWxlZjlUdUxKU2cvYkY5VXdXSVNSeU9uUjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFByd1U5c1V5S3hzeElJWHRibDlaeXhMbFUwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE0OTI5MzVGIiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODo3M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLKnyAv8J2SllxuICDhtI8gL/CdkptcbiAgICDhtJwvIPCdkpZcbiAgICAgIOG0iy8g8J2SjlxuICAgICAgICBzLyDwnZKCXG4gICAgICAgICAg4bSPIC/wnZKMXG4gICAgICAgICAgICDJtC/wnZKKIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbnQrYU1GRU9lMDI3Z0dHRWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZanNISExkRUQ1T2Npc0l4TzU2b0NTUGxyMHdsclBTMjNrZ2tIaTdLbTBFPSIsImFjY291bnRTaWduYXR1cmUiOiJBZmZ6ZW1INWRGdEl2RGorT0txdkgxcHhkU24ycjJWMlA2elBHQndVTUNYRklRYWJwbzB3NFcyZjFzT2xJMEVPT29pUStXakdwOWs3cGZEM0J1ZXhCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUVFEZHYyZzVvZUdqaUg4NVRHazArdmNYMWlWc0lOem5OV2krNFNsdXNBbzZNbngyTXNvR3pXMjhteGtOMFJQMWlodE1zT2QrZ1VnOHlDZE56dFQzaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjUwMjMzMTk4ODo3M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXSTdCeHkzUkErVG5JckNNVHVlcUFrajVhOU1KYXowdHQ1SUpCNHV5cHRCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NTUwOTY1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhvSyJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ʟ /𝒖
   ᴏ /𝒛
     ᴜ/ 𝒖
       ᴋ/ 𝒎
         s/ 𝒂
           ᴏ /𝒌
              ɴ/𝒊",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 22502331988",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'NARUTO_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://iili.io/dmKqfTP.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

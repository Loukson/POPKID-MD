const _0x599875=_0x45e9;function _0x45e9(_0x613c48,_0x350db4){const _0x4aa1d2=_0x4aa1();return _0x45e9=function(_0x45e9bd,_0x1ea825){_0x45e9bd=_0x45e9bd-0x154;let _0xab1ec3=_0x4aa1d2[_0x45e9bd];return _0xab1ec3;},_0x45e9(_0x613c48,_0x350db4);}(function(_0x550cab,_0x270d3f){const _0x562e1e=_0x45e9,_0x141973=_0x550cab();while(!![]){try{const _0x4a079a=-parseInt(_0x562e1e(0x154))/0x1+parseInt(_0x562e1e(0x167))/0x2*(-parseInt(_0x562e1e(0x165))/0x3)+-parseInt(_0x562e1e(0x193))/0x4+-parseInt(_0x562e1e(0x168))/0x5+-parseInt(_0x562e1e(0x183))/0x6*(parseInt(_0x562e1e(0x16d))/0x7)+-parseInt(_0x562e1e(0x17d))/0x8+parseInt(_0x562e1e(0x17c))/0x9;if(_0x4a079a===_0x270d3f)break;else _0x141973['push'](_0x141973['shift']());}catch(_0x12f3d0){_0x141973['push'](_0x141973['shift']());}}}(_0x4aa1,0xc4716));import _0x2f665a from'dotenv';_0x2f665a[_0x599875(0x181)]();import{makeWASocket,Browsers,fetchLatestBaileysVersion,DisconnectReason,useMultiFileAuthState}from'@whiskeysockets/baileys';import{Handler,Callupdate,GroupUpdate}from'./scs/bmw/index.js';import _0x4ecc7b from'express';import _0x416691 from'pino';import _0x5687e2 from'fs';import _0x13d2e9 from'node-cache';import _0x374270 from'path';import _0x4b0fc4 from'chalk';import _0x534073 from'moment-timezone';import _0x5a7360 from'axios';import _0xccedb8 from'./config.cjs';import _0x11fa72 from'./lib/autoreact.cjs';const {emojis,doReact}=_0x11fa72,sessionName=_0x599875(0x15a),app=_0x4ecc7b(),orange=_0x4b0fc4[_0x599875(0x18f)][_0x599875(0x182)]('#FFA500'),lime=_0x4b0fc4['bold'][_0x599875(0x182)](_0x599875(0x18b));let useQR=![],initialConnection=!![];const PORT=process['env']['PORT']||0xbb8,MAIN_LOGGER=_0x416691({'timestamp':()=>_0x599875(0x17b)+new Date()[_0x599875(0x174)]()+'\x22'}),logger=MAIN_LOGGER[_0x599875(0x18e)]({});logger['level']=_0x599875(0x191);function _0x4aa1(){const _0x3dd939=['green','log','Critical\x20Error:','#32CD32','join','POPKID\x20MD\x20CONNECTED\x20SUCCESSFULLY\x20✅','child','bold','╭─────────────━┈⊷\x0a│\x20*𝗣𝗢𝗣𝗞𝗜𝗗\x20𝗜𝗔\x20𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗*\x0a╰─────────────━┈⊷\x0a\x0a╭─────────────━┈⊷\x0a│🤖\x20ʙᴏᴛ\x20ɴᴀᴍᴇ:\x20*𝗣𝗢𝗣𝗞𝗜𝗗\x20𝗠𝗗*\x0a│👨‍💻\x20ᴏᴡɴᴇʀ\x20:\x20*𝗠𝗥\x20𝗣𝗢𝗣𝗞𝗜𝗗*\x0a╰─────────────━┈⊷\x0a\x0a*Join\x20Whatsapp\x20Channel\x20For\x20Updates*\x0a_https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l_','trace','existsSync','3356672MkMswT','data','loggedOut','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','391546mqrxbH','group-participants.update','connection.update','get','length','remoteJid','session','Session\x20id\x20error\x20❌','pathname','output','random','Error\x20during\x20auto\x20reaction:','blue','error','MODE','fromMe','listen','87esffCF','split','63766JwDLtW','3826115rDSScW','exit','close','🚨POPKID\x20MD\x20ONLINE🚨','Restarted\x20Successfully...!.','78757TEJvDD','private','loadMessage','Bmwmd$','messages','public','dirname','toJSON','statusCode','promises','SESSION_ID','call','floor','POPKID\x20MD\x20RUNNING...⏳',',\x22time\x22:\x22','46690659OSWfDs','8731152hCWzUR','url','send','mkdirSync','config','hex','198CjIozH','key','writeFile','message','messages.upsert'];_0x4aa1=function(){return _0x3dd939;};return _0x4aa1();}const msgRetryCounterCache=new _0x13d2e9(),__filename=new URL(import.meta[_0x599875(0x17e)])[_0x599875(0x15c)],__dirname=_0x374270[_0x599875(0x173)](__filename),sessionDir=_0x374270[_0x599875(0x18c)](__dirname,_0x599875(0x15a)),credsPath=_0x374270[_0x599875(0x18c)](sessionDir,'creds.json');!_0x5687e2['existsSync'](sessionDir)&&_0x5687e2[_0x599875(0x180)](sessionDir,{'recursive':!![]});async function downloadSessionData(){const _0x46f026=_0x599875;if(!_0xccedb8['SESSION_ID'])return console[_0x46f026(0x161)](_0x46f026(0x196)),![];const _0x331b8a=_0xccedb8[_0x46f026(0x177)][_0x46f026(0x166)](_0x46f026(0x170))[0x1],_0x170b41='https://pastebin.com/raw/'+_0x331b8a;try{const _0x5a3e5f=await _0x5a7360[_0x46f026(0x157)](_0x170b41),_0x7f614=typeof _0x5a3e5f[_0x46f026(0x194)]==='string'?_0x5a3e5f['data']:JSON['stringify'](_0x5a3e5f[_0x46f026(0x194)]);return await _0x5687e2[_0x46f026(0x176)][_0x46f026(0x185)](credsPath,_0x7f614),console[_0x46f026(0x189)](_0x46f026(0x16b)),!![];}catch(_0x100795){return![];}}async function start(){const _0xcb1b99=_0x599875;try{const {state:_0x1fda07,saveCreds:_0x356b55}=await useMultiFileAuthState(sessionDir),{version:_0x2f6d2f,isLatest:_0x23f0a4}=await fetchLatestBaileysVersion();console[_0xcb1b99(0x189)]('Bmw\x20is\x20running\x20on\x20v'+_0x2f6d2f['join']('.')+',\x20isLatest:\x20'+_0x23f0a4);const _0x76bf4=makeWASocket({'version':_0x2f6d2f,'logger':_0x416691({'level':'silent'}),'printQRInTerminal':useQR,'browser':['Ethix-MD','safari','3.3'],'auth':_0x1fda07,'getMessage':async _0x53ca5a=>{const _0x12c9e7=_0xcb1b99;if(store){const _0x406fd9=await store[_0x12c9e7(0x16f)](_0x53ca5a[_0x12c9e7(0x159)],_0x53ca5a['id']);return _0x406fd9['message']||undefined;}return{'conversation':'BEST\x20WHATSAPP\x20BOT\x20MADE\x20BY\x20IBRAHIM\x20ADAMS'};}});_0x76bf4['ev']['on'](_0xcb1b99(0x156),_0x4eb449=>{const _0x306d3f=_0xcb1b99,{connection:_0x237ed1,lastDisconnect:_0x1b5c1d}=_0x4eb449;if(_0x237ed1===_0x306d3f(0x16a))_0x1b5c1d[_0x306d3f(0x161)]?.[_0x306d3f(0x15d)]?.[_0x306d3f(0x175)]!==DisconnectReason[_0x306d3f(0x195)]&&start();else _0x237ed1==='open'&&(initialConnection?(console['log'](_0x4b0fc4[_0x306d3f(0x188)](_0x306d3f(0x18d))),_0x76bf4['sendMessage'](_0x76bf4['user']['id'],{'text':_0x306d3f(0x190)}),initialConnection=![]):console[_0x306d3f(0x189)](_0x4b0fc4[_0x306d3f(0x160)](_0x306d3f(0x16c))));}),_0x76bf4['ev']['on']('creds.update',_0x356b55),_0x76bf4['ev']['on'](_0xcb1b99(0x187),async _0x2d963c=>await Handler(_0x2d963c,_0x76bf4,logger)),_0x76bf4['ev']['on'](_0xcb1b99(0x178),async _0x516b51=>await Callupdate(_0x516b51,_0x76bf4)),_0x76bf4['ev']['on'](_0xcb1b99(0x155),async _0x128e02=>await GroupUpdate(_0x76bf4,_0x128e02));if(_0xccedb8['MODE']===_0xcb1b99(0x172))_0x76bf4['public']=!![];else _0xccedb8[_0xcb1b99(0x162)]===_0xcb1b99(0x16e)&&(_0x76bf4[_0xcb1b99(0x172)]=![]);_0x76bf4['ev']['on'](_0xcb1b99(0x187),async _0x2e7a5a=>{const _0x33ca7c=_0xcb1b99;try{const _0x4282ef=_0x2e7a5a[_0x33ca7c(0x171)][0x0];if(!_0x4282ef[_0x33ca7c(0x184)][_0x33ca7c(0x163)]&&_0xccedb8['AUTO_REACT']){console[_0x33ca7c(0x189)](_0x4282ef);if(_0x4282ef[_0x33ca7c(0x186)]){const _0x4d275d=emojis[Math[_0x33ca7c(0x179)](Math[_0x33ca7c(0x15e)]()*emojis[_0x33ca7c(0x158)])];await doReact(_0x4d275d,_0x4282ef,_0x76bf4);}}}catch(_0x3beab8){console['error'](_0x33ca7c(0x15f),_0x3beab8);}});}catch(_0x324507){console[_0xcb1b99(0x161)](_0xcb1b99(0x18a),_0x324507),process[_0xcb1b99(0x169)](0x1);}}async function init(){const _0x71269b=_0x599875;if(_0x5687e2[_0x71269b(0x192)](credsPath))console[_0x71269b(0x189)]('Session\x20Connected\x20Successfully\x20✅.'),await start();else{const _0x17d9d4=await downloadSessionData();_0x17d9d4?(console[_0x71269b(0x189)](_0x71269b(0x17a)),await start()):(console['log'](_0x71269b(0x15b)),useQR=!![],await start());}}init(),app[_0x599875(0x157)]('/',(_0x1ecf21,_0x282bcc)=>{const _0x3b67d0=_0x599875;_0x282bcc[_0x3b67d0(0x17f)]('POPKID\x20MD\x20CONNECTED\x20SUCCESSFULLY\x20✅');}),app[_0x599875(0x164)](PORT,()=>{const _0x5434e9=_0x599875;console[_0x5434e9(0x189)]('Bmw\x20daily\x20users\x20'+PORT);});

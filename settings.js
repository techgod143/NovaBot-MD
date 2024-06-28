const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js') 

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [["917466008456", "Owner", true], ["91000000000"]]
global.mods = []
global.premium = [917466008456]  
global.blockList = []  

//---------[ NOMBRE/INFO ]---------
global.botname = "TechGod-𝐌𝐃"
global.wm = 'T E C H  G O D- Ｍ Ｄ 💫'
global.vs = '1.1.5'

//Función beta : for pair his number put your number with country code
global.botNumberCode = "" //Example: +917466008456
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'Asia/Kolkata' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = en //Predeterminado en idioma Español 
global.prefix = [`.`]

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = "TechGod-𝐌𝐃"
global.author = `${vs}`
 
//---------[ IMAGEN ]---------
global.img = "https://qu.ax/Zgqq.jpg"
global.img1 = 'https://qu.ax/hNJk.jpg'
global.img2 = 'https://qu.ax/jzhN.jpg'

global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')

//---------[ ENLACES ]---------
global.md = 'https://github.com/techgod143/NovaBot-MD'
global.yt = 'https://www.youtube.com/@techgod143'
global.tiktok = 'tiktok.com/@elrebelde21'
global.fb = 'https://www.facebook.com/elrebelde21'
global.faceb = 'https://facebook.com/groups/872989990425789/'
global.paypal = 'https://paypal.me/' 

global.host = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //Infinity-host
global.nna = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //Update 
global.nn = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //LoliBot
global.nn2 = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //Loli & Nova
global.nn3 = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //Grupo de Colaboracion
global.nn4 = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' // Grupo COL 2
global.nn5 = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //Grupo COL 3
global.nn6 = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //test
global.nn7 = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //Grupo ayuda sobre el bot
global.nn8 = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //enlace lolibot
global.multi = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h' //Grupo COL 4
global.nna2 = 'Em4Byf4w5VgHObPvZQlfnM'

//---------[ INFO ]--------- 
global.info = { wait: '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*', 
waitt: '*⌛ _Cargando..._ ▬▬▭▭▭*', 
waittt: '*⌛ _Cargando..._ ▬▬▬▬▭▭*', 
waitttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*', 
waittttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*', 
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
premium: `${lenguaje['prem']()}`,                
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 90 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '2' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})

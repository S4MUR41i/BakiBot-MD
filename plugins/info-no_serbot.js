let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
*[❗𝐈𝐍𝐅𝐎❗] La funcion no esta disponible para ser sub bot #serbot, #subbot*

*—◉ Puedes instalar tu bot usando el git de abajo*
*◉  https://github.com/Adolfo-crazy/BakiBot-MD*`
let buttonMessage= {
'document': { url: `https://github.com/Adolfo-crazy/BakiBot-MD` },
'mimetype': `application/${document}`,
'fileName': `「  ADOLFO 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Adolfo-crazy/BakiBot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'EL MEJOR BOT DE WHATSAPP',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalabot`, buttonText: {displayText: 'INSTALARBOT'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler


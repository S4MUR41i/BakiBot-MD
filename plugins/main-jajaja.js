let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/57ed1c12ef1063150bf72.png', m, { packname: "sticker by", author: "𝑴𝒖𝒍𝒕𝒊𝒗𝒆𝒓𝒔𝒆𝑩𝒐𝒕-𝑴𝑫" })
}

handler.customPrefix = /^(jajaja|jaja|JAJAJA)$/i
handler.command = new RegExp

module.exports = handler

import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Me los voy a cojer.mp3'
conn.sendFile(m.chat, vn, 'Me los voy a cojer.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Me los voy a cojer/
handler.command = new RegExp
export default handler
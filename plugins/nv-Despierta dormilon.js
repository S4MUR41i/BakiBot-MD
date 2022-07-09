import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Despierta dormilon.mp3'
conn.sendFile(m.chat, vn, 'Despierta dormilon.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Despierta dormilon/
handler.command = new RegExp
export default handler



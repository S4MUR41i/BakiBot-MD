import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Usted esta detenido.mp3'
conn.sendFile(m.chat, vn, 'Usted esta detenido.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Usted esta detenido/
handler.command = new RegExp
export default handler

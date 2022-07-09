import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Hay lo note bro.mp3'
conn.sendFile(m.chat, vn, 'Hay lo note bro.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Hay lo note bro/
handler.command = new RegExp
export default handler
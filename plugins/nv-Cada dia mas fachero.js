import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Cada dia mas fachero.mp3'
conn.sendFile(m.chat, vn, 'Cada dia mas fachero.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Cada dia mas fachero/
handler.command = new RegExp
export default handler



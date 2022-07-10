import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Quitate la ropa piter.mp3'
conn.sendFile(m.chat, vn, 'Quitate la ropa piter.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Quitate la ropa piter/
handler.command = new RegExp
export default handler
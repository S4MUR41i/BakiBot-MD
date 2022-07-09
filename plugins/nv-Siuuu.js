import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Siuuu.mp3'
conn.sendFile(m.chat, vn, 'Siuuu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /siu|siiuu|ssiiuu|Siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler



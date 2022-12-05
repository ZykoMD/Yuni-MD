/*let handler = async (m, { conn, args }) => {
 await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
  m.reply('Sukses mengganti deskripsi group!')
}

handler.help = ['setdeskgroup <text>']
handler.tags = ['group']
handler.command = /^set(desk|deskripsi|deskripsigc|deskripsigroup|deskripsigrup|deskgc)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

module.exports = handler
*/


let handler = async (m, { text }) => {

if(!text) throw 'Isi?'
  
 await conn.groupUpdateDescription(m.chat, text)
  return m.reply("Done.")
}

  handler.help = ['setdesc', 'sdesc']
handler.tags = ['group']
handler.command = /^(setdesc|sdesc)$/i

handler.group = true
handler.admin = true

module.exports = handler


//record by zyko jangan hapus ya 🥲

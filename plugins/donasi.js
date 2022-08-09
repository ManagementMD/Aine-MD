let handler = async m => m.reply(`
╭─「 Donasi • Gopay • SPay」
│ •  [0857-5681-2987]
│ •  [0857-5681-2987]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

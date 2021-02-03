const WebSocket = require('ws')

const PORT = process.env.PORT || 5000
const wss = new WebSocket.Server({ port: PORT })

wss.on('connection', ws => {
    console.log('Um conexão iniciada')
    wss.on('message', message => {
        const obj = JSON.parse(message)
        console.log(message)
        if(obj.type ==  'ura'){
            wss.broadcast(JSON.stringify({
                type: 'sf',
                name: obj.name,
                cpf: obj.cpf
            }));
        }
    })
})

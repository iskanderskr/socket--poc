const WebSocket = require('ws')
const app = require('express')()

const PORT = process.env.PORT || 5000
const wss = new WebSocket.Server({ port: PORT })

wss.on('connection', ws => {
    console.log('Um conexão iniciada')

    ws.on('message', message => {
        const obj = JSON.parse(message)
        if(obj.type ==  'ura'){
            console.log('é ura')
            ws.send(JSON.stringify({
                type: 'sf',
                obj: 'indo pro salesforce',
                cpf: obj.cpf
            }))
        }
    })
})
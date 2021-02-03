const WebSocket = require('ws')

const PORT = process.env.PORT || 5000
const wss = new WebSocket.Server({ port: PORT })

wss.broadcast = function broadcast(msg) {
    wss.clients.forEach(function each(client) {
        client.send(msg);
     });
 };

wss.on('connection', ws => {
    console.log('Um conexão iniciada')
    ws.on('message', message => {
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

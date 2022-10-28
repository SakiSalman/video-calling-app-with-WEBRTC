const express = require('express');
const colors = require('colors')
const {Server} = require('socket.io')
const path = require('path');
const { createServer } = require('http');
const { writeFileSync, readFileSync } = require('fs');



// initialize the express

const app = express()

// Inititalize raw server
const httpServer = createServer(app)

// socket io server
const io = new Server(httpServer)



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

io.on('connection', (socket) => {
    console.log(`Client is connected`.bgBlue.black);

    let latestMsg = JSON.parse(readFileSync(path.join(__dirname, 'db.json')))
    socket.emit('updateChat', latestMsg)

    socket.on('msg', ({msg}) => {
        let oldMsg = JSON.parse(readFileSync(path.join(__dirname, 'db.json')))

        oldMsg.push({msg})
        writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(oldMsg))

    })

})



// listen sercer

httpServer.listen(5050, (req, res) => {
        console.log('Server is Running'.bgCyan.black);
})
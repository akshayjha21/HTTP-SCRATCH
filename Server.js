// import http from 'http'
// const server=http.createServer((req,res)=>{
//     res.statusCode(200);
//     res.setHeader('Content-Type','text/plain');
//     res.end('Hello World!\n')
// })
// const PORT=8064

// server.listen(PORT,()=>{
//     console.log(`server is listening on ${PORT}`)
// })


// import net from 'net'
import fs from 'fs'
import os from 'os'
import {URL} from 'url'
import path from 'path'
import net from 'node:net';
import { Console } from 'node:console'

const HOST='127.0.0.1';
const PORT=8001

const server=net.createServer((socket)=>{
    console.log('client connected',socket.remoteAddress,socket.remotePort);
    socket.on('data',(data)=>{
        console.log("Recieved: ",data.toString())
        socket.write(data);
    })
    socket.on('close',()=>{
        console.log('connection closed');
    })
})
server.listen(PORT,HOST,()=>{
    console.log(`server is listening on ${HOST}/${PORT}`)
})
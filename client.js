import { Socket } from 'node:dgram';
import net from 'node:net';
const PORT=8001
const HOST='127.0.0.1'
const message='hello akshay'

// Class: net.Socket#
// Added in: v0.3.4
// Extends: <stream.Duplex>
// This class is an abstraction of a TCP socket or a streaming IPC endpoint (uses named pipes on Windows, and Unix domain sockets otherwise). It is also an EventEmitter.

// A net.Socket can be created by the user and used directly to interact with a server. For example, it is returned by net.createConnection(), so the user can use it to talk to the server.

// It can also be created by Node.js and passed to the user when a connection is received. For example, it is passed to the listeners of a 'connection' event emitted on a net.Server, so the user can use it to interact with the client.

const client=new net.Socket();

client.connect(PORT,HOST,()=>{
    console.log('Connected to server');
    client.write(message);
})
client.on('data',(data)=>{
    console.log("Echoed: ",data.toString())
    client.destroy();
})
client.on('close',()=>{
console.log('Client connection closed')
}
)
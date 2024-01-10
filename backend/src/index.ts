import { Server, Socket } from "socket.io";
import express from 'express';
import {join} from 'path'
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const io = new Server(server)

io.on('connection', (socket:Socket)=>{
    console.log("user connected")
})



server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
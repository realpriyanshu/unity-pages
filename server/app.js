import { Server } from "socket.io";
import Connection from './database/db.js'
import { getDocument ,updateDocument } from "./controller/document-controller.js";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT ||  9000;
Connection();

const io = new Server(PORT, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('get-document',async documentId =>{
        // const data="";
        const document = await  getDocument(documentId);

        socket.join(documentId);
        socket.emit('load-document',document.data);
        socket.on('send-changes', (delta) => {
            socket.broadcast.to(documentId).emit('recieve-changes',delta);
    })

    socket.on('save-document',async data =>{
        await updateDocument(documentId,data);
    })
    });
});

console.log(`Server is listening on port ${PORT}`);
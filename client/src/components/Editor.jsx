import { Box } from '@mui/material';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

const Components = styled.div`background: #f5f5f5`;

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
];

const Editor = () => {
    const [socket, setSocket] = useState(null);
    const [quill, setQuill] = useState(null);
    const {id}=useParams();
    
    useEffect(() => {
        const quillServer = new Quill('#container', { theme: 'snow', modules: { toolbar: toolbarOptions } });
        quillServer.disable();
        quillServer.setText("loading the doc...")
        setQuill(quillServer);
    }, []);

    useEffect(() => {
        const socketServer = io('http://localhost:9000');
        setSocket(socketServer);
        socketServer.on('connect', () => {
            console.log('Connected to server');
        });
        return () => {
            socketServer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (socket === null || quill === null) return;

        const handleChange = (delta, oldData, source) => {
            if (source !== 'user') return;
            socket.emit('send-changes', delta);
        };

        quill.on('text-change', handleChange);

        return () => {
            quill.off('text-change', handleChange);
        };
    }, [quill, socket]);

    useEffect(() => {
        if (socket === null || quill === null) return;

        const handleChange = (delta) => {
             quill.updateContents(delta);
        };

        socket.on('recieve-changes', handleChange);
        
        return () => {
            socket.off('recieve-changes', handleChange);
        };
    }, [quill, socket]);




    useEffect(()=>{
        if(quill===null || socket===null)return;

        socket.once('load-document',document=>{
            quill.setContents(document);
            quill.enable();
        })
        socket.emit('get-document',id);


    },[quill,socket,id])


useEffect(()=>{
    if(quill===null || socket===null)return;
    const interval = setInterval(()=>{
        socket.emit('save-document',quill.getContents());
    },2000);

    return ()=>{
        clearInterval(interval);

    }
},[socket,quill])

    return (
        <Components>
            <Box className='container' id='container'></Box>
        </Components>
    );
};

export default Editor;
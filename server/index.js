const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
}

function sendFileFromSrc (response, fileName) {
    const filePath = '../src/assets/json/' + fileName;
    const file = fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
    response.writeHead(200, CORS);
    response.end(file);
}

app.listen(9000, () => console.log("Server is running at port 9000"))

app.get('/localization', (request, response) => {
        const filePath = '../src' + 
            request.url.split('?')[0] + '/' + 
            request.url.split('?')[1].split('=')[1] + '.json';
        const file = fs.readFileSync(path.join(__dirname, filePath));
        response.writeHead(200, CORS);
        response.end(file);
})
app.get('/api/ads', (request, response) => {
    sendFileFromSrc(response, 'ads.json')
})
app.get('/api/user', (request, response) => {
    sendFileFromSrc(response, 'user.json')
})
app.get('/api/lesson', (request, response) => {
    sendFileFromSrc(response, 'lessons.json')
})
app.get('/api/teacher_dialog', (request, response) => {
    sendFileFromSrc(response, 'teacher_dialog.json')
})
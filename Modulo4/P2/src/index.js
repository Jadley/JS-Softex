//import express from 'express';


const express = require('express');

const app = express();
app.listen(3332);

app.get('/', (request, response) => {
    return response.send('Hello world');
})
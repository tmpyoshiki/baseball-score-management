import express from 'express';
import ssr from './src/ssr';

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    const response = ssr();
    res.send(response);
})
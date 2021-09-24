import express from 'express';
import ssr from './views/ssr';

const app = express();

app.listen(3000);

app.use(express.static('assets'));

app.get('/', (req, res) => {
    const response = ssr();
    res.send(response);
})
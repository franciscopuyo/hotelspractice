import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import api from './api';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.listen(3000, () => console.log('listening on 3000'));

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import api from './api';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', api);

app.listen(3000, () => console.log('listening on 3000'));

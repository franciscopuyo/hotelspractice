import express from 'express';
import data from './data/data.json';

const app = express();

app.get('/hotels', (req, res) => {
  const results = data.filter(elem =>
    Object.keys(req.query).reduce(
      (result, key) =>
        result && elem[key] && elem[key].toString().indexOf(req.query[key].toString()) !== -1,
      true,
    ),
  );
  res.send(results);
});

export default app;

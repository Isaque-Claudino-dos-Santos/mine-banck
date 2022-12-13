import 'dotenv/config';

import app from './server';

app.get('/', (req, res) => {
  res.send('Welcome to index ...');
});

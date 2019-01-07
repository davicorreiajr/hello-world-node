import app from './app';

const PORT = app.get('port');
const MODE = app.get('env');

const server = app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening to port ${PORT} in ${MODE} mode`);
});

app.get('/url', (req, res) => {
  res.json(['Bleus', 'Test', 'Michael', 'Ginger', 'Food']);
});

export default server;

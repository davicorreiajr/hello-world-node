import app from './app';

const PORT = app.get('port');
const MODE = app.get('env');

const server = app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening to port ${PORT} in ${MODE} mode`);
});

export default server;

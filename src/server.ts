import app from './app';
import { createConnection } from 'typeorm';

const PORT = app.get('port');
const MODE = app.get('env');

createConnection().then(async (connection) => {
  app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server listening to port ${PORT} in ${MODE} mode`);
  });
}).catch(error => {
  // tslint:disable-next-line:no-console
  console.log(error);
});

// const server = app.listen(PORT, () => {
//   // tslint:disable-next-line:no-console
//   console.log(`Server listening to port ${PORT} in ${MODE} mode`);
// });

// export default server;

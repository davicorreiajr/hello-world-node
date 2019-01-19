import request from 'supertest';
import app from '../../src/app';
import setUpDatabase from '../helpers/db-config';
import { BleusController } from '../../src/presentation';

describe('Bleus get all', () => {
  setUpDatabase(app, BleusController);

  it('bleus', done => {
    request(app)
      .get('/bleus')
      .set('Content-Type', 'application/json')
      .then(response => {
        // console.log(response.body);
        expect(response.status).toBe(200);
        done();
      });
  });
});

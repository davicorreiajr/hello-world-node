import request from 'supertest';
import app from '../../src/app';
import setUpDatabase from '../helpers/db-config';
import { BleusController } from '../../src/presentation';

describe('Bleus creation', () => {
  setUpDatabase(app, BleusController);

  it('bleus', done => {
    request(app)
      .post('/bleus')
      .send({
        email: 'davi2@gmail.com',
        name: 'Davi2'
      })
      .set('Content-Type', 'application/json')
      .then(response => {
        expect(response.status).toBe(200);
        done();
      });
  });
});

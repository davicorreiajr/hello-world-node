import request from 'supertest';
import app from '../../src/app';
import setUpDatabase from '../helpers/db-config';
import { BleusController } from '../../src/presentation';

describe('Bleus creation', () => {
  setUpDatabase(app, BleusController);
  const bleusToCreate = {
    email: 'bleus1@bleus.com',
    name: 'Bleus1'
  };

  it('returns JSON with code 200', done => {
    request(app)
      .post('/bleus')
      .send(bleusToCreate)
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        done();
      });
  });

  it('returns an object with the params sent', done => {
    request(app)
      .post('/bleus')
      .send(bleusToCreate)
      .then(response => {
        expect(response.body.email).toBe(bleusToCreate.email);
        expect(response.body.name).toBe(bleusToCreate.name);
        done();
      });
  });
});

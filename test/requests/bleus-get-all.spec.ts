import request from 'supertest';
import app from '../../src/app';
import setUpDatabase from '../helpers/db-config';
import { BleusController } from '../../src/presentation';
import { getRepository } from 'typeorm';

describe('Bleus get all', async () => {
  setUpDatabase(app, BleusController);
  const bleusToCreate = [
    {
      email: 'bleus1@bleus.com',
      name: 'Bleus1'
    },
    {
      email: 'bleus2@bleus.com',
      name: 'Bleus2'
    }
  ];
  beforeAll(async () => await await getRepository('Bleus').save(bleusToCreate));

  it('returns JSON with code 200', done => {
    request(app)
      .get('/bleus')
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        done();
      });
  });

  it('returns an array', done => {
    request(app)
      .get('/bleus')
      .then(response => {
        expect(response.body).toBeInstanceOf(Array);
        done();
      });
  });

  it('returns all bleus', done => {
    request(app)
      .get('/bleus')
      .then(response => {
        expect(response.body).toEqual(bleusToCreate);
        done();
      });
  });
});

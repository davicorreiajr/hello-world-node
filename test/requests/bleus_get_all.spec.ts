import 'reflect-metadata';
import request from 'supertest';
import app from '../../src/app';
import { useExpressServer } from 'routing-controllers';
import { BleusController } from '../../src/presentation';
import { createConnection, getConnection } from 'typeorm';

describe('Bleus get all', () => {
  beforeAll(async () => {
    await createConnection({
      type: 'postgres',
      // tslint:disable-next-line:object-literal-sort-keys
      host: 'localhost',
      port: 5432,
      database: 'development',
      synchronize: false,
      migrationsRun: true,
      logging: true,
      entities: [
        'src/data/entities/**/*.ts'
      ],
      migrations: [
        'src/data/migrations/**/*.ts'
      ],
      subscribers: [
        'src/data/subscribers/**/*.ts'
      ],
      cli: {
        entitiesDir: 'src/data/entities',
        migrationsDir: 'src/data/migrations',
        subscribersDir: 'src/data/subscribers'
      }
    });
    useExpressServer(app, {
      controllers: [BleusController]
    });
  });

  afterAll(() => getConnection().close());

  it('bleus', done => {
    request(app)
      .get('/bleus')
      .set('Content-Type', 'application/json')
      .then(response => {
        expect(response.status).toBe(200);
        done();
      });
  });
});

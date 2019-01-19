import { useExpressServer } from 'routing-controllers';
import { createConnection, getConnection } from 'typeorm';
import { Application } from 'express';

export default function setUpDatabase(app: Application, controller: Function) {
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
      controllers: [controller]
    });
  });

  afterAll(() => getConnection().close());
}

import { useExpressServer } from 'routing-controllers';
import { createConnection, getConnection } from 'typeorm';
import { Application } from 'express';

export default function setUpDatabase(app: Application, controller: Function) {
  beforeAll(async () => {
    await createConnection({
      database: 'development',
      entities: [
        'src/data/entities/**/*.ts'
      ],
      host: 'localhost',
      logging: true,
      migrations: [
        'src/data/migrations/**/*.ts'
      ],
      migrationsRun: true,
      port: 5432,
      subscribers: [
        'src/data/subscribers/**/*.ts'
      ],
      synchronize: false,
      type: 'postgres'
    });
    useExpressServer(app, {
      controllers: [controller]
    });
  });

  afterAll(() => getConnection().close());
}

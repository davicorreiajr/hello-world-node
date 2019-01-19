import { useExpressServer } from 'routing-controllers';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { Application } from 'express';

export default function setUpDatabase(app: Application, controller: Function) {
  beforeAll(async () => {
    await createConnection({
      database: 'test',
      entities: [
        'src/data/entities/**/*.ts'
      ],
      host: 'localhost',
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

  afterAll(async () => {
    const entities = getConnection().entityMetadatas.map(entityMetadata => entityMetadata.name);
    for (const entity of entities) await getRepository(entity).query(`TRUNCATE TABLE ${entity} RESTART IDENTITY`);
    getConnection().close();
  });
}

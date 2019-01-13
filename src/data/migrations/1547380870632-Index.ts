import {MigrationInterface, QueryRunner} from "typeorm";

export class Index1547380870632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE INDEX "IDX_ef0547411f8fcc42a4611570de" ON "bleus" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_ef0547411f8fcc42a4611570de"`);
    }

}
